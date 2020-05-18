import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import Item from '../components/item';
import InputContainer from '../components/input-container';

export default function App() {
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

    return (
        <View style={styles.screen}>
            <View style={styles.banner}>
                <Text style={styles.text}>notes...</Text>
            </View>
            <View style={styles.button}>
                <Button 
                    color='#c192ff'
                    title="Add Something New..."
                    onPress={() => setModalVisible(true)}
                />
            </View>
            <InputContainer 
                newItem={newItem}
                visible={modalVisible}
                cancelItemInput={cancelItemInput}
            />
            <FlatList 
                data={notesList} 
                renderItem={note => 
                    <Item 
                        onDelete={() => {
                            removeItem(note.item.id);
                        }}
                        content={note.item.value}
                    />
                }
            />
        </View>
    );
}

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
