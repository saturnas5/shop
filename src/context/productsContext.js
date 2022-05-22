import createDataContext from "./createDataContext";

const productsReducer = (state, action) => {
    switch (action.type) {
        case 'loadProducts':
            return {...state, products: action.payload}
        case 'loadProduct':
            return {...state, product: action.payload}
        default:
            return state;
    }
}

const loadProducts = dispatch => {
    return async () => {
        try {
            const response = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=15');
            const data = await response.json();
            dispatch({type: 'loadProducts', payload: data})
        } catch (err) {
            console.log(err);
        }
    }
}

const loadProduct = dispatch => {
    return async (id) => {
        try {
            const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
            const data = await response.json();
            dispatch({type: 'loadProduct', payload: data})
        } catch (err) {
            console.log(err);
        }
    }
}

export const {Provider, Context} = createDataContext(
    productsReducer,
    {loadProducts, loadProduct},
    {
        products: [],
        product: {}
    }
)