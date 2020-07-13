import React, { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet, AsyncStorage } from 'react-native';
import { useDispatch } from 'react-redux';

import Colors from '../constants/Colors';
import { authenticate } from '../store/actions/auth';

const StartUpScreen = props => {
    const dispatch = useDispatch();

    useEffect(() => {
        const tryLogin = async () => {
            console.log('trying to log');
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
            const { token, userId, expiryDate } = transformedData;
            const expirationDate = new Date(expiryDate);
            if (expirationDate <= new Date() || !token || !userId) {
                props.navigation.navigate('Login');
                return;
            }
            const expirationTime = expirationDate.getTime() - new Date().getTime();
            props.navigation.navigate('Main');
            dispatch(authenticate(userId, token, expirationTime));
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