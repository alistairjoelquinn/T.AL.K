import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';

import HeaderButton from '../components/HeaderButton';
import DiaryUserStrip from '../components/DiaryUserStrip';
import Colors from '../constants/Colors';
import { logout } from '../store/actions/auth';
import { fetchCalendarItems } from '../store/actions/calendar';

const DiaryScreen = props => {
    const colorList = [
        {
            colorDayCalc: moment(new Date()).format('dddd'),
            day: moment(new Date()).calendar().split(" at")[0],
            dayInput: moment(new Date()).format('dddd Do MMMM YYYY')
        },
        {
            colorDayCalc: moment(new Date()).add(1, 'day').format('dddd'),
            day: moment(new Date()).add(1, 'day').calendar().split(" at")[0],
            dayInput: moment(new Date()).add(1, 'day').format('dddd Do MMMM YYYY')
        },
        {
            colorDayCalc: moment(new Date()).add(2, 'day').format('dddd'),
            day: moment(new Date()).add(2, 'day').format('dddd'),
            dayInput: moment(new Date()).add(2, 'day').format('dddd Do MMMM YYYY')
        },
        {
            colorDayCalc: moment(new Date()).add(3, 'day').format('dddd'),
            day: moment(new Date()).add(3, 'day').format('dddd'),
            dayInput: moment(new Date()).add(3, 'day').format('dddd Do MMMM YYYY')
        },
        {
            colorDayCalc: moment(new Date()).add(4, 'day').format('dddd'),
            day: moment(new Date()).add(4, 'day').format('dddd'),
            dayInput: moment(new Date()).add(4, 'day').format('dddd Do MMMM YYYY')
        },
        {
            colorDayCalc: moment(new Date()).add(5, 'day').format('dddd'),
            day: moment(new Date()).add(5, 'day').format('dddd'),
            dayInput: moment(new Date()).add(5, 'day').format('dddd Do MMMM YYYY')
        },
        {
            colorDayCalc: moment(new Date()).add(6, 'day').format('dddd'),
            day: moment(new Date()).add(6, 'day').format('dddd'),
            dayInput: moment(new Date()).add(6, 'day').format('dddd Do MMMM YYYY')
        }
    ];
    const colorList2 = [
        {
            colorDayCalc: moment(new Date()).format('dddd'),
            day: moment(new Date()).add(7, 'day').format('dddd'),
            dayInput: moment(new Date()).add(7, 'day').format('dddd Do MMMM YYYY')
        },
        {
            colorDayCalc: moment(new Date()).add(1, 'day').format('dddd'),
            day: moment(new Date()).add(8, 'day').format('dddd'),
            dayInput: moment(new Date()).add(8, 'day').format('dddd Do MMMM YYYY')
        },
        {
            colorDayCalc: moment(new Date()).add(2, 'day').format('dddd'),
            day: moment(new Date()).add(9, 'day').format('dddd'),
            dayInput: moment(new Date()).add(9, 'day').format('dddd Do MMMM YYYY')
        },
        {
            colorDayCalc: moment(new Date()).add(3, 'day').format('dddd'),
            day: moment(new Date()).add(10, 'day').format('dddd'),
            dayInput: moment(new Date()).add(10, 'day').format('dddd Do MMMM YYYY')
        },
        {
            colorDayCalc: moment(new Date()).add(4, 'day').format('dddd'),
            day: moment(new Date()).add(11, 'day').format('dddd'),
            dayInput: moment(new Date()).add(11, 'day').format('dddd Do MMMM YYYY')
        },
        {
            colorDayCalc: moment(new Date()).add(5, 'day').format('dddd'),
            day: moment(new Date()).add(12, 'day').format('dddd'),
            dayInput: moment(new Date()).add(12, 'day').format('dddd Do MMMM YYYY')
        },
        {
            colorDayCalc: moment(new Date()).add(6, 'day').format('dddd'),
            day: moment(new Date()).add(13, 'day').format('dddd'),
            dayInput: moment(new Date()).add(13, 'day').format('dddd Do MMMM YYYY')
        }
    ];
    const dispatch = useDispatch();
    const calendarData = useSelector(state => {
        console.log('state: ', state);
        return state.calendar && state.calendar.calendarData
    });
    const [weekOne, setWeekOne] = useState(true);

    const { navigation } = props;
    useEffect(() => {
        const logger = () => {
            dispatch(logout());
            navigation.navigate('StartUp');
        };
        navigation.setParams({ quit: logger });
        dispatch(fetchCalendarItems());
    }, [dispatch]);

    return (
        <LinearGradient
            colors={[Colors.grey, 'dimgrey']}
            style={styles.gradient}
        >
            <View style={styles.screen}>
                <View style={styles.container}>
                    <View style={styles.iconContainer}>
                        {
                            weekOne ||
                            <Text
                                style={styles.icon}
                                onPress={() => {
                                    setWeekOne(week => !week);
                                }}
                            >
                                <Ionicons name="md-arrow-round-back" size={32} color="white" />
                            </Text>
                        }
                    </View>
                    <DiaryUserStrip
                        colorList={weekOne ? colorList : colorList2}
                        navigation={props.navigation}
                        first
                        name="Teniya"
                        calendarData={calendarData}
                        weekOne={weekOne}
                    />
                    <DiaryUserStrip
                        colorList={weekOne ? colorList : colorList2}
                        navigation={props.navigation}
                        name="Alistair"
                        calendarData={calendarData}
                    />
                    <DiaryUserStrip
                        colorList={weekOne ? colorList : colorList2}
                        navigation={props.navigation}
                        name="Koen"
                        calendarData={calendarData}
                    />
                    <View style={styles.iconContainer}>
                        {
                            weekOne &&
                            <Text
                                style={styles.icon}
                                onPress={() => {
                                    setWeekOne(week => !week);
                                }}
                            >
                                <Ionicons name="md-arrow-round-forward" size={32} color="white" />
                            </Text>
                        }
                    </View>
                </View>
            </View>
        </LinearGradient>
    );
}

DiaryScreen.navigationOptions = navData => {
    const logout = navData.navigation.getParam('quit');
    return {
        headerTitle: 'Home',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title='Menu'
                iconName='ios-log-out'
                onPress={logout}
            />
        </HeaderButtons>,
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title='Input'
                iconName={'ios-add'}
                onPress={() => {
                    navData.navigation.navigate('DiaryInput', {
                        getMoment: date => moment(date).format('dddd Do MMMM YYYY')
                    })
                }}
            />
        </HeaderButtons>
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    container: {
        marginTop: 5,
        height: '100%',
        width: '100%',
        marginHorizontal: '5%',
        flexDirection: 'row',
        justifyContent: 'space-around'

    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#d2d2d2'
    },
    iconContainer: {
        width: 40,
        justifyContent: 'center'
    },
    icon: {
        fontSize: 20,
        paddingLeft: 10,
    }
});

export default DiaryScreen;