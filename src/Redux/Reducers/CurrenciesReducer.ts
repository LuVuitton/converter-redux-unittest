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
    CurrentPrice: 0,
    warnings:{
        errorValue: {
            value:false,
            textWarning: 'value must be greater than 0'
        },
        notSelected: {
            value:false,
            textWarning: 'choose currency'
        }
    }
}


export const CurrenciesReducer = (state = initialState, action: ActionType) => {

    switch (action.type) {

        case 'CHANGE-ANOTHER-VALUE':
            return {
                ...state,
                CurrentPrice: action.payload.numValue,
                AnotherCurrentValue: {
                    ...state.AnotherCurrentValue,
                    title: action.payload.name,
                    value: state.UAHCurrentValue.value / action.payload.numValue
                },
                warnings:{...state.warnings,                                        //убираем ошибки
                    notSelected:{...state.warnings.notSelected, value:false},
                    errorValue:{...state.warnings.errorValue,value:false}
                }
            }
        case 'UPDATE-UAH-VALUE':

            if (state.AnotherCurrentValue.title === 'choose currency'){
                // alert('choose')
                return {...state, warnings:{...state.warnings, notSelected:{...state.warnings.notSelected, value:true}}}
            }
            if (action.payload.inputValue < 0) {
                // alert('Value < 0')
                return {...state,warnings:{...state.warnings, errorValue:{...state.warnings.errorValue,value:true}}}
            }
            return {
                ...state,
                UAHCurrentValue: {
                    ...state.UAHCurrentValue, value: action.payload.inputValue
                },
                AnotherCurrentValue: {
                    ...state.AnotherCurrentValue,
                    value: action.payload.inputValue / state.CurrentPrice
                },
                warnings:{...state.warnings,                                        //убираем ошибки
                    notSelected:{...state.warnings.notSelected, value:false},
                    errorValue:{...state.warnings.errorValue,value:false}
                }
            }
        default:return state
    }


}