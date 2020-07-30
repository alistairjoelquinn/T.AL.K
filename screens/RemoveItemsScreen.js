import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';

import Colors from '../constants/Colors';

const RemoveItemsScreen = props => {
    const activitiesToday = useSelector(state => {
        console.log('state.calendar.removeItems: ', state.calendar.removeItems);
    });

    return (
        <LinearGradient
            colors={[Colors.grey, 'dimgrey']}
            style={styles.gradient}
        >
            <View>
                <Text style={styles.text}>Remove Items Screen</Text>
                {/* {activitiesToday.map(activity => {
                    return <Text key={activity.key} style={styles.activityText}>{activity.item.time} {activity.item.activity}</Text>
                })} */}
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
    }
});

export default RemoveItemsScreen;