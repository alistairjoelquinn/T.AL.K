import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

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
        backgroundColor: '#1c1c1c'
    },
    text: {
        color: '#d2d2d2'
    },
    image: {
        width: '80%',
        height: '100%'
    }
});