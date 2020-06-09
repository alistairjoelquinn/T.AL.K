import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';

import Colors from '../constants/Colors';

export default function ShoppingScreen() {
    const [content, setContent] = useState('Test shopping list items');
    const [newList, setNewList] = useState(content);

    return (
        <View style={styles.screen}>
            <Image 
                source={require('../assets/paper.png')} 
                style={styles.image}
            />
            <TextInput style={styles.text}>{content}</TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.grey,
        height: '100%',
        width: '100%'
    },
    text: {
        color: Colors.grey,
        position: 'absolute',
        top: "-38.5%",
        left: "15%",
        height: '100%',
        lineHeight: 22.8
    },
    image: {
        width: '80%',
        height: '100%'
    }
});