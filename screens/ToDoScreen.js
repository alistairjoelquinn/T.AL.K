import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import InputItem from '../components/item';
import InputContainer from '../components/input-container';
import Colors from '../constants/Colors';
import { addToDoItem, removeToDoItem } from '../store/actions/todo';

export default function ToDoScreen({ navigation }) {
    dispatch = useDispatch();
    const list = useSelector(state => { 
        return state.toDo.toDoList;
    });
    const [modalVisible, setModalVisible] = useState(false);
   
    const newItem = item => {
        if(item.length === 0 || item === '') {
            return;
        }
        dispatch(addToDoItem(item));
        setModalVisible(false);
    };
    const removeItem = itemId => {
        Alert.alert(
            "Remove Item",
            "Are you sure you want to remove this item?",
            [
                {
                    text: "No",
                    style: "cancel"
                },
                { text: "Yes", onPress: () =>  
                    dispatch(removeToDoItem(itemId))
                }
            ],
            { cancelable: true }
        );
    };

    const cancelItemInput = () => {
        setModalVisible(false);
    }
    useEffect(() => {
        navigation.setParams({toggle: setModalVisible});
    }, []);

    return (
        <View style={styles.screen}>
            <InputContainer 
                newItem={newItem}
                visible={modalVisible}
                cancelItemInput={cancelItemInput}
            />
            <FlatList 
                data={list} 
                keyExtractor={item => item.key}
                renderItem={({item, index}) =>    
                     <InputItem 
                        onDelete={() => {
                            removeItem(index);
                        }}
                        content={item.item}
                        color={index % 2 === 0 
                            ? 
                                {borderColor: Colors.paleYellow} 
                            : 
                                {borderColor: Colors.palePurple}
                        }
                    /> 
                }
            />
        </View>
    );
};

ToDoScreen.navigationOptions = navData => {
    const toggle = navData.navigation.getParam('toggle');
    return {
        headerTitle: 'To Do List',
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item 
                title='Input' 
                iconName={'ios-add'} 
                onPress={() => {
                    toggle(true);
                }} 
            />
        </HeaderButtons>
    };
};

const styles = StyleSheet.create({
    screen: {
        padding: 50,
        backgroundColor: '#1c1c1c',
        height: '100%'
    }
});