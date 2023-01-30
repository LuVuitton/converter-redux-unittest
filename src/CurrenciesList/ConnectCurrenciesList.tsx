import React from "react";
import {connect} from 'react-redux';
import {ActionType, StoreType} from "../Types";
import {CurrenciesList} from "./CurrenciesList";


const changeAnotherValueAC = (name:string, numValue:number)=> {
    return {
        type: 'CHANGE-ANOTHER-VALUE',
        payload:{
            numValue,
            name,

        }
    }
}

const mapStateToProps = (state: StoreType) => {
    return {
        arr: state.CurrenciesList
    }
}
const mapDispatchToProps = (dispatch:(action:ActionType)=>void) => {
    return {
        onCLickHandler: (name:string, numValue:number)=> {
            dispatch(changeAnotherValueAC(name, numValue))
        }
    }
}



export const ConnectCurrenciesList = connect(mapStateToProps, mapDispatchToProps)(CurrenciesList)