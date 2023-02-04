import {testCurrenciesState} from "../TestCurrenciesState";
import {ActionType, CurrenciesItemType} from "../../Types";

export const ListReducer = (state=testCurrenciesState, action:ActionType):CurrenciesItemType[] => {

switch (action.type){
    case 'SET-CURRENCIES':
    return action.payload.receivedCurr
}
    return state
}