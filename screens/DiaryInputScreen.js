import React, { useEffect } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import Colors from '../constants/Colors';

const DropdownName = () => {
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

const DropdownTime = () => {
    return (
        <RNPickerSelect
            style={{ ...pickerSelectStyles, placeholder: {
                color: '#1c1c1c',
                fontSize: 16,
              }}}
            placeholder={{label: 'Choose a time...'}}
            placeholderTextColor="red"
            onValueChange={(value) => console.log(value)}
            items={[
                { label: '6:00', value: '6:00', key: 1 },
                { label: '6:30', value: '6:30', key: 2 },
                { label: '7:00', value: '7:00', key: 3 },
                { label: '7:30', value: '7:30', key: 4 },
                { label: '8:00', value: '8:00', key: 5 },
                { label: '8:30', value: '8:30', key: 6 },
                { label: '9:00', value: '9:00', key: 7 },
                { label: '9:30', value: '9:30', key: 8 },
                { label: '10:00', value: '10:00', key: 9 },
                { label: '10:30', value: '10:30', key: 10 },
                { label: '11:00', value: '11:00', key: 11 },
                { label: '11:30', value: '11:30', key: 12 },
                { label: '12:00', value: '12:00', key: 13 },
                { label: '12:30', value: '12:30', key: 14 },
                { label: '13:00', value: '13:00', key: 15 },
                { label: '13:30', value: '13:30', key: 16 },
                { label: '14:00', value: '14:30', key: 17 },
                { label: '14:30', value: '14:30', key: 18 },
                { label: '15:00', value: '15:00', key: 19 },
                { label: '15:30', value: '15:30', key: 20 },
                { label: '16:00', value: '16:00', key: 21 },
                { label: '17:30', value: '17:30', key: 22 },
                { label: '18:00', value: '18:00', key: 23 },
                { label: '18:30', value: '18:30', key: 24 },
                { label: '19:00', value: '19:00', key: 25 },
                { label: '19:30', value: '19:30', key: 26 },
                { label: '20:00', value: '20:00', key: 27 },
                { label: '20:30', value: '20:30', key: 28 },
                { label: '21:00', value: '21:00', key: 29 },
                { label: '21:30', value: '21:30', key: 30 },
                { label: '22:00', value: '22:00', key: 31 }
                
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
                        <DropdownName />
                </View>
                <View style={styles.dropdown}>
                        <DropdownTime />
                </View>
                {!day && <TextInput 
                    placeholder="date" 
                    placeholderTextColor='#1c1c1c'
                    style={styles.inputText}
                    />}
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
        marginBottom: 15,
        borderRadius: 30,
        backgroundColor: '#d2d2d2',
        color: '#1c1c1c',
        fontSize: 16,
    },
    dropdown: {
        marginBottom: 15
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