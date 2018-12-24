import { put, call, all, takeEvery } from 'redux-saga/effects'
import {
    UPDATE_CHOSEN_SCRIPT,
    updateAvailableScripts,
    updateChosenScriptDetails
} from "./actions";
import API from "./api"

function* getAllScripts() {
    console.log("bla1");
    const api = new API();
    const response = yield call(api.getAvailableScripts);
    yield put(updateAvailableScripts(response.data));
}

function* getScriptDetails(action) {
    try {
        console.log("bla3");
        const api = new API();
        const response = yield call(api.getScriptDetails, action.scriptID);
        yield put(updateChosenScriptDetails(response.data));
    } catch(error) {
        console.log(error);
    }
}

function* watchGetScriptDetails() {
    console.log("bla2");
    yield takeEvery(UPDATE_CHOSEN_SCRIPT, getScriptDetails)
}

export function* rootSaga() {
    console.log("mega bla3");
    yield all([
        getAllScripts(),
        watchGetScriptDetails()
    ])
}
