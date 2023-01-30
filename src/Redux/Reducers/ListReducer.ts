import {testCurrenciesState} from "../TestCurrenciesState";
import {ActionType} from "../../Types";

export const ListReducer = (state=testCurrenciesState, action:ActionType) => {

    return [...state]
}