import createDataContext from "./createDataContext";

const productsReducer = (state, action) => {
    switch (action.type) {
        case 'loadProducts':
            return {...state, products: [...state.products, ...action.payload]}
        case 'loadProduct':
            return {...state, product: action.payload}
        case 'sortAscending':
            return {...state, products: state.products.sort((a, b) => a.price - b.price)}
        case 'sortDescending':
            return {...state, products: state.products.sort((a, b) => b.price - a.price)}
        default:
            return state;
    }
}

const loadProducts = dispatch => {
    return async (offset) => {
        try {
            const response = await fetch(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=15`);
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

const sortByPrice = dispatch => {
    return (option) => {
        dispatch({type: option})
    }
}

export const {Provider, Context} = createDataContext(
    productsReducer,
    {loadProducts, loadProduct, sortByPrice},
    {
        products: [],
        product: {}
    }
)