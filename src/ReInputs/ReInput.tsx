import React, {ChangeEvent} from "react";
import {ReInputPropsType} from "../Types";


export const ReInput = (props: ReInputPropsType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeHandler(e.currentTarget.valueAsNumber)
    }

    return (
        <div>
            <div>{props.title}</div>
            <input type={'number'} value={props.inputValue} onChange={onChangeHandler}></input>
            {props.warningState && <div>{props.warningText}</div> }
        </div>
    )
}
