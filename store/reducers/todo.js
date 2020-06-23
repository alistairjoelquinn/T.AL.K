import { ADD_TO_DO } from "../actions/todo";

const initialState = {
    toDoList: [

    ]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_DO:
            return { 
                ...state, 
                toDoList: [ 
                    ...state.toDoList,
                    action.item
                ]
            };
    }
    return state;
};