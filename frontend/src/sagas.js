import { delay } from 'redux-saga'
import { put, call, all, takeEvery } from 'redux-saga/effects'
import {
    RUN_SCRIPT, scriptFinished,
    UPDATE_CHOSEN_SCRIPT,
    updateAvailableScripts,
    updateChosenScriptDetails, updateScriptStatus
} from "./actions";
import API from "./api"

const SCRIPT_POLLING_INTERVAL = 100;

function* getAllScripts() {
    const api = new API();
    const response = yield call(api.getAvailableScripts);
    yield put(updateAvailableScripts(response.data));
}

function* getScriptDetails(action) {
    try {
        const api = new API();
        const response = yield call(api.getScriptDetails, action.scriptID);
        yield put(updateChosenScriptDetails(response.data));
    } catch(error) {
        console.log(error);
    }
}

function* runScript(action) {
    try {
        const {
            scriptID,
            paramValues
        } = action;

        const api = new API();
        const response = yield call(api.runScript, scriptID, paramValues);
        const scriptRunId = response.data["script_run_id"];
        yield put(updateScriptStatus(scriptRunId, false, ""));

        let isDone = false;
        let scriptResult = null;
        while (!isDone) {
            console.log("Iteration!");
            yield delay(SCRIPT_POLLING_INTERVAL);

            const response = yield call(api.getScriptStatus, scriptRunId);
            yield put(updateScriptStatus(scriptRunId,
                response.data["is_done"], response.data["logs"]));

            isDone = response.data["is_done"];
            scriptResult = response.data["result"]
        }

        yield put(scriptFinished(scriptID, scriptResult));
    } catch(error) {
        console.log(error);
    }
}

function* watchGetScriptDetails() {
    yield takeEvery(UPDATE_CHOSEN_SCRIPT, getScriptDetails)
}

function* watchRunScript() {
    yield takeEvery(RUN_SCRIPT, runScript)
}

export function* rootSaga() {
    yield all([
        getAllScripts(),
        watchGetScriptDetails(),
        watchRunScript()
    ])
}
