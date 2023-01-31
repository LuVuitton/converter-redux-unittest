import React from "react";
import {ReInput} from "./ReInput";
import {connect} from 'react-redux';
import {ActionType, StoreType} from "../Types";




const mapStateToProps=(state:StoreType)=>{
    return{
        inputValue: state.inputsState.AnotherCurrentValue.value,
        title:state.inputsState.AnotherCurrentValue.title,
        warningState: state.inputsState.warnings.notSelected.value,
        warningText: state.inputsState.warnings.notSelected.textWarning
    }
}
const mapDispatchToProps=(dispatch:(action:ActionType)=>void)=>{
    return{
        onChangeHandler: (inputValue:number)=>{
            console.log('второй инпут должен менять первый')
        }
    }
}

export const ConnectAnotherReInput = connect(mapStateToProps,mapDispatchToProps)(ReInput)
