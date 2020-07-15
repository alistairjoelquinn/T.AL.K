import { ADD_CALENDAR_ITEM, REMOVE_CALENDAR_ITEM, SET_CALENDAR } from "../actions/calendar";

const initialState = {
    calendarData: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CALENDAR:
            return {
                calendarData: action.list
            };
        case ADD_CALENDAR_ITEM:
            return { 
                ...state, 
                calendarData: [ 
                    {
                        item: action.item,
                        key: action.key
                    },
                    ...state.calendarData
                ]
            };
        case REMOVE_CALENDAR_ITEM:
            let shorter = state.calendarData;
            let newList = shorter.filter(listItem => {
                return listItem.key !== action.item;
            });
            return {
                ...state,
                calendarData: newList
            };
    }
    return state;
};