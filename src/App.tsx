import React from 'react';
import sApp from './App.module.css';
import {ConnectUAHReInput} from "./ReInputs/ConnectUAHReInput";
import {ConnectAnotherReInput} from "./ReInputs/ConnectAnotherReInput";
import {ConnectCurrenciesList} from "./CurrenciesList/ConnectCurrenciesList";
import {ConnectReButton} from "./ReButton/ConnectReButton";

function App() {
    return (
        <div className={sApp.wrapper}>

            <ConnectCurrenciesList/>


            <div className={sApp.inpWrapper}>
                <ConnectUAHReInput/>

                <ConnectAnotherReInput/>
            </div>
            <div className={sApp.btnWrapper}>
                    <ConnectReButton/>
                </div>


        </div>
    );
}

export default App;

