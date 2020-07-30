import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RemoveItemsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Remove Items Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default RemoveItemsScreen;