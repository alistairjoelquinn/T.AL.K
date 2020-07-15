import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import SingleEntry from './SingleEntry';

const DiaryUserStrip = props => {    
    return(
        <View style={styles.container}>
            <Text style={styles.name}>{props.name}</Text>
            <FlatList 
                data={props.colorList}
                keyExtractor={item => {
                    return item.colorDayCalc
                }}
                renderItem={itemData => <SingleEntry 
                        navigation={props.navigation}
                        colorDayCalc={itemData.item.colorDayCalc}
                        day={props.first ? itemData.item.day : ''}
                        dayInput={itemData.item.dayInput}
                        personInput={props.name}
                        calendarData={props.calendarData}
                        first={props.first}
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