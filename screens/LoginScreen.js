import React, { useState, useReducer, useCallback, useEffect } from 'react';
import { StyleSheet, Text, ScrollView, View, KeyboardAvoidingView, Button, ActivityIndicator, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';

import Input from '../components/Input';
import LoginContainer from '../components/LoginContainer';
import Colors from '../constants/Colors';

const formReducer = (state, action) => {
    if (action.type === 'FORM_UPDATE') {
        const updatedValues = {
            ...state.inputValues,
            [action.input]: action.value
        };
        const updatedValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid
        }
        let updatedFormIsValid = true;
        for (const key in updatedValidities) {
            updatedFormIsValid = updatedFormIsValid && updatedValidities[key]
        }
        return {
            ...state,
            inputValues: updatedValues,
            inputValidities: updatedValidities,
            formIsValid: updatedFormIsValid
        }
    }
    return state;
};

const LoginScreen = props => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const dispatch = useDispatch();
    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
            email: '',
            password: ''
        },
        inputValidities: {
            email: false,
            password: false
        },
        formIsValid: false
    });

    const inputChangeHandler = useCallback((inputId, inputValue, inputValidity) => {
        dispatchFormState({
            type: 'FORM_UPDATE',
            value: inputValue,
            isValid: inputValidity,
            input: inputId
        });
    }, [dispatchFormState]);

    useEffect(() => {
        if (error) {
            Alert.alert(
                'An error occurred!',
                error,
                [
                    { text: 'Okay!' }
                ]
            );
        }
    }, [error]);

    const authHandler = async () => {
        setIsLoading(true);
        setError(null);
        try {
            await dispatch(login(
                formState.inputValues.email,
                formState.inputValues.password
            ));
            props.navigation.navigate('Diary');
        } catch (err) {
            setError(err.message);
            setIsLoading(false);
        }
    };

    return (
        <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={50} style={styles.screen}>
            <LinearGradient
                colors={[Colors.grey, 'dimgrey']}
                style={styles.gradient}
            >
                <LoginContainer style={styles.authContainer}>
                    <ScrollView>
                        <Input
                            id='email'
                            label='Email'
                            keyboardType="email-address"
                            required
                            email
                            autoCapitalize="none"
                            errorText="Please enter a valid email address"
                            onInputChange={inputChangeHandler}
                            initialValue=''
                        />
                        <Input
                            id='password'
                            label='Password'
                            keyboardType="default"
                            secureTextEntry
                            required
                            minLength={5}
                            autoCapitalize="none"
                            errorText="Please enter a valid password"
                            onInputChange={inputChangeHandler}
                            initialValue=''
                        />
                        <View style={styles.buttonContainer}>
                            {isLoading ? <ActivityIndicator size='small' color={Colors.palePurple} /> : <Button
                                title="Log In"
                                color={Colors.palePurple}
                                onPress={authHandler}
                            />}
                        </View>
                    </ScrollView>
                </LoginContainer>
            </LinearGradient>
        </KeyboardAvoidingView>
    );
};

LoginScreen.navigationOptions = {
    headerTitle: 'Login to T.AL.K'
};

const styles = StyleSheet.create({
    authContainer: {
        width: '80%',
        maxWidth: 400,
        maxHeight: 400,
        padding: 20
    },
    screen: {
        flex: 1
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        marginTop: 10
    }
});

export default LoginScreen;