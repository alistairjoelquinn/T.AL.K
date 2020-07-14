import React, { useEffect } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import Colors from '../constants/Colors';

export const Dropdown = () => {
    return (
        <RNPickerSelect
            style={{ ...pickerSelectStyles, placeholder: {
                color: '#1c1c1c',
                fontSize: 16,
              }}}
            placeholder={{label: 'Choose a person...'}}
            placeholderTextColor="red"
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Teniya', value: 'teniya', key: 1 },
                { label: 'Alistair', value: 'alistair', key: 2 },
                { label: 'Koen', value: 'koen', key: 3 },
            ]}
        />
    );
};

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
                        <Dropdown />
                </View>
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
                <TextInput 
                    numberOfLines={4}
                    placeholder="What's happening?" 
                    placeholderTextColor='#1c1c1c'
                    style={styles.inputText}
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
        fontSize: 16,
    },
    dropdown: {
        margin: 20
    },
    nudgeUp: {
        position: 'relative',
        bottom: 40,
        width: '100%',
        alignItems: 'center'
    }
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 20,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 30,
        color: '#1c1c1c',
        backgroundColor: '#d2d2d2',
        paddingHorizontal: 30,
        paddingVertical: 10
    },
    inputAndroid: {
        fontSize: 20,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 30,
        color: '#1c1c1c',
        backgroundColor: '#d2d2d2',
        paddingHorizontal: 30,
        paddingVertical: 10
    }
});

export default DiaryInputScren;