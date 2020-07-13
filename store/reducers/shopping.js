import { ADD_SHOPPING_ITEM, REMOVE_SHOPPING_ITEM, SET_SHOPPING_LIST } from "../actions/shopping";

const initialState = {
    shoppingList: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_SHOPPING_LIST:
            return {
                shoppingList: action.list
            };
        case ADD_SHOPPING_ITEM:
            return { 
                ...state, 
                shoppingList: [ 
                    {
                        item: action.item,
                        key: action.key
                    },
                    ...state.shoppingList
                ]
            };
        case REMOVE_SHOPPING_ITEM:
            let shorter = state.shoppingList;
            let newList = shorter.filter(listItem => {
                return listItem.key !== action.item;
            });
            return {
                ...state,
                shoppingList: newList
            };
    }
    return state;
};