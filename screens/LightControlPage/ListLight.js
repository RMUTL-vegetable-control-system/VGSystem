import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, Dimensions, Alert } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';
import { getDatabase, ref, onValue, set } from 'firebase/database';
import { Ionicons } from '@expo/vector-icons';
import Swipeout from 'react-native-swipeout';
import { FontAwesome } from '@expo/vector-icons';

const color = {
    primary: '#f2c97a',
    white: '#ffffff',
    gray: '#C4C4C4',
    green: '#1fd181',
}


const windowWidth = Dimensions.get('window').width;

export default function ListLight({ navigation }) {

    function deleteList(id) {
        setTimerID(timerID.splice(id, 1));
        setStartHour(startHour.splice(id, 1));
        setStartMinute(startMinute.splice(id, 1));
        setDuration(duration.splice(id, 1));
        const db = getDatabase();
        let userId = 'user1';
        let path = 'user/' + userId + '/farm/light/timer';
        const referenceTimerID = ref(db, path);
        set(referenceTimerID, {
            timerID: timerID,
            startHour: startHour,
            startMinute: startMinute,
            duration: duration,
        });
        console.log('Delete Pressed!');
        navigation.navigate('Menu');
    }

    const swipeoutBtns = (id) => [
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
                        { text: 'OK', onPress: () => deleteList(id) },
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
    const [isTiming1, setIsTiming1] = useState('');
    const [isTiming2, setIsTiming2] = useState('');
    const [isTiming3, setIsTiming3] = useState('');
    const [isTiming4, setIsTiming4] = useState('');
    // console.log(listTime)
    // console.log(listTime1)

    function setFormatListTime(timerID, startHour, startMinute, duration) {
        if (listTime[0] == undefined) {
            for (let i = 1; i < timerID.length; i++) {
                // setListtime('waterตัวที่ ' + timerID[i] + 'ทำงานเมื่อ' + startHour[i] + ':' + startMinute[i] + '   เป็นระยะเวลา : ' + duration[i]);
                let isTime;
                if (timerID[i] == '1') {
                    isTime = isTiming1;
                } else if (timerID[i] == '2') {
                    isTime = isTiming2;
                } else if (timerID[i] == '3') {
                    isTime = isTiming3;
                } else if (timerID[i] == '4') {
                    isTime = isTiming4;
                }

                listTime.push({ id: i, name: 'ไฟสังเคราะห์แสง : ' + timerID[i], time: (startHour[i] + ':' + startMinute[i]), duration: duration[i], isTime: isTime })
                // console.log(listTime)
                console.log('Setting Data row : ' + i);
            }
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

    setFormatListTime(timerID, startHour, startMinute, duration);


    async function fetchData() {
        const db = getDatabase();
        let userId = 'user1'; // Edit To User ID 
        const reference = ref(db, 'user/' + userId);
        onValue(reference, (snapshot) => {
            setTimerID(snapshot.val().farm.light.timer.timerID); // set เลขของ servo
            setStartHour(snapshot.val().farm.light.timer.startHour); // set เวลาที่เริ่มทำงาน ชั่วโฒง
            setStartMinute(snapshot.val().farm.light.timer.startMinute); // set เวลาที่เริ่มทำงาน นาที
            setDuration(snapshot.val().farm.light.timer.duration); // set ระยะเวลาที่ทำงาน
            setIsTiming1(snapshot.val().farm.light.light1.value);
            setIsTiming2(snapshot.val().farm.light.light2.value);
            setIsTiming3(snapshot.val().farm.light.light3.value);
            setIsTiming4(snapshot.val().farm.light.light4.value);
        })
    }

    const Item = ({ id, name, time, duration, isTime }) => (
        <View>
            <Swipeout right={swipeoutBtns(id)} backgroundColor={'#FFFFFF'} autoClose={true}>
                <View style={isTime == 'timing' ? styles.itemTiming : styles.item}>

                    <View style={styles.itemInViewOne}>

                        <FontAwesome name="lightbulb-o" size={40} color={'#fff'} />
                        <Text style={styles.detail}>{isTime == 'timing' ? 'กำลังทำงาน' : ''}</Text>

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
        <Item id={item.id} name={item.name} time={item.time} duration={item.duration} isTime={item.isTime} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={listTime}
                renderItem={(renderItem)}
                keyExtractor={item => item.id}
            />
            <View >
                <TouchableOpacity color={color.primary} onPress={() => navigation.navigate('SetTimeLight')} style={styles.submitButton}>
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
    itemTiming: {
        width: windowWidth * 0.95,
        backgroundColor: color.green,
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