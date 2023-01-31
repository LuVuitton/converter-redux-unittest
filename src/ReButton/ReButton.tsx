import React from "react";

export type ReButtonPropsType = {
    onClickHandler: ()=>void
    title:string
}


export const ReButton = (props:ReButtonPropsType) => {
    return <button onClick={props.onClickHandler}> {props.title} </button>
}






