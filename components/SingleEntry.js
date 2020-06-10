import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SingleEntry = props => {

    return (
        <View style={{ ...styles.item,  ...props.bgc }}>
            <Text style={styles.text}>{props.day}</Text>
        </View>
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