import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DiaryScreen() {
    return (
        <View style={styles.screen}>
            <Text style={styles.text}>Diary Screen</Text>
        </View>
    );
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