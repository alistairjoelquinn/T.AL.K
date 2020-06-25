import { dbLink } from '../../secrets.json';

export const ADD_TO_DO = 'ADD_TO_DO';
export const REMOVE_TO_DO = 'REMOVE_TO_DO';
export const SET_LIST = 'SET_LIST';

export const fetchListItems = () => {
    return async dispatch => {
        try {
            const response = await fetch(dbLink);
            
            if(!response.ok) throw new Error('Something went wrong!!');
            const resData = await response.json();

            dispatch({
                type: SET_LIST,
                list: resData
            });
        } catch(err) {
            console.log('err fetching list items from db: ', err);
            throw err
        }
    };
};

export const addToDoItem = item => {
    return async dispatch => {
        const response = await fetch(dbLink, {
            method: 'POST',
            header: {
                'Content-Type': 'application.json'
            },
            body: JSON.stringify({
                item
            })
        });
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
