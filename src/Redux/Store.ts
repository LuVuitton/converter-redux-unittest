import {combineReducers, createStore} from "@reduxjs/toolkit";
import {CurrenciesReducer} from "./Reducers/CurrenciesReducer";
import {ListReducer} from "./Reducers/ListReducer";



const rootReducer = combineReducers({
    inputsState:CurrenciesReducer,
    CurrenciesList:ListReducer
})


export const store:any = createStore(rootReducer)

