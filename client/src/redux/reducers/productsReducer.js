const initialState = {
    productsTypes: [
        {
            name: 'Карты', products: [
                {
                    id: 1,
                    name: 'Visa Classic',
                    number: '6346',
                    balance: 1458.85
                },
                {
                    id: 2,
                    name: 'Mastercard',
                    number: '1654',
                    balance: 145558.85
                },
                {
                    id: 3,
                    name: 'Visa platinum',
                    number: '9855',
                    balance: 100
                },
            ]
        },
        {
            name: 'Вклады и счета', products: [
                {
                    id: 1,
                    number: '111111',
                    balance: 100000,
                    openDate: '2018-06-01',
                    rate: 0.056
                },
                {
                    id: 2,
                    number: '111112',
                    balance: 254322,
                    openDate: '2018-06-01',
                    rate: 0.056

                },
            ]
        },
        {
            name: 'Кредиты',
            products: null
        },
        {
            name: 'Оплатить счёт',
            products: null
        }
    ]
}

export const productsReducer = (state, action) => {
    return initialState
}