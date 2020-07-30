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
                <Text style={styles.text}>Remove Items Screen</Text>
            </View>
        </LinearGradient>
    );
};

RemoveItemsScreen.navigationOptions = {
    headerTitle: 'Remove Items'
};

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white'
    }
});

export default RemoveItemsScreen;