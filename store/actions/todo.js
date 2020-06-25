import { dbLinkToDo } from '../../secrets.json';

export const ADD_TO_DO = 'ADD_TO_DO';
export const REMOVE_TO_DO = 'REMOVE_TO_DO';
export const SET_LIST = 'SET_LIST';

export const fetchListItems = () => {
    return async dispatch => {
        try {
            const response = await fetch(dbLinkToDo);
            
            if(!response.ok) throw new Error('Something went wrong!!');
            const resData = await response.json();
            const dataList = [  ]
            for (const key in resData) {
                let newItem = {
                    item: resData[key].item,
                    key: key
                };
                dataList.push(newItem);
            }
            console.log('dataList: ', dataList);
            dispatch({
                type: SET_LIST,
                list: dataList
            });
        } catch(err) {
            console.log('err fetching list items from db: ', err);
            throw err
        }
    };
};

export const addToDoItem = item => {
    return async dispatch => {
        const response = await fetch(dbLinkToDo, {
            method: 'POST',
            header: {
                'Content-Type': 'application.json'
            },
            body: JSON.stringify({
                item
            })
        });
        const resData = await response.json();
        console.log('resData upon add: ', resData);

        dispatch({
            type: ADD_TO_DO,
            item: item,
            key: resData.name
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