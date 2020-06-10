import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import moment from 'moment';

import SingleEntry from './SingleEntry';

const DiaryUserStrip = props => {    
    const colorList = [
        {
            color: {backgroundColor: '#f3f7cd'},
            day: moment(new Date()).format('dddd')
        },
        {
            color: {backgroundColor: '#d8de9e'},
            day: moment(new Date()).add(1, 'day').format('dddd')
        },
        {
            color: {backgroundColor: '#e0d770'},
            day: moment(new Date()).add(2, 'day').format('dddd')
        },
        {
            color: {backgroundColor: '#e0b970'},
            day: moment(new Date()).add(3, 'day').format('dddd')
        },
        {
            color: {backgroundColor: '#e09570'},
            day: moment(new Date()).add(4, 'day').format('dddd')
        },
        {
            color: {backgroundColor: '#e06651'},
            day: moment(new Date()).add(5, 'day').format('dddd')
        },
        {
            color: {backgroundColor: '#db3535'},
            day: moment(new Date()).add(6, 'day').format('dddd')
        }  
    ];

    return(
        <View style={styles.container}>
            <Text style={styles.name}>{props.name}</Text>
            <FlatList 
                data={colorList}
                keyExtractor={item => item.backgroundColor}
                renderItem={itemData => <SingleEntry 
                        bgc={itemData.item.color}
                        day={itemData.item.day}
                    />
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '27%',
        justifyContent: 'space-between'
    },
    name: {
        width: '100%',
        color: 'white',
        textAlign: 'center'
    }
});

export default DiaryUserStrip;