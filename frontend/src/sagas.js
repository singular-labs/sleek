import { put, call } from 'redux-saga/effects'
import {updateAvailableScripts} from "./actions";
import API from "./api"


export function* rootSaga() {
    const api = new API();
    const response = yield call(api.getAvailableScripts);
    yield put(updateAvailableScripts(response.data));
}
