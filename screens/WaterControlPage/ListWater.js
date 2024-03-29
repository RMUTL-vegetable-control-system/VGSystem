import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, Dimensions, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getDatabase, ref, onValue, set } from 'firebase/database';
import { Ionicons } from '@expo/vector-icons';
import Swipeout from 'react-native-swipeout';

const color = {
    primary: '#09C3DB',
    white: '#ffffff',
    gray: '#C4C4C4',
    green: '#1fd181',
}

const windowWidth = Dimensions.get('window').width;

export default function ListWater({ navigation }) {

    function deleteList(id) {
        setTimerID(timerID.splice(id, 1));
        setStartHour(startHour.splice(id, 1));
        setStartMinute(startMinute.splice(id, 1));
        setDuration(duration.splice(id, 1));
        const db = getDatabase();
        let path = 'farm/servo/timer';
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


    function setFormatListTime(timerID, startHour, startMinute, duration) {
        if (!listTime[0]) {
            for (let i = 1; i < timerID.length; i++) {
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
                listTime.push({ id: i, name: 'วาล์วน้ำ :  ' + timerID[i], time: (startHour[i] + ':' + startMinute[i]), duration: duration[i], isTime: isTime })
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

    async function fetchData() {
        const db = getDatabase();
        const reference = ref(db, 'farm');
        onValue(reference, (snapshot) => {
            setTimerID(snapshot.val().servo.timer.timerID);
            setStartHour(snapshot.val().servo.timer.startHour);
            setStartMinute(snapshot.val().servo.timer.startMinute);
            setDuration(snapshot.val().servo.timer.duration);
            setIsTiming2(snapshot.val().servo.servo2.value);
            setIsTiming3(snapshot.val().servo.servo3.value);
            setIsTiming4(snapshot.val().servo.servo4.value);
        })
    }
    setFormatListTime(timerID, startHour, startMinute, duration);
    console.log('')
    const Item = ({ id, name, time, duration, isTime }) => (
        <View>
            <Swipeout right={swipeoutBtns(id)} backgroundColor={'#F2F2F2'} >
                <View style={isTime == 'timing' ? styles.itemTiming : styles.item}>

                    <View style={styles.itemInViewOne}>

                        <Ionicons name="md-timer" size={45} color={'#fff'} />
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
        <Item name={item.name} time={item.time} duration={item.duration} isTime={item.isTime} />
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