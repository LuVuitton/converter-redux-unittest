import {ActionType, InitialStateType} from "../../Types";


// https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json


const initialState: InitialStateType = {
    UAHCurrentValue: {
        value: 0,
        title: 'UAH',
        fullName:''
    },
    AnotherCurrentValue: {
        value: 0,
        title: 'choose currency',
        fullName: ''
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
    },
    favorites:['initialValue'] //как типизировать без обязательного элемента со строкой в инициализационном стейте
}

export type CurrenciesReducerType = (state:InitialStateType, action: ActionType)=>InitialStateType


export const CurrenciesReducer:CurrenciesReducerType = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD-TO-FAVORITES':
            return {
                ...state, favorites:[...state.favorites, state.AnotherCurrentValue.title]
            }
        case 'CHANGE-ANOTHER-VALUE':
            return {
                ...state,
                CurrentPrice: action.payload.numValue,
                AnotherCurrentValue: {
                    ...state.AnotherCurrentValue,
                    title: action.payload.name,
                    value: state.UAHCurrentValue.value / action.payload.numValue,
                    fullName: action.payload.fullName
                },
                warnings:{...state.warnings,                                        //убираем ошибки
                    notSelected:{...state.warnings.notSelected, value:false},
                    errorValue:{...state.warnings.errorValue,value:false}
                }
            }
        case 'UPDATE-UAH-VALUE':

            if (state.AnotherCurrentValue.title === 'choose currency'){
                return {...state, warnings:{...state.warnings, notSelected:{...state.warnings.notSelected, value:true}}}
            }
            if (action.payload.inputValue < 0) {
                return {...state,warnings:{...state.warnings, errorValue:{...state.warnings.errorValue, value:true}}}
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
        default: return state //при default: throw new Error('invalid state') сразу падает ошибка

    }


}