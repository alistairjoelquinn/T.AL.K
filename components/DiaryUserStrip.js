import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const SingleEntry = props => {
    console.log('styles.item: ', styles.item);
    console.log('props: ', props.bgc);
    return (
        <View style={{ ...styles.item,  ...props.bgc }}></View>
    );
};

const DiaryUserStrip = props => {
    const colorList = [
        {backgroundColor: '#f3f7cd'},
        {backgroundColor: '#d8de9e'},
        {backgroundColor: '#e0d770'},
        {backgroundColor: '#e0b970'},
        {backgroundColor: '#e09570'},
        {backgroundColor: '#e06651'},
        {backgroundColor: '#db3535'}
    ]

    return(
        <View style={styles.container}>
            <Text style={styles.name}>{props.name}</Text>
            <FlatList 
                data={colorList}
                keyExtractor={(item, index) => item.backgroundColor}
                renderItem={itemData => <SingleEntry 
                        bgc={itemData.item}
                    />
                }
            />
            <Text style={styles.name}>Hello</Text>
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