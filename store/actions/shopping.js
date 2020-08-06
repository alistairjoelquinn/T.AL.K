import { dbLinkShopping, dbLinkShoppingRemove } from '../../secrets.json';

export const ADD_SHOPPING_ITEM = 'ADD_SHOPPING_ITEM';
export const REMOVE_SHOPPING_ITEM = 'REMOVE_SHOPPING_ITEM';
export const SET_SHOPPING_LIST = 'SET_SHOPPING_LIST';

export const fetchShoppingListItems = () => {
    return async (dispatch, getState) => {
        const token = getState().auth.token;
        try {
            const response = await fetch(`${dbLinkShopping}?auth=${token}`);
            if (!response.ok) throw new Error('Something went wrong!!');
            const resData = await response.json();
            const dataList = []
            for (const key in resData) {
                let newItem = {
                    item: resData[key].item,
                    key: key
                };
                dataList.unshift(newItem);
            }
            dispatch({
                type: SET_SHOPPING_LIST,
                list: dataList
            });
        } catch (err) {
            console.log('err fetching shopping list items from db: ', err);
            throw err
        }
    };
};

export const addShoppingItem = item => {
    return async (dispatch, getState) => {
        const token = getState().auth.token;
        try {
            const response = await fetch(`${dbLinkShopping}?auth=${token}`, {
                method: 'POST',
                header: {
                    'Content-Type': 'application.json'
                },
                body: JSON.stringify({
                    item
                })
            });
            const resData = await response.json();
            dispatch({
                type: ADD_SHOPPING_ITEM,
                item: item,
                key: resData.name
            });
        } catch (err) {
            console.log('err adding item to shopping list in db: ', err);
            throw err
        }
    };
};

export const removeShoppingItem = item => {
    return async (dispatch, getState) => {
        const token = getState().auth.token;
        const response = await fetch(`${dbLinkShoppingRemove}${item}.json?auth=${token}`, {
            method: 'DELETE'
        });
        if (!response.ok) throw new Error('Something went wrong');
        dispatch({
            type: REMOVE_SHOPPING_ITEM,
            item
        });
    };
};
