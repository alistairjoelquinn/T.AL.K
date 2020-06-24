export const ADD_TO_DO = 'ADD_TO_DO';
export const REMOVE_TO_DO = 'REMOVE_TO_DO';

export const addToDoItem = item => {
    return async dispatch => {
        const response = await fetch('https://talk-app-e6de0.firebaseio.com/todo.json', {
            method: 'POST',
            header: {
                'Content-Type': 'application.json'
            },
            body: JSON.stringify({
                item
            })
        });
    const resData = await response.json();
    console.log('resData: ', resData);
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
