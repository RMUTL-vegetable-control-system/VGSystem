import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { Entypo } from '@expo/vector-icons';

const color = {
    primary: '#80C5De',
    white: '#ffffff',
    gray: '#C4C4C4',
}

const windowWidth = Dimensions.get('window').width;

export default function ListWater({ navigation }) {


    const [listTime, setListTime] = useState([]);
    const [servoID, setServoID] = useState([]);
    const [startHour, setStartHour] = useState([]);
    const [startMinute, setStartMinute] = useState([]);
    const [duration, setDuration] = useState([]);
    // console.log(listTime)
    // console.log(listTime1)

    function setFormatListTime(servoID, startHour, startMinute, duration) {
        for (let i = 0; i < servoID.length; i++) {
            // setListtime('waterตัวที่ ' + servoID[i] + 'ทำงานเมื่อ' + startHour[i] + ':' + startMinute[i] + '   เป็นระยะเวลา : ' + duration[i]);
            listTime.push({ id: i, name: 'Waterตัวที่ ' + servoID[i], time: (startHour[i] + ':' + startMinute[i]), duration: duration[i] })
            // console.log(listTime)
            console.log('Setting Data row : ' + i);
        }
        console.log('Set Data Done.');
    }

    useEffect(() => {
        console.log('Fetching Data...');
        fetchData();
        console.log('Fetch Data Done')

    }, [])

    useEffect(() => {
        setListTime([]);
    }, [servoID, startHour, startHour, duration])

    async function fetchData() {
        const db = getDatabase();
        let userId = 'user1'; // Edit To User ID 
        const reference = ref(db, 'user/' + userId);
        onValue(reference, (snapshot) => {
            setServoID(snapshot.val().farm.servo.timer.servoID); // set เลขของ servo
            setStartHour(snapshot.val().farm.servo.timer.startHour); // set เวลาที่เริ่มทำงาน ชั่วโฒง
            setStartMinute(snapshot.val().farm.servo.timer.startMinute); // set เวลาที่เริ่มทำงาน นาที
            setDuration(snapshot.val().farm.servo.timer.duration); // set ระยะเวลาที่ทำงาน
        })
    }
    setFormatListTime(servoID, startHour, startMinute, duration);
    console.log('')
    const Item = ({ name, time, duration }) => (
        <View style={styles.item}>

            <View style={styles.itemInViewOne}>
                <Entypo name="back-in-time" size={45} color={color.primary} />

            </View>
            <View style={styles.itemInViewTwo}>
                <Text style={styles.title}>{name}</Text>
            </View>
            <View style={styles.itemInViewThree}>
                <Text style={styles.detail}>เวลาที่เริ่ม</Text>
                <Text style={styles.title}>{time} น.</Text>

            </View>
            <View style={styles.itemInViewThree}>

                <Text style={styles.detail}>ระยะเวลาทำงาน</Text>
                <Text style={styles.title}> {duration} นาที</Text>
            </View>
        </View>
    );
    const renderItem = ({ item }) => (
        <Item name={item.name} time={item.time} duration={item.duration} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={listTime}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <View >
                <TouchableOpacity color={color.primary} onPress={() => navigation.navigate('SetTimeWater')} style={styles.submitButton}>
                    <View
                        style={{
                            backgroundColor: color.white,
                            width: 200,
                            padding: 5,
                            borderRadius: 10,
                            marginBottom: 20,
                            marginTop: 10,
                            alignContent: 'center',


                        }}>
                        <Text style={styles.labelButton}>Add Set Time</Text>
                    </View>

                </TouchableOpacity>
            </View>
        </SafeAreaView>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'

    },
    labelButton: {
        color: '#878787',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',

    },
    item: {
        width: windowWidth * 0.95,
        backgroundColor: color.white,
        padding: 10,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        flexDirection: 'row',
        marginVertical: 3,

    },
    itemInViewOne: {
        width: '20%',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'flex-start',
        borderRadius: 20,
        flexDirection: 'column',

    },
    itemInViewTwo: {
        width: '25%',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'flex-start',
        borderRadius: 20,
        flexDirection: 'column'
    },
    itemInViewThree: {
        width: '35%',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'flex-start',
        borderRadius: 20,
        flexDirection: 'column',
        paddingLeft: 20
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    detail: {
        fontSize: 16,
        fontWeight: 'normal'
    },
});