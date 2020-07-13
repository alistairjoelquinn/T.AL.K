import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import Colors from '../constants/Colors';

const DiaryInputScren = props => {
    const day = props.navigation.getParam('currentDay');
    console.log('day: ', day);
    const { navigation } = props;

    useEffect(() => {
        navigation.setParams({today: day});
    }, [day]);

    return (
        <View style={styles.screen}>
            <View style={styles.nudgeUp}>
                <View style={styles.dropdown}>
                    <RNPickerSelect
                        placeholder={{label: 'Choose a person...'}}
                        onValueChange={(value) => console.log(value)}
                        items={[
                            { label: 'Teniya', value: 'teniya', key: 1 },
                            { label: 'Alistair', value: 'alistair', key: 2 },
                            { label: 'Koen', value: 'koen', key: 3 },
                        ]}
                    />
                </View>
                <TextInput 
                    placeholder="What's happening?" 
                    placeholderTextColor='#1c1c1c'
                    style={styles.inputText}
                />
                {!day && <TextInput 
                    placeholder="date" 
                    placeholderTextColor='#1c1c1c'
                    style={styles.inputText}
                />}
                <TextInput 
                    placeholder="time" 
                    placeholderTextColor='#1c1c1c'
                    style={styles.inputText}
                    keyboardType="numbers-and-punctuation"
                />
            </View>
        </View>
    );
}

DiaryInputScren.navigationOptions = navData => {
    const today = navData.navigation.getParam('today');
    return {
        headerTitle: 'Calendar Input',
        headerTintColor: Colors.paleText,
        headerStyle: {
            backgroundColor: 'dimgrey',
            shadowColor: 'transparent',
            elevation: 0
        },
        headerTitle: today ? today : 'Enter something new...'
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'dimgrey',
        paddingVertical: 20,
        justifyContent: 'center'
    },
    text: {
        color: '#d2d2d2',
        fontSize: 22
    },
    test: {
        color: 'tomato',
        fontSize: 16,
        marginVertical: 100
    },
    inputText: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        borderRadius: 30,
        backgroundColor: '#d2d2d2',
        color: '#1c1c1c',
        fontSize: 16
    },
    dropdown: {
        margin: 20
    },
    nudgeUp: {
        position: 'relative',
        bottom: 40
    }
});

export default DiaryInputScren;