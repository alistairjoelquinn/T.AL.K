import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DiaryScreen() {
    return (
        <View style={styles.screen}>
            <Text>Diary Screen</Text>
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