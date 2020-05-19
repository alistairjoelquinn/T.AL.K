import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'; 
import Colors from '../constants/Colors';

export default function Item({ content, onDelete, color }) {
    return (
        <TouchableOpacity 
            onPress={onDelete}
            activeOpacity={0.8}
        >
            <View style={{ ...styles.listItem, ...color }}>
                <Text style={styles.text}>
                    {content}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginTop: 10,
        backgroundColor: '#ccc',
        borderColor: Colors.grey,
        borderWidth: 1,
        borderRadius: 25
    },
    text: {
        fontSize: 16
    }
});