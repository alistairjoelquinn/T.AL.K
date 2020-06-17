import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const DiaryInputScren = props => {
    const day = props.navigation.getParam('currentDay');
    const { navigation } = props;
    const testData = useSelector(state => state.calendar && state.calendar.calendarData);

    useEffect(() => {
        navigation.setParams({today: day});
    }, [day]);


    return (
        <View style={styles.screen}>
            <Text style={styles.text}>calendar Input</Text>
            <Text style={styles.test}>{testData.day}</Text>
        </View>
    );
}

DiaryInputScren.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('today')
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#1c1c1c'
    },
    text: {
        color: '#d2d2d2',
        fontSize: 22
    },
    test: {
        color: 'tomato',
        fontSize: 16,
        marginVertical: 100
    }
});

export default DiaryInputScren;