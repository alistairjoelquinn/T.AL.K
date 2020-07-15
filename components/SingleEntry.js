import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import DoubleClick from 'react-native-double-tap';

import Colors from '../constants/Colors';

const SingleEntry = props => {

    const styles = StyleSheet.create({
        item: {
            flex: 1,
            marginVertical: 7,
            height: 70,
            width: '100%',
            borderRadius: 15,
            alignItems: 'flex-start',
            overflow: 'scroll'
        },
        text: {
            marginTop: 3,
            marginLeft: 5,
            textAlign: 'center',
            color: (props.colorDayCalc === 'Saturday' || props.colorDayCalc === 'Sunday')
                ? 
                    Colors.paleText
                : 
                    Colors.grey, 
            fontSize: 10
        },
        scroller: {
            padding: 5,
            overflow: 'scroll',
            height: '90%'
        },
        activityText: {
            fontSize: 10,
            color: (props.colorDayCalc === 'Saturday' || props.colorDayCalc === 'Sunday')
                ? 
                    Colors.paleText
                : 
                    Colors.grey, 
        }
    });

    const activitiesToday = props.calendarData
        .filter(entry => entry.item.date === props.dayInput && entry.item.name === props.personInput)
        .sort((a, b) => a.item.time.split(':')[0] - b.item.time.split(':')[0]);

    return (
            <View style={{ 
                ...styles.item, 
                backgroundColor: (props.colorDayCalc === 'Saturday' || props.colorDayCalc === 'Sunday')
                ? 
                    Colors.grey
                :
                    Colors.paleText,
                borderWidth: 3,
            }}>
                {props.first && <Text style={styles.text}>
                    {
                        (props.day === 'Today' || props.day === 'Tomorrow') ?
                        props.day :
                        props.day.slice(0, 3)
                    }
                </Text>}
                {activitiesToday &&
                    <ScrollView style={styles.scroller}>
                        <DoubleClick
                            doubleTap={() => {
                                props.navigation.navigate('DiaryInput', {
                                    currentDay: props.dayInput,
                                    currentPerson: props.personInput
                                });
                            }}
                            delay={200}
                        >
                            {activitiesToday.map(activity => {
                                return <Text key={activity.key} style={styles.activityText}>{activity.item.time} {activity.item.activity}</Text>
                            })}
                        </DoubleClick>
                    </ScrollView>
                }
            </View>
    );
};

export default SingleEntry;