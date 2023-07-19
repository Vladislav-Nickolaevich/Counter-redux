import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";


export type AppRootType = ReturnType<typeof rootReducer>
const rootReducer = combineReducers({
    counter: counterReducer
})

const store = createStore(rootReducer)

export default store
