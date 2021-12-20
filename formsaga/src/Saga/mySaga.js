import { takeLatest, put } from "@redux-saga/core/effects";
import {onLoadSuccess} from '../Action/action';

export default function* actionWatcher() {
    yield takeLatest("ON_LOAD", actionWorker)
}

export function* actionWorker(action) {
    yield put(onLoadSuccess(action.payload))
}