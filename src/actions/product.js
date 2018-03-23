import aja from 'aja';

export const REQUEST_START = 'REQUEST_START';
export const REQUEST_SUCCESS = 'REQUESR_SUCCESS';
export const REQUEST_FAILURE = 'REQUEST_FAILURE';
export const ADD_TO_CART = 'ADD_TO_CART';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';

const startRequestProducts = (cb) =>({
  type:REQUEST_START
});
const receiveProducts = products => ({
    type: RECEIVE_PRODUCTS,
    products: products
})
//异步action
export const getAllProducts = () => (dispatch) =>{
    dispatch(startRequestProducts());
    aja()
        .url('../product.json')
        .on('success', function(data){
            dispatch(receiveProducts(data))
        })
        .go();
};