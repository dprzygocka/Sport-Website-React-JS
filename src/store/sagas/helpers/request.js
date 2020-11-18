import { call, cancelled, put } from "redux-saga/effects";
import { REQUEST } from "../../actions/request";

export default function* request(action, fn) {
    yield put({
        ...action,
        sequence: REQUEST.START
    });

    try {
        const payload = yield call(fn);
        return yield put({
            payload,
            type: action.type,
            rootAction: action.rootAction || {},
            sequence: REQUEST.SUCCESS,
            extras: action.extras
        })
    } catch (error) {
        return yield put({
            error: error,
            type: action.type,
            rootAction: action.rootAction || {},
            sequence: REQUEST.ERROR,
            extras: action.extras
        })
    } finally {
        if (yield cancelled()) {
            yield put({
                ...action,
                sequence: REQUEST.CANCEL,
                extras: action.extras
            })
        }
    }
}