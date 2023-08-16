import {applyMiddleware, combineReducers, createStore} from "redux";
import {ActionType, counterReducer} from "./counter-reducer";
import thunk, {ThunkDispatch} from "redux-thunk";
import {useDispatch} from "react-redux";


export type AppRootType = ReturnType<typeof rootReducer>
const rootReducer = combineReducers({
    counter: counterReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))


type ThunkDispatchType = ThunkDispatch<AppRootType, any, ActionType>
export const useAppDispatch = () => useDispatch<ThunkDispatchType>()


export default store
