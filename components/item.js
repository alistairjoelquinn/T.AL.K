import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'; 

export default function Item({ content, onDelete }) {
    return (
        <TouchableOpacity 
            onPress={onDelete}
            activeOpacity={0.8}
        >
            <View style={styles.listItem}>
                <Text>
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
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 20
    }
});