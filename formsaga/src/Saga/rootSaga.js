import {all} from "redux-saga/effects";
import actionWatcher from "./mySaga";

export default function* rootSaga() {
    yield all ([actionWatcher()]);
}