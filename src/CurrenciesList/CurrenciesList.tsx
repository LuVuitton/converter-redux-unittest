import React from "react";
import {connect} from 'react-redux';
import {StoreType} from "./Types";
import {CurrenciesItemType} from "./Redux/TestCurrenciesState";

export type CurrenciesListPropsType = {
  arr:CurrenciesItemType[]
}

export const CurrenciesList = (props:CurrenciesListPropsType) => {
  {props.arr.map(e=> <div>{e.cc} {e.}</div>)}
  )
}


const mapStateToProps = (state:StoreType) => {
  return {
    arr: state.CurrenciesList
  }
}
const mapDispatchToProps = (dispatch:()=>void) => {
  return {
  }
}

const connectCurrenciesList = connect(mapStateToProps,mapDispatchToProps )(CurrenciesList)