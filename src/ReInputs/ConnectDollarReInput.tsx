import React from "react";
import {ReInput} from "./ReInput";
import {connect} from 'react-redux';
import {StoreType} from "../Types";
import {ActionType} from "../Redux/Reducers/CurrenciesReducer";



// export const ContainerDollarReInput = ()=> {
//     return(
//         <ReInput inputValue={'props.inputValue'} onChangeHandler={()=>{
//             console.log('hello')}}/>
//     )
// }

const f1=(state:StoreType)=>{
    return{
        inputValue: state.mainState.DollarCurrentValue
    }
}
const f2=(dispatch:(action:ActionType)=>void)=>{
    return{
        onChangeHandler: ()=>{
            dispatch({type:'how are you'})
        }
    }
}

export const ConnectDollarReInput = connect(f1,f2)(ReInput)