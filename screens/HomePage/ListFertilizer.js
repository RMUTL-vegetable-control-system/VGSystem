import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, Dimensions, Alert } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';
import { getDatabase, ref, onValue, set } from 'firebase/database';
import { Fontisto } from '@expo/vector-icons';
import Swipeout from 'react-native-swipeout';

const color = {
    primary: '#09C3DB',
    white: '#ffffff',
    gray: '#C4C4C4',
}


const windowWidth = Dimensions.get('window').width;

export default function ListFertilizer({ navigation }) {

    /**
     * It deletes the data from the database and then navigates to the Menu screen
     * @param id - the id of the list that is being deleted
     */
    function deleteList(id) {
        setTime(time.splice(id, 1));
        setDate(date.splice(id, 1));
        const db = getDatabase();
        let path = 'farm/fertilizer';
        const reference = ref(db, path);
        set(reference, {
            time: time,
            date: date,
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
    const [time, setTime] = useState([]);
    const [date, setDate] = useState([]);

    function setFormatListTime(date, time) {
        for (let i = 1; i < date.length; i++) {
            listTime.push({ id: i, date: date[i], time: time[i] })
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
    }, [date, time])

    async function fetchData() {
        const db = getDatabase();
        const reference = ref(db, 'farm');
        onValue(reference, (snapshot) => {
            setDate(snapshot.val().fertilizer.date);
            setTime(snapshot.val().fertilizer.time);
        })
    }
    setFormatListTime(date, time);
    console.log('')
    const Item = ({ id, date, time }) => (
        <View>
            <Swipeout right={swipeoutBtns(id)} backgroundColor={'#F2F2F2'} >
                <View style={styles.item}>
                    <View style={styles.itemInViewOne}>
                        <Fontisto name="date" size={30} color="white" />
                    </View>
                    <View style={styles.itemInViewTwo}>
                        <Text style={styles.detail}>เวลา</Text>
                        <Text style={styles.title}> {time}น.</Text>
                    </View>
                    <View style={styles.itemInViewThree}>
                        <Text style={styles.detail}>วันที่</Text>
                        <Text style={styles.title}>{date}</Text>
                    </View>

                </View>
            </Swipeout>
        </View>
    );
    const renderItem = ({ item }) => (
        <Item id={item.id} date={item.date} time={item.time} />
    );


    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={listTime}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <View >
                <TouchableOpacity color={color.primary} onPress={() => navigation.navigate('SetTimeFertilizer')} style={styles.submitButton}>
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
        backgroundColor: '#eea944',
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
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    detail: {
        fontSize: 16,
        fontWeight: 'normal',
        color: '#ffffff'
    },
});