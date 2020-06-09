import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SingleEntry = props => {
    return (
        <View style={{ ...styles.item,  ...props.bgc }}></View>
    );
};

const DiaryUserStrip = props => {
    return(
        <View style={styles.container}>
            <Text style={styles.name}>{props.name}</Text>
            <SingleEntry bgc={{backgroundColor: '#f3f7cd'}} />
            <SingleEntry bgc={{backgroundColor: '#d8de9e'}} />
            <SingleEntry bgc={{backgroundColor: '#e0d770'}} />
            <SingleEntry bgc={{backgroundColor: '#e0b970'}} />
            <SingleEntry bgc={{backgroundColor: '#e09570'}} />
            <SingleEntry bgc={{backgroundColor: '#e06651'}} />
            <SingleEntry bgc={{backgroundColor: '#db3535'}} />
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