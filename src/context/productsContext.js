import createDataContext from "./createDataContext";

const productsReducer = (state, action) => {
    switch (action.type) {
        case 'loadProducts':
            return {...state, products: action.payload}
        default:
            return state;
    }
}

const loadProducts = dispatch => {
    return async () => {
        try {
            const response = await fetch('https://api.escuelajs.co/api/v1/products');
            const data = await response.json();
            dispatch({type: 'loadProducts', payload: data})
        } catch (err) {
            console.log(err);
        }
    }
}

export const {Provider, Context} = createDataContext(
    productsReducer,
    {loadProducts},
    {
        products: []
    }
)