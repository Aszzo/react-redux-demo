import { combineReducers } from 'redux';
import todolist from './todos';
import {getAllProduct} from './product';
const todos = (state=0,action)=>{
    switch (action.type){
        case 'IN_CREASE':
            return state + 1;
        case 'DE_CREASE':
            return state - 1;
        default:
            return state;
    }
};
const todoApp = combineReducers({
    todos,
    todolist,
    getAllProduct
})
export default todoApp;