import React from "react";
import {ReInput} from "./ReInput";
import {connect} from 'react-redux';
import {ActionType, StoreType} from "../Types";




const mapStateToProps=(state:StoreType)=>{
    return{
        inputValue: state.inputsState.AnotherCurrentValue.value,
        title:state.inputsState.AnotherCurrentValue.title
    }
}
const mapDispatchToProps=(dispatch:(action:ActionType)=>void)=>{
    return{
        onChangeHandler: (inputValue:number)=>{
            dispatch({type:'altro dengi', payload: inputValue})
        }
    }
}

export const ConnectAnotherReInput = connect(mapStateToProps,mapDispatchToProps)(ReInput)
