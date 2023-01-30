import {ActionType, InitialStateType} from "../../Types";


// https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json


const initialState: InitialStateType = {
    UAHCurrentValue: {
        value: 0,
        title: 'UAH'
    },
    AnotherCurrentValue: {
        value: 0,
        title: 'choose currency'
    },
    CurrentPrice: 0
}


export const CurrenciesReducer = (state = initialState, action: ActionType) => {

    switch (action.type) {

        case 'CHANGE-ANOTHER-VALUE':
            return {
        ...state,
                CurrentPrice:action.payload.numValue,
                AnotherCurrentValue: {...state.AnotherCurrentValue, title:action.payload.name}
            }
        case 'UPDATE-UAH-VALUE':

            return {
                ...state,
                UAHCurrentValue: {
                    ...state.UAHCurrentValue, value: action.payload.inputValue
                },
                AnotherCurrentValue: {...state.AnotherCurrentValue, value:action.payload.inputValue / state.CurrentPrice}

            }
    }

    return {...state}
}