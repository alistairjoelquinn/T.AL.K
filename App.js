import React, { useState } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import calendarReducer from './store/reducers/calendar';
import TalkNavigator from './navigation/TalkNavigator';

const rootReducer = combineReducers({
    calendar: calendarReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const fetchFonts = () => {
    return Font.loadAsync({
        'light': require('./assets/fonts/SFNSTextCondensed-Light.otf'),
        'medium': require('./assets/fonts/SFNSTextCondensed-Medium.otf'),
        'regular': require('./assets/fonts/SFNSTextCondensed-Regular.otf'),
    });
};

export default function App() {
    const [ fontLoaded, setFontLoaded ] = useState(false);

    if(!fontLoaded) {
        return (
            <AppLoading 
                startAsync={fetchFonts}
                onFinish={() => {
                    setFontLoaded(true);
                }}
            />
        );
    }

    return (
        <Provider store={store}>
            <TalkNavigator />
        </Provider>
    );
};
