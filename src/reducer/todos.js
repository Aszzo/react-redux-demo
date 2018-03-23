import {ADD_TODOLIST} from "../actions/todos"
const todolist = (state = [],action) => {
    switch (action.type){
        case ADD_TODOLIST:
            return [
                ...state,
                {
                    value:action.value,
                    status:action.status
                }
            ];
        default:
            return state;
    }
};
export default todolist;