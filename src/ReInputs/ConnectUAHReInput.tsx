import React from "react";
import {ReInput} from "./ReInput";
import {connect} from 'react-redux';
import {ActionType, StoreType} from "../Types";




const updateUAHValueAC = (inputValue:number)=> {
    return {
        type: 'UPDATE-UAH-VALUE',
        payload:{
            inputValue
        }
    }
}



const mapStateToProps=(state:StoreType)=>{
    return{
        inputValue: state.inputsState.UAHCurrentValue.value,
        title: state.inputsState.UAHCurrentValue.title,
        warningState: state.inputsState.warnings.errorValue.value,
        warningText: state.inputsState.warnings.errorValue.textWarning
    }
}
const mapDispatchToProps=(dispatch:(action:ActionType)=>void)=>{
    return{
        onChangeHandler: (inputValue:number)=>{
            dispatch(updateUAHValueAC(inputValue))
        }
    }
}

export const ConnectUAHReInput = connect(mapStateToProps,mapDispatchToProps)(ReInput)
