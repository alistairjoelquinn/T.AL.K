import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Colors from '../constants/Colors';

export default function ShoppingScreen() {
    return (
        <View style={styles.screen}>
            <Image 
                source={require('../assets/paper.png')} 
                style={styles.image}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.grey
    },
    text: {
        color: Colors.paleText
    },
    image: {
        width: '80%',
        height: '100%'
    }
});