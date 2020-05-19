import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Alert } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import InputItem from '../components/item';
import InputContainer from '../components/input-container';

export default function ToDoScreen({ navigation }) {
    const [notesList, setNotesList] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const newItem = item => {
        if(item.length === 0 || item === '') {
            return;
        }
        setNotesList(notesList => [ 
            { id: Math.random().toString(), value: item }, 
            ...notesList 
        ]);
        setModalVisible(false);
    };
    const removeItem = itemId => {
        Alert.alert(
            "Remove Item",
            "Are you sure you want to remove this item?",
            [
              {
                text: "No",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "Yes", onPress: () =>  setNotesList(notesList => {
                return notesList.filter(item => {
                    return item.id !== itemId;
                });
            })}
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
                data={notesList} 
                renderItem={note => 
                    <InputItem 
                        onDelete={() => {
                            removeItem(note.item.id);
                        }}
                        content={note.item.value}
                    />
                }
            />
        </View>
    );
};

ToDoScreen.navigationOptions = navData => {
    const toggle = navData.navigation.getParam('toggle');
    console.log('toggle: ', toggle);
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
