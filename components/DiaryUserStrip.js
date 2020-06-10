import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const SingleEntry = props => {
    return (
        <View style={{ ...styles.item,  ...props.bgc }}>
            <Text>Color: {props.bgc.backgroundColor}</Text>
        </View>
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
                style={styles.list}
                data={colorList}
                keyExtractor={(item, index) => item.backgroundColor}
                renderItem={itemData => <SingleEntry 
                        bgc={itemData.item}
                    />
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '27%',
        justifyContent: 'space-between'
    },
    item: {
        marginVertical: 10,
        height: 65,
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