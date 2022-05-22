import createDataContext from "./createDataContext";

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'addToCart':
            return {...state, cart: [...state.cart, action.payload]}
        default:
            return state;
    }
}

const addToCart = dispatch => {
    return (product) => {
            dispatch({type: 'addToCart', payload: {...product, quantity: 1}})
    }
}


export const {Provider, Context} = createDataContext(
    cartReducer,
    {addToCart},
    {
        cart: [],
    }
)