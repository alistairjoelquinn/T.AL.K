import { AsyncStorage } from 'react-native';

import { webAPI, loginURL } from '../../secrets.json';

export const AUTHENTICATE = "AUTHENTICATE";
export const LOGOUT = "LOGOUT";

export const authenticate = (userId, token) => {
    return dispatch => {
        dispatch({
            type: AUTHENTICATE,
            userId: userId,
            token: token
        });
    }
};

export const login = (email, password) => {
    return async dispatch => {
        const response = await fetch(`${loginURL}=${webAPI}`
            , {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken: true
                })
            }
        );
        if (!response.ok) {
            const errorResData = await response.json();
            const errorId = errorResData.error.message;
            let message = 'Something went wrong!';
            if (errorId === 'EMAIL_NOT_FOUND') message = 'Email address could not be found!';
            if (errorId === 'INVALID_PASSWORD') message = 'Incorrect password!';
            if (errorId === 'USER_DISABLED') message = 'This account is no longer active.';
            throw new Error(message);
        }

        const resData = await response.json();
        dispatch(authenticate(resData.localId, resData.idToken));
        const expirationDate = new Date(new Date().getTime() + parseInt(resData.expiresIn) * 1000);
        saveDataToStorage(resData.idToken, resData.localId, expirationDate);
    };
};

export const logout = () => {
    AsyncStorage.removeItem('userData');
    return { type: LOGOUT };
};

const saveDataToStorage = (token, userId, expirationDate) => {
    AsyncStorage.setItem('userData', JSON.stringify({
        token: token,
        userId: userId,
        expiryDate: expirationDate.toISOString()
    }));
};