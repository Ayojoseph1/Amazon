export const initialState = {
    basket: [],
    user: null
}

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            // logic for adding to the basket
            return {
                ...state,
                basket: [...state.basket, action.item]

            }
            break;

        case 'REMOVE_FROM_BASKET':
            // logic for Removing to the basket

            let newBasket = [...state.basket]
            const index = state.basket.findIndex(basketItem => basketItem.id === action.id)

            if (index >= 0) {
                newBasket.splice(index, 1)
            } else {
                console.warn(`can't remove product (id: ${action.id}) as it's not in stock`)
            }
            return {
                ...state,
                basket: newBasket
            }
        default:
            return state;
    }
}
export default reducer;