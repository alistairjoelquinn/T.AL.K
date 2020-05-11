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
import ToDoInputScreen from '../screens/ToDoInputScreen';
import ShoppingScreen from '../screens/ShoppingScreen'
import ShoppingInputScreen from '../screens/ShoppingInputScreen'

const defaultStackOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white'
    },
    headerTitleStyle: {
        fontFamily: 'arial'
    },
    headerBackTitleStyle: {
        fontFamily: 'arial'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};

const DiaryNavigator = createStackNavigator({
    Diary: DiaryScreen,
    Diary: DiaryInputScreen
}, {
    defaultNavigationOptions: defaultStackOptions
});

const ToDoNavigator = createStackNavigator({
    ToDo: ToDoScreen,
    ToDoInput: ToDoInputScreen
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
                    name='ios-star' 
                    size={25} 
                    color={tabInfo.tintColor}
                />;
            },
            tabBarColor: Colors.primary,
            tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'arial'}}>Home</Text> : 'Home'
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
            tabBarColor: Colors.accentColor,
            tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'arial'}}>To-Do</Text> : 'To-Do'
        }
    },
    Shopping: {
        screen: ShoppingNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return <Ionicons 
                    name='ios-pizza' 
                    size={25} 
                    color={tabInfo.tintColor}
                />;
            },
            tabBarColor: Colors.accentColor,
            tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'arial'}}>Shopping</Text> : 'Shopping'
        }
    }
};

const MainTabNavigator = 
    Platform.OS === 'android' 
        ? 
            createMaterialBottomTabNavigator(config, {
                activeColor: 'white',
                shifting: true,
                barStyle: {
                    backgroundColor: Colors.primary
                }
            }) 
        : 
            createBottomTabNavigator(config, 
                {tabBarOptions: {
                    labelStyle: {
                        fontFamily: 'arial'
                    },
                    activeTintColor: Colors.accentColor
                }});

export default createAppContainer(MainTabNavigator);
