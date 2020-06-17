import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DiaryInputScren = props => {
    const day = props.navigation.getParam('currentDay');

    return (
        <View style={styles.screen}>
            <Text style={styles.text}>{day}</Text>
        </View>
    );
}

DiaryInputScren.navigationOptions = {
    headerTitle: 'Input Something New'
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1c1c1c'
    },
    text: {
        color: '#d2d2d2'
    }
});

export default DiaryInputScren;