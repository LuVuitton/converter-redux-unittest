
export type ReInputPropsType = {
    inputValue: number
    onChangeHandler: (inputValue: number) => void
    title: string
    warningState: boolean
    warningText: string

}
export type CurrenciesType = {
    value: number,
    title: string
}
export type InitialStateType = {
    UAHCurrentValue: CurrenciesType
    AnotherCurrentValue: CurrenciesType
    CurrentPrice: number
    warnings:{
        errorValue: {
            value:boolean
            textWarning: string
        }
        notSelected: {
            value:boolean
            textWarning: string
        }
    }

}

export  type StoreType = {
    inputsState: InitialStateType,
    CurrenciesList: CurrenciesItemType[]

}

export type ActionType = {
    type: string
    payload?: any
}

export type CurrenciesListPropsType = {
    arr: CurrenciesItemType[]
    onCLickHandler: (name:string, numValue:number)=>void
}
export type CurrenciesItemType = {
    "r030": number
    "txt": string
    "rate": number
    "cc": string
    "exchangedate": string
}