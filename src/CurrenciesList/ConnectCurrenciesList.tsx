import React from "react";
import {connect} from 'react-redux';
import {ActionType, CurrenciesItemType, StoreType} from "../Types";
import {CurrenciesListC} from "./CurrenciesList";


const changeAnotherValueAC = (name: string, numValue: number, fullName: string) => {
    return {
        type: 'CHANGE-ANOTHER-VALUE',
        payload: {
            numValue,
            name,
            fullName
        }
    }
}
const setCurrenciesAC = (receivedCurr:CurrenciesItemType[]) => {
    return {
        type: 'SET-CURRENCIES',
        payload: {
            receivedCurr
        }
    }
}

const mapStateToProps = (state: StoreType) => {
    return {
        arr: state.CurrenciesList,
        favorites: state.inputsState.favorites,
        title: state.inputsState.AnotherCurrentValue.fullName
    }
}
const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        onCLickHandler: (name: string, numValue: number, fullName: string) => {
            dispatch(changeAnotherValueAC(name, numValue, fullName))
        },
        setCurrencies: (receivedCurr:any) => {
            dispatch(setCurrenciesAC(receivedCurr))
        }
    }
}


export const ConnectCurrenciesList = connect(mapStateToProps, mapDispatchToProps)(CurrenciesListC)