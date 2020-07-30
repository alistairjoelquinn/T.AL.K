import { dbLinkCalendar, dbLinkCalendarRemove } from '../../secrets.json';

export const ADD_CALENDAR_ITEM = 'ADD_CALENDAR_ITEM';
export const REMOVE_CALENDAR_ITEM = 'REMOVE_CALENDAR_ITEM';
export const SET_CALENDAR = 'SET_CALENDAR';
export const ADD_ACTIVITIES = 'ADD_ACTIVITIES';

export const addActivitiesToday = activities => {
    return {
        type: ADD_ACTIVITIES,
        data: activities
    };
};

export const fetchCalendarItems = () => {
    return async (dispatch, getState) => {
        const token = getState().auth.token;
        try {
            const response = await fetch(`${dbLinkCalendar}?auth=${token}`);
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
                type: SET_CALENDAR,
                list: dataList
            });
        } catch (err) {
            console.log('err fetching calendar items from db: ', err);
            throw err
        }
    };
};

export const addCalendarItem = item => {
    return async (dispatch, getState) => {
        const token = getState().auth.token;
        try {
            const response = await fetch(`${dbLinkCalendar}?auth=${token}`, {
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
                type: ADD_CALENDAR_ITEM,
                item: item,
                key: resData.name
            });
        } catch (err) {
            console.log('err adding item to calendar in db: ', err);
            throw err
        }
    };
};

export const removeCalendarItem = item => {
    return async (dispatch, getState) => {
        const token = getState().auth.token;
        const response = await fetch(`${dbLinkCalendarRemove}${item.key}.json?auth=${token}`, {
            method: 'DELETE'
        });
        if (!response.ok) throw new Error('Something went wrong');
        dispatch({
            type: REMOVE_CALENDAR_ITEM,
            item
        });
    };
};
