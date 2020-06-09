import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DiaryUserStrip = props => {
    return(
        <View style={styles.container}>
            <View style={styles.item}></View>
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
        width: '25%',
        backgroundColor: 'yellow'
    },
    item: {
        height: '10%',
        width: '100%',
        backgroundColor: 'green'
    }
});

export default DiaryUserStrip;