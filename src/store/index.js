import { createStore, combineReducers, compose, applyMiddleware } from "redux"
// import reducers 
import libraryReducer from "../reducers/libraryReducer";
import utilsReducer from "../reducers/utilsReducers";
import thunk from "redux-thunk"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const initialState = {
    library: {
        searchResult: []
    },
    utils: {
        isLoading: false,
        errorMessage: ""
    }
}

const combinedReducers = combineReducers({
    library: libraryReducer,
    utils: utilsReducer
})

export default function configureStore() {
    return createStore(combinedReducers,
        initialState,
        composeEnhancers(applyMiddleware(thunk))
    )
}