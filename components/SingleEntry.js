import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';

const SingleEntry = props => {
    return (
        <TouchableOpacity onPress={() => {
            props.navigation.navigate('DiaryInput', {
                currentDay: props.dayInput,
                currentPerson: props.personInput
            });
        }}>
            <View style={{ 
                ...styles.item,  
                backgroundColor: Colors.paleText,
                borderWidth: 3,
                borderColor: (props.colorDayCalc === 'Saturday' || props.colorDayCalc === 'Sunday')
                    ? 
                        '#0048a1'
                    : 
                        ''
            }}>
                <Text style={styles.text}>{
                    (props.day === 'Today' || props.day === 'Tomorrow') ?
                    props.day :
                    props.day.slice(0, 3)
                }</Text>
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
        borderRadius: 15,
        alignItems: 'flex-start'
    },
    text: {
        marginTop: 3,
        marginLeft: 5,
        textAlign: 'center',
        color: Colors.grey,
        fontSize: 10
    }
});

export default SingleEntry;