import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DiaryUserStrip = props => {
    return(
        <View style={styles.container}>
            <View style={{ ...styles.item, backgroundColor: 'yellow'}}></View>
            <View style={styles.item}></View>
            <View style={styles.item}></View>
            <View style={styles.item}></View>
            <View style={styles.item}></View>
            <View style={styles.item}></View>
            <View style={styles.item}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '27%',
        justifyContent: 'space-between'
    },
    item: {
        height: '13%',
        width: '100%',
        backgroundColor: 'green',
        borderRadius: 15
    }
});

export default DiaryUserStrip;