import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Platform, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import DiaryScreen from '../screens/DiaryScreen';
import LoginScreen from '../screens/LoginScreen';
import StartUpScreen from '../screens/StartUpScreen';
import DiaryInputScreen from '../screens/DiaryInputScreen';
import RemoveItemsScreen from '../screens/RemoveItemsScreen';
import ToDoScreen from '../screens/ToDoScreen';
import ShoppingScreen from '../screens/ShoppingScreen'
import Colors from '../constants/Colors';

const defaultStackOptions = {
    headerStyle: {
        backgroundColor: Colors.grey,
        shadowColor: 'transparent',
        elevation: 0
    },
    headerTitleStyle: {
        fontFamily: 'medium'
    },
    headerBackTitleStyle: {
        fontFamily: 'medium'
    },
    headerTintColor: Colors.paleText
};

const DiaryNavigator = createStackNavigator({
    Diary: DiaryScreen,
    DiaryInput: DiaryInputScreen,
    RemoveItems: RemoveItemsScreen
}, {
    defaultNavigationOptions: defaultStackOptions
});

const ToDoNavigator = createStackNavigator({
    ToDo: ToDoScreen
}, {
    defaultNavigationOptions: {
        ...defaultStackOptions,
        headerStyle: {
            ...defaultStackOptions.headerStyle,
            backgroundColor: 'dimgrey'
        }
    }
});

const ShoppingNavigator = createStackNavigator({
    Shopping: ShoppingScreen
}, {
    defaultNavigationOptions: {
        ...defaultStackOptions,
        headerStyle: {
            ...defaultStackOptions.headerStyle,
            backgroundColor: 'white'
        },
        headerTitleStyle: {
            color: 'black'
        }
    }
});

const LoginNavigator = createStackNavigator({
    Login: LoginScreen
}, {
    defaultNavigationOptions: defaultStackOptions
});

const config = {
    Diary: {
        screen: DiaryNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return <Ionicons
                    name='ios-calendar'
                    size={25}
                    color={tabInfo.tintColor}
                />;
            },
            activeColor: Colors.paleText,
            barStyle: {
                backgroundColor: 'dimgrey',
                borderColor: "transparent",
                borderWidth: 0,
                shadowOpacity: 0,
                elevation: 0
            },
            tabBarLabel: Platform.OS === 'android' ? <Text style={{ fontFamily: 'medium' }}>Home</Text> : 'Home'
        }
    },
    ToDo: {
        screen: ToDoNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return <Ionicons
                    name='ios-list'
                    size={25}
                    color={tabInfo.tintColor}
                />;
            },
            activeColor: Colors.paleText,
            barStyle: {
                backgroundColor: Colors.grey,
                borderTopColor: "transparent"
            },
            tabBarLabel: Platform.OS === 'android' ? <Text style={{ fontFamily: 'medium' }}>To-Do</Text> : 'To-Do'
        }
    },
    Shopping: {
        screen: ShoppingNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return <Ionicons
                    name='ios-basket'
                    size={25}
                    color={tabInfo.tintColor}
                />;
            },
            barStyle: {
                backgroundColor: 'white',
                color: Colors.grey,
                borderColor: "transparent",
                borderWidth: 0,
                shadowOpacity: 0,
                elevation: 0
            },
            tabBarLabel: Platform.OS === 'android' ? <Text style={{ fontFamily: 'medium' }}>Shopping</Text> : 'Shopping'
        }
    }
};

const TabNavigator = createMaterialBottomTabNavigator(config,
    {
        shifting: true,
    }
);

const MainNavigator = createSwitchNavigator({
    StartUp: StartUpScreen,
    Login: LoginNavigator,
    Main: TabNavigator
});

export default createAppContainer(MainNavigator);
