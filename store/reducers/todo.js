import { ADD_TO_DO, REMOVE_TO_DO } from "../actions/todo";
import { $CombinedState } from "redux";

const initialState = {
    toDoList: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_DO:
            return { 
                ...state, 
                toDoList: [ 
                    action.item,
                    ...state.toDoList
                ]
            };
        case REMOVE_TO_DO:
            let shorter = state.toDoList;
            console.log('shorter: ', shorter);
            let newList = shorter.filter((current, index) => {
                console.log('current, action: ', current, action);
                return index !== action.item;
            });
            
            return {
                ...state,
                toDoList: newList
            };
    }
    return state;
};