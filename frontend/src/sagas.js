import { put, call, all, takeEvery } from 'redux-saga/effects'
import {
    RUN_SCRIPT, scriptFinished,
    UPDATE_CHOSEN_SCRIPT,
    updateAvailableScripts,
    updateChosenScriptDetails
} from "./actions";
import API from "./api"

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
        yield put(scriptFinished(scriptID, response.data))

        // TODO: start polling for logs / results
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
