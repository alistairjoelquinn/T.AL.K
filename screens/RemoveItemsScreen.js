import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Colors from '../constants/Colors';

const RemoveItemsScreen = props => {
    return (
        <LinearGradient
            colors={[Colors.grey, 'dimgrey']}
            style={styles.gradient}
        >
            <View>
                <Text>Remove Items Screen</Text>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default RemoveItemsScreen;