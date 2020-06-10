import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import moment from 'moment';

const SingleEntry = props => {
    const today = new Date();
    

    return (
        <View style={{ ...styles.item,  ...props.bgc }}>
            <Text style={styles.text}>Monday</Text>
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