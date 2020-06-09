import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import DiaryUserStrip from '../components/DiaryUserStrip';

export default function DiaryScreen() {
    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <DiaryUserStrip name="Teniya" />
                <DiaryUserStrip name="Alistair" />
                <DiaryUserStrip name="Koen" />
            </View>
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
        backgroundColor: '#1c1c1c',
        justifyContent: 'center'
    },
    container: {
        marginHorizontal: '5%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    text: {
        color: '#d2d2d2'
    }
});