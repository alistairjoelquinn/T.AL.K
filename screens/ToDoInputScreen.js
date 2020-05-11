import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ToDoInputScreen() {
    return (
        <View style={styles.screen}>
            <Text>To-Do Input Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});