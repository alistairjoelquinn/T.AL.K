import React, { useEffect, useState, useCallback } from 'react';
import { View, StyleSheet, TextInput, Platform, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import RNPickerSelect from 'react-native-picker-select';
import CalendarPicker from 'react-native-calendar-picker';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';
import times from '../constants/Times';
import { addCalendarItem } from '../store/actions/calendar';

const DropdownName = props => {
    return (
        <RNPickerSelect
            style={{
                ...pickerSelectStyles, placeholder: {
                    color: '#1c1c1c',
                    fontSize: 20,
                }
            }}
            placeholder={{ label: 'Choose a person...' }}
            placeholderTextColor="red"
            onValueChange={value => props.setName(value)}
            items={[
                { label: 'Teniya', value: 'Teniya', key: 1 },
                { label: 'Alistair', value: 'Alistair', key: 2 },
                { label: 'Koen', value: 'Koen', key: 3 },
            ]}
        />
    );
};

const DropdownTime = props => {
    return (
        <RNPickerSelect
            style={{
                ...pickerSelectStyles, placeholder: {
                    color: '#1c1c1c',
                    fontSize: 20,
                }
            }}
            placeholder={{ label: 'Choose a time...' }}
            placeholderTextColor="red"
            onValueChange={value => props.setTime(value)}
            items={times}
        />
    );
};

const DiaryInputScren = props => {
    const dispatch = useDispatch();
    const day = props.navigation.getParam('currentDay');
    const person = props.navigation.getParam('currentPerson');
    const getMoment = props.navigation.getParam('getMoment');
    const removeItems = props.navigation.getParam('editable');

    const [name, setName] = useState(person ? person : '');
    const [date, setDate] = useState(day ? day : '');
    const [time, setTime] = useState('');
    const [activity, setActivity] = useState('');
    const [emptyFields, setEmptyFields] = useState(false);
    const { navigation } = props;

    const inputSaveHandler = useCallback(() => {
        if (name && time && activity && day || name && date && time && activity) {
            let calendarItem = {
                name: name,
                date: date,
                time: time,
                activity: activity
            };
            dispatch(addCalendarItem(calendarItem));
            navigation.pop();
        } else {
            emptyFieldsHandler();
        }
    }, [name, date, time, activity]);

    useEffect(() => {
        navigation.setParams({ today: day, submit: inputSaveHandler });
    }, [day, inputSaveHandler]);

    const emptyFieldsHandler = () => {
        setEmptyFields(true);
        setTimeout(() => setEmptyFields(false), 1500);
    }

    return (
        <View style={styles.screen}>
            {emptyFields &&
                <View style={styles.centered}>
                    <Text style={styles.error}>Please fill out all fields!</Text>
                </View>
            }
            {emptyFields || <View style={styles.centered}>
                {!day && <CalendarPicker onDateChange={value => setDate(getMoment(value))} />}
                <View style={{ marginTop: 30 }}>
                    {person
                        ?
                        <View style={styles.inputText}>
                            <Text style={
                                { width: '100%', textAlign: 'center', fontSize: 20 }
                            }>
                                {person}
                            </Text>
                        </View>
                        :
                        <View style={styles.dropdown}>
                            <DropdownName setName={setName} />
                        </View>}
                    <View style={styles.dropdown}>
                        <DropdownTime setTime={setTime} />
                    </View>
                    <TextInput
                        numberOfLines={4}
                        placeholder="What's happening?"
                        placeholderTextColor='#1c1c1c'
                        style={styles.inputText}
                        onChangeText={value => setActivity(value)}
                    />
                    {removeItems &&
                        <Button
                            title="Remove Items?"
                            color="white"
                            onPress={() => {
                                props.navigation.navigate('RemoveItems');
                            }}
                        />
                    }
                </View>
            </View>}
        </View>
    );
}

DiaryInputScren.navigationOptions = navData => {
    const today = navData.navigation.getParam('today');
    const submit = navData.navigation.getParam('submit');
    return {
        headerTintColor: Colors.paleText,
        headerStyle: {
            backgroundColor: 'dimgrey',
            shadowColor: 'transparent',
            elevation: 0
        },
        headerTitle: today ? today : 'Enter something new...',
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title='Save'
                iconName={Platform.OS === 'android' ? 'md-save' : 'ios-save'}
                onPress={submit}
            />
        </HeaderButtons>
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
        width: 300,
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
        borderRadius: 30,
        backgroundColor: '#d2d2d2',
        color: '#1c1c1c',
        fontSize: 20,
        textAlign: 'center'
    },
    dropdown: {
        marginBottom: 20
    },
    centered: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    error: {
        fontSize: 30,
        color: 'white'
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
        paddingVertical: 10,
        textAlign: 'center'
    },
    inputAndroid: {
        fontSize: 20,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 30,
        color: '#1c1c1c',
        backgroundColor: '#d2d2d2',
        paddingHorizontal: 30,
        paddingVertical: 10,
        textAlign: 'center'
    }
});

export default DiaryInputScren;