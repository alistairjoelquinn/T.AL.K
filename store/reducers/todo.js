import { ADD_TO_DO, REMOVE_TO_DO, SET_LIST } from "../actions/todo";

const initialState = {
    toDoList: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_LIST:
            return {
                toDoList: action.list
            };
        case ADD_TO_DO:
            return { 
                ...state, 
                toDoList: [ 
                    {
                        item: action.item,
                        key: action.key
                    },
                    ...state.toDoList
                ]
            };
        case REMOVE_TO_DO:
            let shorter = state.toDoList;
            let newList = shorter.filter(listItem => {
                return listItem.key !== action.item;
            });
            return {
                ...state,
                toDoList: newList
            };
    }
    return state;
};