import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ShoppingScreen() {
    return (
        <View style={styles.screen}>
            <Text> Shopping Screen</Text>
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