import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import DoubleClick from 'react-native-double-tap';


import Colors from '../constants/Colors';

const SingleEntry = props => {
    const activitiesToday = props.calendarData.filter(entry => {
        return entry.item.date === props.dayInput && entry.item.name === props.personInput}
    );

    return (
        <ScrollView>
            <DoubleClick
                doubleTap={() => {
                    props.navigation.navigate('DiaryInput', {
                        currentDay: props.dayInput,
                        currentPerson: props.personInput
                    });
                }}
                delay={200}
            >
                <View style={{ 
                    ...styles.item,  
                    backgroundColor: Colors.paleText,
                    borderWidth: 3,
                    borderColor: (props.colorDayCalc === 'Saturday' || props.colorDayCalc === 'Sunday')
                        ? 
                            '#0048a1'
                        : 
                            ''
                }}>
                    <Text style={styles.text}>
                        {
                            (props.day === 'Today' || props.day === 'Tomorrow') ?
                            props.day :
                            props.day.slice(0, 3)
                        }
                    </Text>
                    {activitiesToday &&
                        <View style={styles.scroller}>
                            {activitiesToday.map(activity => {
                                return <Text style={styles.activityText}>{activity.item.time} {activity.item.activity}</Text>
                            })}
                        </View>
                    }
                </View>
            </DoubleClick>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    item: {
        flex: 1,
        marginVertical: 7,
        height: 70,
        width: '100%',
        borderRadius: 15,
        alignItems: 'flex-start'
    },
    text: {
        marginTop: 3,
        marginLeft: 5,
        textAlign: 'center',
        color: Colors.grey,
        fontSize: 10
    },
    scroller: {
        padding: 5
    },
    activityText: {
        fontSize: 12
    }
});

export default SingleEntry;