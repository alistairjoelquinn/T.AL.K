import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DiaryUserStrip = props => {
    return(
        <View style={styles.container}>
            <Text style={styles.name}>{props.name}</Text>
            <View style={{ ...styles.item, backgroundColor: '#f3f7cd'}}></View>
            <View style={{ ...styles.item, backgroundColor: '#d8de9e'}}></View>
            <View style={{ ...styles.item, backgroundColor: '#e0d770'}}></View>
            <View style={{ ...styles.item, backgroundColor: '#e0b970'}}></View>
            <View style={{ ...styles.item, backgroundColor: '#e09570'}}></View>
            <View style={{ ...styles.item, backgroundColor: '#e06651'}}></View>
            <View style={{ ...styles.item, backgroundColor: '#db3535'}}></View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '27%',
        justifyContent: 'space-between'
    },
    item: {
        height: '12.5%',
        width: '100%',
        backgroundColor: 'green',
        borderRadius: 15
    },
    name: {
        width: '100%',
        color: 'white',
        textAlign: 'center'
    }
});

export default DiaryUserStrip;