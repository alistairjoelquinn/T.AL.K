import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import moment from 'moment';

import SingleEntry from './SingleEntry';

const DiaryUserStrip = props => {    
    const colorList = [
        {
            color: {backgroundColor: '#f3f7cd'},
            day: moment(new Date()).calendar().split(" at")[0],
            dayInput: moment(new Date()).format('MMMM Do YYYY')
        },
        {
            color: {backgroundColor: '#d8de9e'},
            day: moment(new Date()).add(1, 'day').calendar().split(" at")[0],
            dayInput: moment(new Date()).add(1, 'day').format('MMMM Do YYYY')
        },
        {
            color: {backgroundColor: '#e0d770'},
            day: moment(new Date()).add(2, 'day').format('dddd'),
            dayInput: moment(new Date()).add(2, 'day').format('MMMM Do YYYY')
        },
        {
            color: {backgroundColor: '#e0b970'},
            day: moment(new Date()).add(3, 'day').format('dddd'),
            dayInput: moment(new Date()).add(3, 'day').format('MMMM Do YYYY')
        },
        {
            color: {backgroundColor: '#e09570'},
            day: moment(new Date()).add(4, 'day').format('dddd'),
            dayInput: moment(new Date()).add(4, 'day').format('MMMM Do YYYY')
        },
        {
            color: {backgroundColor: '#e06651'},
            day: moment(new Date()).add(5, 'day').format('dddd'),
            dayInput: moment(new Date()).add(5, 'day').format('MMMM Do YYYY')
        },
        {
            color: {backgroundColor: '#db3535'},
            day: moment(new Date()).add(6, 'day').format('dddd'),
            dayInput: moment(new Date()).add(6, 'day').format('MMMM Do YYYY')
        }  
    ];

    return(
        <View style={styles.container}>
            <Text style={styles.name}>{props.name}</Text>
            <FlatList 
                data={colorList}
                keyExtractor={item => item.color.backgroundColor}
                renderItem={itemData => <SingleEntry 
                        navigation={props.navigation}
                        bgc={itemData.item.color}
                        day={itemData.item.day}
                        dayInput={itemData.item.dayInput}
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