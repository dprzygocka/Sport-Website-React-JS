import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './store/sagas'
import rootReducer from './store/reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {

}

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
    rootReducer,
    initialState,
    compose(
        composeWithDevTools(),
        applyMiddleware(sagaMiddleware)
    )
)

sagaMiddleware.run(rootSaga)

