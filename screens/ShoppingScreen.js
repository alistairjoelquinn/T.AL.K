import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, FlatList, Alert, Text, ActivityIndicator, Button, RefreshControl, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import InputItem from '../components/item';
import InputContainer from '../components/input-container';
import Colors from '../constants/Colors';
import { addShoppingItem, removeShoppingItem, fetchShoppingListItems } from '../store/actions/shopping';

export default function ShoppingScreen({ navigation }) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [isRefreshing, setIsRefreshing] = useState(false);
    dispatch = useDispatch();
    const list = useSelector(state => { 
        return state.shopping.shoppingList;
    });
    const [modalVisible, setModalVisible] = useState(false);

    const loadProducts = useCallback(async () => {
        setError(null);
        setIsRefreshing(true);
        try {
            await dispatch(fetchShoppingListItems());
        } catch(err) {
            console.log('err getting shopping items: ', err);
            setError(err.message);
        } 
        setIsRefreshing(false);
    }, [dispatch, setIsLoading, setError]);

    useEffect(() => {
        setIsLoading(true);
        loadProducts().then(() => {
            setIsLoading(false);
        });
    }, [dispatch, loadProducts])
   
    const newItem = item => {
        if(item.length === 0 || item === '') {
            return;
        }
        dispatch(addShoppingItem(item));
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
                    dispatch(removeShoppingItem(itemId))
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

    if(error) {
        return (
            <View style={styles.centered}>
                <Text style={{color: Colors.paleText}}>An error has occurred!</Text>
                <Button 
                    title="Try Again!" 
                    onPress={loadProducts}
                    color={Colors.paleText}
                />
            </View>
        );
    }

    if(list.length === 0 && !modalVisible && isLoading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator  
                    size='large' 
                    color={Colors.paleText}
                />
            </View>
        );
    }

    if(list.length === 0 && !modalVisible) {
        return (
            <View style={styles.centered}>
                <Text style={{color: Colors.paleText}}>List current empty!</Text>
            </View>
        );
    }

    return (
        <View style={styles.shoppingContainer}>
            <View style={styles.screen}>
                <InputContainer 
                    newItem={newItem}
                    visible={modalVisible}
                    cancelItemInput={cancelItemInput}
                />
                <FlatList 
                    style={styles.transparent}
                    data={list} 
                    refreshControl={
                        <RefreshControl
                            onRefresh={loadProducts}
                            refreshing={isRefreshing}
                            tintColor="white"
                        />
                    }
                    keyExtractor={item => item.key}
                    renderItem={({item, index}) =>    
                        <InputItem 
                            shopping
                            onDelete={() => {
                                removeItem(item.key);
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
            <View style={styles.image}>
                <Image 
                    source={require('../assets/shoppingDad.jpg')} 
                />
            </View>
        </View>
    );
};

ShoppingScreen.navigationOptions = navData => {
    const toggle = navData.navigation.getParam('toggle');
    return {
        headerTitle: 'Shopping List',
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
    transparent: {
        backgroundColor: 'transparent'
    },
    screen: {
        padding: 50,
        backgroundColor: 'transparent',
        height: '100%',
        zIndex: 2
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    image: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        zIndex: 1
    },
    shoppingContainer: {
        backgroundColor: 'white'
    }
});