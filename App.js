import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import calendarReducer from './store/reducers/calendar';
import TalkNavigator from './navigation/TalkNavigator';

const rootReducer = combineReducers({
    calender: calendarReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
    return (
        <Provider store={store}>
            <TalkNavigator />
        </Provider>
    );
}
