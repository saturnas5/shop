import createDataContext from "./createDataContext";

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'addToCart':
            const existingProduct = state.cart.find(prod => prod.id === action.payload.id)
            if(existingProduct) {
                return {...state, cart: state.cart.map(item => {
                    if(item.id === existingProduct.id) {
                        return {...item, quantity: Number.parseInt(item.quantity) + Number.parseInt(action.payload.quantity)}
                    }
                    return item;
                    })}
            } else {
                return {...state, cart: [...state.cart, {...action.payload, quantity: Number.parseInt(action.payload.quantity)}]}
            }
        case 'deleteProduct':
            return {...state, cart: state.cart.filter(item => item.id !== action.payload.id)}
        default:
            return state;
    }
}

const addToCart = dispatch => {
    return (product, quantity) => {
            dispatch({type: 'addToCart', payload: {...product, quantity: quantity}})
    }
}

const deleteProduct = dispatch => {
    return (product) => {
        dispatch({type: 'deleteProduct', payload: product})
    }
}

const increaseQuantity = dispatch => {
    return () => {

    }
}

const decreaseQuantity = dispatch => {
    return () => {

    }
}


export const {Provider, Context} = createDataContext(
    cartReducer,
    {addToCart, deleteProduct},
    {
        cart: [],
    }
)