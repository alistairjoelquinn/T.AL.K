import React, { useEffect } from 'react';
import { View, StyleSheet, TextInput, Platform, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import CalendarPicker from 'react-native-calendar-picker';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';
import times from '../constants/Times';

const DropdownName = () => {
    return (
        <RNPickerSelect
            style={{ ...pickerSelectStyles, placeholder: {
                color: '#1c1c1c',
                fontSize: 20,
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
                fontSize: 20,
              }}}
            placeholder={{label: 'Choose a time...'}}
            placeholderTextColor="red"
            onValueChange={(value) => console.log(value)}
            items={times}
        />
    );
};

const DiaryInputScren = props => {
    const day = props.navigation.getParam('currentDay');
    const person = props.navigation.getParam('currentPerson');
    const { navigation } = props;

    useEffect(() => {
        navigation.setParams({today: day});
    }, [day]);

    return (
        <View style={styles.screen}>
            <View style={styles.centered}>
                {!day && <CalendarPicker />}
                <View style={{marginTop: 30}}>
                    {person 
                        ? 
                    <View style={styles.inputText}>
                        <Text style={
                            {width: '100%', textAlign: 'center', fontSize: 20}
                        }>
                            {person}
                        </Text> 
                    </View>
                        :  
                    <View style={styles.dropdown}>
                            <DropdownName />
                    </View>}
                    <View style={styles.dropdown}>
                            <DropdownTime />
                    </View>
                    <TextInput 
                        numberOfLines={4}
                        placeholder="What's happening?" 
                        placeholderTextColor='#1c1c1c'
                        style={styles.inputText}
                    />
                </View>
            </View>
        </View>
    );
}

DiaryInputScren.navigationOptions = navData => {
    const today = navData.navigation.getParam('today');
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
                onPress={() => {}}
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