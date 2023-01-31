import {testCurrenciesState} from "../TestCurrenciesState";
import {ActionType, CurrenciesItemType} from "../../Types";

export const ListReducer = (state=testCurrenciesState, action:ActionType):CurrenciesItemType[] => {

    return [...state]
}