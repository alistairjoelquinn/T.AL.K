import { ADD_TO_DO, REMOVE_TO_DO } from "../actions/todo";

const initialState = {
    toDoList: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_DO:
            return { 
                ...state, 
                toDoList: [ 
                    {
                        item: action.item,
                        key: new Date().toISOString()
                    },
                    ...state.toDoList
                ]
            };
        case REMOVE_TO_DO:
            let shorter = state.toDoList;
            let newList = shorter.filter((current, index) => {
                return index !== action.item;
            });
            return {
                ...state,
                toDoList: newList
            };
    }
    return state;
};