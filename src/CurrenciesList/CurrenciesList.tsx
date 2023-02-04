import React from "react";
import {CurrenciesListPropsType} from "../Types";
import sList from './CurrenciesList.module.css'
import axios from "axios";


export const CurrenciesList = (props: CurrenciesListPropsType) => {

    if (props.arr.length === 0) {
        axios.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
            .then(data => {
                props.setCurrencies(data.data)
            })
    }

    return <>
        <h3>{props.title ? props.title : 'CONVERTER'}</h3>

        <div className={sList.wrapper}>
            {props.arr.map((e, i) => {           //вынести жск в отдельный компонент, что бы проще читать

                return (
                    <>
                        <div
                            onClick={() => props.onCLickHandler(e.cc, e.rate, e.txt)}
                            className={sList.name + ' ' + sList.firstC}>{e.cc}
                        </div>
                        <div className={(props.favorites.find(x => x === e.cc) ? sList.fav : '')}>{e.rate}</div>
                        {/*если find вернет не пустой массив то по условию это будет ТРУ*/}
                    </>
                )

            })}
        </div>
    </>
}


