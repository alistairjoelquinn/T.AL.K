import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'; 

export default function Item({ content, onDelete, color, shopping }) {
    const [touched, setTouched] = useState(false)

    return (
        <TouchableOpacity 
            onPress={onDelete}
            activeOpacity={0.8}
        >
            <View style={{ ...styles.listItem, ...color }}>
                <Text style={styles.text}>
                    {content}
                </Text>
                {shopping && <Text
                    onPress={() => setTouched(item => !item)}
                    style={styles.tick}
                >
                    {touched ? '✅' : '✔️'}
                </Text>}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        padding: 10,
        marginTop: 10,
        backgroundColor: '#ccc',
        borderWidth: 1,
        borderRadius: 25,
        alignItems: 'center',
        zIndex: 2
    },
    text: {
        fontSize: 16
    },
    tick: {
        position: 'absolute',
        right: 0,
        zIndex: 0,
        padding: 20
    }
});