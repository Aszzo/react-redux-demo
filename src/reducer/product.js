import {REQUEST_START,RECEIVE_PRODUCTS} from '../actions/product';
export const getAllProduct = (state = {},action) => {
    switch (action.type) {
        case REQUEST_START:
            return{...state,loading:true,products:[]}
        case RECEIVE_PRODUCTS:
            return{...state,loading:false,products:action.products}
        default:
            return state
    }
}