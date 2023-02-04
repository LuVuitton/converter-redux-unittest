import {ActionType, StoreType} from "../Types";
import {connect} from "react-redux";
import {ReButton} from "./ReButton";



const addToFavoriteAC =()=> {
    return {
        type: 'ADD-TO-FAVORITES'
    }
}


const mapStateToProps= (state:StoreType) => {
    const nameForButton = state.inputsState.AnotherCurrentValue.title !== 'choose currency'?
        state.inputsState.AnotherCurrentValue.title :
        ''                                              //если валюта выбрана, добавим ее имя в кнопку если нет, не будем)
    return{
        title: `ADD ${nameForButton} to favorites`
    }

}
const mapDispatchToProps= (dispatch:(action:ActionType)=>void) => {
    return{
        onClickHandler: ()=> {
            dispatch(addToFavoriteAC())
        }
    }
}

export const ConnectReButton = connect(mapStateToProps,mapDispatchToProps)(ReButton)