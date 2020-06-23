export const ADD_TO_DO = 'ADD_TO_DO';

export const addToDoItem = item => {
    return dispatch => {
        dispatch({
            type: ADD_TO_DO,
            item
        });
    };
};