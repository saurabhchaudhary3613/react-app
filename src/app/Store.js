import {createStore, applyMiddleware, combineReducers} from "redux";
import { rootSaga } from './sagas/saga'
import createSagaMiddleware from 'redux-saga'
import { mainReducer } from './reducers/reducer'

let rootReducer = combineReducers({
    mainReducer,
})

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;
