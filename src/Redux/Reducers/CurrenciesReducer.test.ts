import {CurrenciesReducer} from "./CurrenciesReducer";

test('change UAHCurrentValue',()=> {

    const startState = {
        UAHCurrentValue: {
            value: 0,
            title: 'UAH',
            fullName: ''
        },
        AnotherCurrentValue: {
            value: 0,
            title: 'USD',
            fullName: ''
        },
        CurrentPrice: 0,
        warnings:{
            errorValue: {
                value:false,
                textWarning: 'value must be greater than 0'
            },
            notSelected: {
                value:false,
                textWarning: 'choose currency'
            }
        },
        favorites: []
    }

    const endState = CurrenciesReducer(startState, {type: 'UPDATE-UAH-VALUE', payload:{inputValue:10}})

    expect(endState.UAHCurrentValue.value).toBe(10)
    expect(endState.CurrentPrice).toBe(0)

})

test('show correct value',()=> {

    const startState = {
        UAHCurrentValue: {
            value: 999,
            title: 'UAH',
            fullName: ''
        },
        AnotherCurrentValue: {
            value: 0,
            title: 'USD',
            fullName: ''
        },
        CurrentPrice: 0,
        warnings:{
            errorValue: {
                value:false,
                textWarning: 'value must be greater than 0'
            },
            notSelected: {
                value:false,
                textWarning: 'choose currency'
            }
        },
        favorites: []

    }

    const endState = CurrenciesReducer(startState, {
        type: 'CHANGE-ANOTHER-VALUE',
        payload: {
            numValue: 999,
            name: 'EURO',
        }})

    expect(endState.CurrentPrice).toBe(999)
    expect(endState.AnotherCurrentValue.title).toBe('EURO')
    expect(endState.AnotherCurrentValue.value).toBe(1)

})

test('add to favorites',()=> {

    const startState = {
        UAHCurrentValue: {
            value: 999,
            title: 'UAH',
            fullName: ''
        },
        AnotherCurrentValue: {
            value: 0,
            title: 'EURO',
            fullName: ''
        },
        CurrentPrice: 0,
        warnings:{
            errorValue: {
                value:false,
                textWarning: 'value must be greater than 0'
            },
            notSelected: {
                value:false,
                textWarning: 'choose currency'
            }
        },
        favorites: ['USD']

    }

    const endState = CurrenciesReducer(startState, {
        type: 'ADD-TO-FAVORITES'
       })

    expect(endState.favorites[1]).toBe('EURO')
    expect(endState.favorites).toStrictEqual(['USD','EURO']) //toStrictEqual проверяем на глубокое равенство, сравниваем строки внутри элементов


})




