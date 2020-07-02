import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';

const SingleEntry = props => {
    return (
        <TouchableOpacity onPress={() => {
            props.navigation.navigate('DiaryInput', {
                currentDay: props.dayInput
            });
        }}>
            <View style={{ 
                ...styles.item,  
                backgroundColor: (props.colorDayCalc === 'Saturday' || props.colorDayCalc === 'Sunday')
                    ? 
                        Colors.palePurple 
                    : 
                        Colors.paleYellow 
            }}>
                <Text style={styles.text}>{props.day}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item: {
        flex: 1,
        marginVertical: 7,
        height: 70,
        width: '100%',
        backgroundColor: 'green',
        borderRadius: 15
    },
    text: {
        textAlign: 'center'
    }
});

export default SingleEntry;