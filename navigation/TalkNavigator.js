import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation';
import { Platform, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import DiaryScreen from '../screens/DiaryScreen';
import DiaryInputScreen from '../screens/DiaryInputScreen';
import ToDoScreen from '../screens/ToDoScreen';
import ShoppingScreen from '../screens/ShoppingScreen'
import ShoppingInputScreen from '../screens/ShoppingInputScreen'
import Colors from '../constants/Colors';

const defaultStackOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.grey : 'white',
        shadowColor: 'transparent',
        elevation: 0
    },
    headerTitleStyle: {
        fontFamily: 'sans-serif'
    },
    headerBackTitleStyle: {
        fontFamily: 'sans-serif'
    },
    headerTintColor: Platform.OS === 'android' ? Colors.paleText : Colors.primary
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
    Shopping: ShoppingScreen,
    ShoppingInput: ShoppingInputScreen
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
            tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'sans-serif'}}>Home</Text> : 'Home'
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
            tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'sans-serif'}}>To-Do</Text> : 'To-Do'
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
            tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'sans-serif'}}>Shopping</Text> : 'Shopping'
        }
    }
};

const MainTabNavigator = 
    Platform.OS === 'android' 
        ? 
            createMaterialBottomTabNavigator(config, {
                activeColor: Colors.paleText,
                shifting: true,
                barStyle: {
                    backgroundColor: Colors.primary
                }
            }) 
        : 
            createBottomTabNavigator(config, 
                {tabBarOptions: {
                    labelStyle: {
                        fontFamily: 'sans-serif'
                    },
                    activeTintColor: Colors.two
                }});

export default createAppContainer(MainTabNavigator);
