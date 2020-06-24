export const ADD_TO_DO = 'ADD_TO_DO';
export const REMOVE_TO_DO = 'REMOVE_TO_DO';

export const addToDoItem = item => {
    return dispatch => {
        dispatch({
            type: ADD_TO_DO,
            item
        });
    };
};

export const removeToDoItem = item => {
    return dispatch => {
        dispatch({
            type: REMOVE_TO_DO,
            item
        });
    };
};
