import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DiaryInputScren = props => {
    const day = props.navigation.getParam('currentDay');
    console.log('day: ', day);

    const { navigation } = props;
    useEffect(() => {
        navigation.setParams({today: day});
    }, [day]);

    return (
        <View style={styles.screen}>
            <Text style={styles.text}>Diary Input</Text>
        </View>
    );
}

DiaryInputScren.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('today')
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#1c1c1c'
    },
    text: {
        color: '#d2d2d2',
        fontSize: 22
    }
});

export default DiaryInputScren;