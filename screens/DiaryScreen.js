import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import DiaryUserStrip from '../components/DiaryUserStrip';
import Colors from '../constants/Colors';
import { logout } from '../store/actions/auth';

const DiaryScreen = props => {
    const state = useSelector(state => state);
    console.log('state: ', state);
    const dispatch = useDispatch();

    const { navigation } = props;
    useEffect(() => {
        const logger = () => {
            dispatch(logout());
            navigation.navigate('StartUp');
        };
        navigation.setParams({quit: logger});
    }, [dispatch]);

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
    const logout = navData.navigation.getParam('quit');
    console.log('logout: ', logout);
    return {
        headerTitle: 'Home',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title='Menu'
                iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                onPress={logout}
            />
        </HeaderButtons>,
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