import React from 'react';
import { View, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { LinearGradient } from 'expo-linear-gradient';

import HeaderButton from '../components/HeaderButton';
import DiaryUserStrip from '../components/DiaryUserStrip';
import Colors from '../constants/Colors';

const DiaryScreen = props => {
    return (
        <LinearGradient
            colors={[Colors.grey, 'dimgrey']}
            style={styles.gradient}
        >     
            <View style={styles.screen}>
                <View style={styles.container}>
                    <DiaryUserStrip navigation={props.navigation} name="Teniya" />
                    <DiaryUserStrip navigation={props.navigation} name="Alistair" />
                    <DiaryUserStrip navigation={props.navigation} name="Koen" />
                </View>
            </View>
        </LinearGradient>
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
        backgroundColor: 'transparent',
        justifyContent: 'center'
    },
    container: {
        marginTop: 5,
        height: '100%',
        marginHorizontal: '5%',
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#d2d2d2'
    }
});

export default DiaryScreen;