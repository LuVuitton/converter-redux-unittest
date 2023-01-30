import React from "react";
import {CurrenciesListPropsType} from "../Types";
import sList from './CurrenciesList.module.css'


export const CurrenciesList = (props: CurrenciesListPropsType) => {


    return <div className={sList.wrapper} >

        {props.arr.map((e, i) => {           //вынести жск в отдельный компонент, что бы проще читать

            return (
                <>
                    <div
                        onClick={()=>props.onCLickHandler(e.txt, e.rate)}
                        className={sList.name}>{e.txt}
                    </div>
                    <div>{e.rate}</div>
                </>
            )

        })}
    </div>

}


