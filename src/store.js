import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './store/sagas'
import rootReducer from './store/reducers'

const initialState = {

}

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

