import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';

export default function DiaryScreen() {
    return (
        <View style={styles.screen}>
            <Text style={styles.text}>Diary Screen</Text>
        </View>
    );
}

DiaryScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Home',
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item 
                title='Input' 
                iconName={'ios-add'} 
                onPress={() => {
                    navData.navigation.navigate('DiaryInput');
                }}
            />
        </HeaderButtons>
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1c1c1c'
    },
    text: {
        color: '#d2d2d2'
    }
});