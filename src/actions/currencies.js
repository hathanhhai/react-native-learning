export const SWAP_CURRENCY = 'SWAP_CURRENCY';
export const CHANGE_AMOUNT = 'CHANGE_AMOUNT';
export const swapCurrency  = () => ({
    type:SWAP_CURRENCY,
});

export const changeCurrencyAmount = amount =>({
    type:CHANGE_AMOUNT,
    amount
})