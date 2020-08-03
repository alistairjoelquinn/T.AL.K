import React, { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet, AsyncStorage } from 'react-native';
import { useDispatch } from 'react-redux';

import Colors from '../constants/Colors';
import { authenticate, autoLogin } from '../store/actions/auth';

const StartUpScreen = props => {
    const dispatch = useDispatch();

    useEffect(() => {
        const tryLogin = async () => {
            let userData;
            try {
                userData = await AsyncStorage.getItem('userData');
            } catch (err) {
                console.log('error getting user data: ', err);
            }
            if (!userData) {
                console.log('no USER DATA');
                props.navigation.navigate('Login');
                return;
            }
            const transformedData = JSON.parse(userData);
            const { token, userId, expiryDate, refreshToken } = transformedData;
            const expirationDate = new Date(expiryDate);
            if (expirationDate <= new Date() || !token || !userId) {
                props.navigation.navigate('Login');
                dispatch(autoLogin(userId, token, refreshToken));
            }
            const expirationTime = expirationDate.getTime() - new Date().getTime();
            props.navigation.navigate('Main');
            dispatch(authenticate(userId, token, expirationTime, refreshToken));
        }
        tryLogin();
    }, [dispatch])

    return (
        <View style={styles.screen}>
            <ActivityIndicator size='large' color={Colors.grey} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default StartUpScreen;