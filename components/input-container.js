import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'; 

export default function InputContainer({ newItem, visible, cancelItemInput }) {
    const [item, setItem] = useState('');
    const itemHandler = inputValue => {
        setItem(inputValue);
    };
    const buttonTouch = () => {
        newItem(item);
        setItem('');
    }

    return (
        <Modal 
            visible={visible}
            animationType="slide"
        >
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder='Talk to me...'
                    placeholderTextColor='#1c1c1c'
                    style={styles.inputText}
                    onChangeText={itemHandler}
                    value={item}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button 
                            title="CANCEL"
                            color="red"
                            onPress={cancelItemInput}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button 
                            color='#c192ff'
                            title='ADD' 
                            onPress={buttonTouch}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1c1c1c'
    },
    inputText: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        borderRadius: 30,
        backgroundColor: '#d2d2d2',
        color: '#1c1c1c',
        
    },
    buttonContainer: {
        width: '55%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        width: '40%',
    }
});
