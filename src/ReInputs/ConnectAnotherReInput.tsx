import React from "react";
import {ReInput} from "./ReInput";
import {connect} from 'react-redux';
import {StoreType} from "../Types";
import {ActionType} from "../Redux/Reducers/CurrenciesReducer";


const mapStateToProps=(state:StoreType)=>{
    return{
        inputValue: state.mainState.DollarCurrentValue
    }
}
const mapDispatchToProps=(dispatch:(action:ActionType)=>void)=>{
    return{
        onChangeHandler: ()=>{
            dispatch({type:'dollar'})
        }
    }
}

export const ConnectDollarReInput = connect(mapStateToProps,mapDispatchToProps)(ReInput)
