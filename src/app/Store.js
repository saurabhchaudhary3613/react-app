import {createStore, 
    applyMiddleware,
    combineReducers} from "redux";

import thunk from "redux-thunk";

let rootReducer = combineReducers({
    
})

let store = createStore(rootReducer,
                    applyMiddleware(thunk),
                        
                );
                    

export default store;