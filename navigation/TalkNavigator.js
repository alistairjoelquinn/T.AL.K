import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer';
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