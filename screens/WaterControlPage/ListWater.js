import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, Dimensions, Alert } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { Ionicons } from '@expo/vector-icons';
import Swipeout from 'react-native-swipeout';

const color = {
    primary: '#09C3DB',
    white: '#ffffff',
    gray: '#C4C4C4',
}


const windowWidth = Dimensions.get('window').width;

export default function ListWater({ navigation }) {



    var swipeoutBtns = [
        {
            text: 'ลบ',
            color: 'white',
            backgroundColor: 'red',
            // onPress: () => { navigation.navigate('SetTimeWater') },
            onPress: () => {
                Alert.alert(
                    'ยืนยันต้องการลบ',
                    'alertMessage',
                    [
                        { text: 'Cancel', onPress: () => console.log('Cancel Pressed!') },
                        { text: 'OK', onPress: () => navigation.navigate('Menu') },

                    ],
                    { cancelable: false }
                )
            }
        },


    ]


    const [listTime, setListTime] = useState([]);
    const [timerID, setTimerID] = useState([]);
    const [startHour, setStartHour] = useState([]);
    const [startMinute, setStartMinute] = useState([]);
    const [duration, setDuration] = useState([]);
    // console.log(listTime)
    // console.log(listTime1)

    function setFormatListTime(timerID, startHour, startMinute, duration) {
        for (let i = 0; i < timerID.length; i++) {
            // setListtime('waterตัวที่ ' + timerID[i] + 'ทำงานเมื่อ' + startHour[i] + ':' + startMinute[i] + '   เป็นระยะเวลา : ' + duration[i]);
            listTime.push({ id: i, name: 'วาล์วน้ำ :  ' + timerID[i], time: (startHour[i] + ':' + startMinute[i]), duration: duration[i] })
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
    }, [timerID, startHour, startHour, duration])

    async function fetchData() {
        const db = getDatabase();
        let userId = 'user1'; // Edit To User ID 
        const reference = ref(db, 'user/' + userId);
        onValue(reference, (snapshot) => {
            setTimerID(snapshot.val().farm.servo.timer.timerID); // set เลขของ servo
            setStartHour(snapshot.val().farm.servo.timer.startHour); // set เวลาที่เริ่มทำงาน ชั่วโฒง
            setStartMinute(snapshot.val().farm.servo.timer.startMinute); // set เวลาที่เริ่มทำงาน นาที
            setDuration(snapshot.val().farm.servo.timer.duration); // set ระยะเวลาที่ทำงาน
        })
    }
    setFormatListTime(timerID, startHour, startMinute, duration);
    console.log('')
    const Item = ({ name, time, duration }) => (
        <View>
            <Swipeout right={swipeoutBtns} backgroundColor={'#F2F2F2'} >
                <View style={styles.item}>

                    <View style={styles.itemInViewOne}>

                        <Ionicons name="md-timer" size={45} color={'#fff'} />

                    </View>
                    <View style={styles.itemInViewTwo}>
                        <Text style={styles.detail}>ชื่อ</Text>
                        <Text style={styles.detail}>{name}</Text>
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
            </Swipeout>
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
                        <Text style={styles.labelButton}>เพิ่มตั้งค่าเวลา</Text>
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
    containerItem: {
        width: windowWidth * 0.95,
        backgroundColor: color.primary,
        padding: 15,
        marginVertical: 5,


    },
    item: {
        width: windowWidth * 0.95,
        backgroundColor: color.primary,
        padding: 15,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 0,
        flexDirection: 'row',
        marginVertical: 5,


    },
    itemInViewOne: {
        width: '15%',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'column',


    },
    itemInViewTwo: {
        width: '25%',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        flexDirection: 'column',
        paddingLeft: 20
    },
    itemInViewThree: {
        width: '35%',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        flexDirection: 'column',
        paddingLeft: 20
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    detail: {
        fontSize: 13,
        fontWeight: 'normal',
        color: '#ffffff'
    },
});