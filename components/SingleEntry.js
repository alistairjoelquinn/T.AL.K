import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import DoubleClick from 'react-native-double-tap';
import { useDispatch } from 'react-redux';

import Colors from '../constants/Colors';
import { addActivitiesToday } from '../store/actions/calendar';

const SingleEntry = props => {
    const dispatch = useDispatch();

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
        scrollerOuter: {
            padding: 5,
            overflow: 'scroll'
        },
        scrollerInner: {
            minHeight: 60,
            minWidth: 80,
            marginBottom: 10
        },
        emptyScroller: {
            height: 100,
            width: 100
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
            {activitiesToday.length > 0
                ?
                <ScrollView style={styles.scrollerOuter}>
                    <DoubleClick
                        doubleTap={async () => {
                            await dispatch(addActivitiesToday(activitiesToday))
                            props.navigation.navigate('DiaryInput', {
                                currentDay: props.dayInput,
                                currentPerson: props.personInput,
                                editable: true
                            });
                        }}
                        delay={200}
                    >
                        <View style={styles.scrollerInner}>
                            {activitiesToday.map(activity => {
                                return <Text key={activity.key} style={styles.activityText}>{activity.item.time} {activity.item.activity}</Text>
                            })}
                        </View>
                    </DoubleClick>
                </ScrollView>
                :
                <DoubleClick
                    doubleTap={() => {
                        props.navigation.navigate('DiaryInput', {
                            currentDay: props.dayInput,
                            currentPerson: props.personInput,
                            editable: false
                        });
                    }}
                    delay={200}
                >
                    <View>
                        <Text style={styles.emptyScroller}></Text>
                    </View>
                </DoubleClick>
            }
        </View>
    );
};

export default SingleEntry;