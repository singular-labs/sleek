import { delay } from 'redux-saga'
import { put, call, all, takeEvery } from 'redux-saga/effects'
import {cleanRunningScriptState, RUN_SCRIPT, scriptFinished, updateScriptStatus} from "./actions";
import API from "./api"

const SCRIPT_POLLING_INTERVAL = 100;

function* runScript(action) {
    try {
        const {
            scriptID,
            paramValues
        } = action;

        yield put(cleanRunningScriptState());

        const response = yield call(API.runScript, scriptID, paramValues);
        const scriptRunId = response.data["script_run_id"];
        yield put(updateScriptStatus(scriptRunId, false, ""));

        let isDone = false;
        let scriptResult = null;
        while (!isDone) {
            yield delay(SCRIPT_POLLING_INTERVAL);

            const response = yield call(API.getScriptStatus, scriptRunId);
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

function* watchRunScript() {
    yield takeEvery(RUN_SCRIPT, runScript)
}

export function* rootSaga() {
    yield all([
        watchRunScript()
    ])
}
