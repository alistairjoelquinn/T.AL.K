import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
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
        setNotesList(notesList => {
            return notesList.filter(item => {
                return item.id !== itemId;
            });
        });
    };
    const cancelItemInput = () => {
        setModalVisible(false);
    }
    useEffect(() => {
        navigation.setParams({toggle: setModalVisible});
    }, []);

    return (
        <View style={styles.screen}>
            {/* <View style={styles.button}>
                <Button 
                    color='#c192ff'
                    title="Add Something New..."
                    onPress={() => setModalVisible(true)}
                />
            </View> */}
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
    },
    banner: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 10,
        paddingTop: 20,
        borderBottomColor: '#d2d2d2',
        borderBottomWidth: 3,
        marginBottom: 20,
    },
    text: {
        fontSize: 40,
        color: '#d2d2d2'
    },
    button: {
        marginBottom: 10
    }
});
