import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

const RemoveItemsScreen = props => {
    const activitiesToday = useSelector(state => state.calendar.removeItems);
    console.log('activitiesToday: ', activitiesToday);

    return (
        <LinearGradient
            colors={[Colors.grey, 'dimgrey']}
            style={styles.gradient}
        >
            <View style={styles.container}>
                {
                    activitiesToday
                        ?
                        activitiesToday.map(activity => {
                            return (
                                <View style={styles.smallCont}>
                                    <Ionicons
                                        name="ios-trash"
                                        size={32}
                                        color="white"
                                        onPress={() => { }}
                                    />
                                    <Text key={activity.key} style={styles.activityText}>
                                        {activity.item.time} - {activity.item.activity}
                                    </Text>
                                </View>
                            );
                        })
                        :
                        <Text style={styles.text}>Remove Items Screen</Text>
                }
            </View>
        </LinearGradient>
    );
};

RemoveItemsScreen.navigationOptions = {
    headerTitle: 'Remove Items'
};

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white'
    },
    activityText: {
        fontSize: 25,
        color: 'white',
        paddingLeft: 20
    },
    container: {
        width: '80%'
    },
    smallCont: {
        flexDirection: 'row',
        paddingBottom: 20
    }
});

export default RemoveItemsScreen;