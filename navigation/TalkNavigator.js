import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Platform, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import DiaryScreen from '../screens/DiaryScreen';
import DiaryInputScreen from '../screens/DiaryInputScreen';
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
        fontFamily: 'Arial'
    },
    headerBackTitleStyle: {
        fontFamily: 'Arial'
    },
    headerTintColor: Colors.paleText
};

const DiaryNavigator = createStackNavigator({
    Diary: DiaryScreen,
    DiaryInput: DiaryInputScreen
}, {
    defaultNavigationOptions: defaultStackOptions
});

const ToDoNavigator = createStackNavigator({
    ToDo: ToDoScreen
}, {
    defaultNavigationOptions: defaultStackOptions
});

const ShoppingNavigator = createStackNavigator({
    Shopping: ShoppingScreen
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
            tabBarColor: Colors.grey,
            tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'Arial'}}>Home</Text> : 'Home'
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
            tabBarColor: Colors.grey,
            tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'Arial'}}>To-Do</Text> : 'To-Do'
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
            tabBarColor: Colors.grey,
            tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'Arial'}}>Shopping</Text> : 'Shopping'
        }
    }
};

const MainTabNavigator = createMaterialBottomTabNavigator(config, 
    {
        activeColor: Colors.paleText,
        shifting: true,
        barStyle: {
            backgroundColor: Colors.primary
        }
    }
);

export default createAppContainer(MainTabNavigator);
