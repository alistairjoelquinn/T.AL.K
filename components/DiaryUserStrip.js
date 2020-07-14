import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import moment from 'moment';

import SingleEntry from './SingleEntry';

const DiaryUserStrip = props => {    
    const colorList = [
        {
            colorDayCalc: moment(new Date()).format('dddd'),
            day: moment(new Date()).calendar().split(" at")[0],
            dayInput: moment(new Date()).format('dddd Do MMMM YYYY')
        },
        {
            colorDayCalc: moment(new Date()).add(1, 'day').format('dddd'),
            day: moment(new Date()).add(1, 'day').calendar().split(" at")[0],
            dayInput: moment(new Date()).add(1, 'day').format('dddd Do MMMM YYYY')
        },
        {
            colorDayCalc: moment(new Date()).add(2, 'day').format('dddd'),
            day: moment(new Date()).add(2, 'day').format('dddd'),
            dayInput: moment(new Date()).add(2, 'day').format('dddd Do MMMM YYYY')
        },
        {
            colorDayCalc: moment(new Date()).add(3, 'day').format('dddd'),
            day: moment(new Date()).add(3, 'day').format('dddd'),
            dayInput: moment(new Date()).add(3, 'day').format('dddd Do MMMM YYYY')
        },
        {
            colorDayCalc: moment(new Date()).add(4, 'day').format('dddd'),
            day: moment(new Date()).add(4, 'day').format('dddd'),
            dayInput: moment(new Date()).add(4, 'day').format('dddd Do MMMM YYYY')
        },
        {
            colorDayCalc: moment(new Date()).add(5, 'day').format('dddd'),
            day: moment(new Date()).add(5, 'day').format('dddd'),
            dayInput: moment(new Date()).add(5, 'day').format('dddd Do MMMM YYYY')
        },
        {
            colorDayCalc: moment(new Date()).add(6, 'day').format('dddd'),
            day: moment(new Date()).add(6, 'day').format('dddd'),
            dayInput: moment(new Date()).add(6, 'day').format('dddd Do MMMM YYYY')
        }  
    ];

    return(
        <View style={styles.container}>
            <Text style={styles.name}>{props.name}</Text>
            <FlatList 
                data={colorList}
                keyExtractor={item => {
                    return item.colorDayCalc
                }}
                renderItem={itemData => <SingleEntry 
                        navigation={props.navigation}
                        colorDayCalc={itemData.item.colorDayCalc}
                        day={props.first ? itemData.item.day : ''}
                        dayInput={itemData.item.dayInput}
                        personInput={props.name}
                    />
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '30%',
        justifyContent: 'space-between'
    },
    name: {
        width: '100%',
        color: 'white',
        textAlign: 'center'
    }
});

export default DiaryUserStrip;