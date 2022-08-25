import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, FlatList, Alert, Image } from 'react-native'
import { Entypo, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from "react-redux"
import * as Action from '../../redux/Action'
import { bindActionCreators } from 'redux'
import { getDatabase, ref, onValue } from 'firebase/database';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Switch } from 'react-native-paper';
// import * as firebase from 'firebase';




const color = {
    primary: '#3DC4F1',
    white: '#ffffff',
    gray: '#C4C4C4',
}

function Water({ navigation }) {

    // สิ่งที่ต้องแสดง
    // ชื่อของ Farm
    //ชื่อมอเตอร์
    //สถานะของมอเตอร์ ถ้าทีเป็นเขียว ไม่มีเป็นเทา
    //มีปุ่มใหญ่ๆด้านล่างไว้สำหรับ กรอกเวลาเปิดและปิดมอเตอร์ได้ ลิงค์ไปหน้าเปล่าๆก่อน
    //ในแต่ละช่องของมอเตอร์ให้กดได้ ถ้าเป็นสีเขียวให้กดแล้วเปลี่ยนค่าได้ ก็คือ เปลี่ยนแค่ตัวหนังสือ สีไม่ต้อง
    //แต่ถ้าเป็นสีเท่ากดเข้าไป ให้ลิงไปหน้าเพิ่มมอเตอร์ได้ ทำหน้าเปล่าๆทิ้งไว้

    const [farmData, setFarmData] = useState([]);
    const [water_1_Data, setWater_1_Data] = useState([]);
    const [water_2_Data, setWater_2_Data] = useState([]);
    const [water_3_Data, setWater_3_Data] = useState([]);
    const [water_4_Data, setWater_4_Data] = useState([]);


    useEffect(() => {
        fetchData();
    }, [])

    function fetchData() {
        const db = getDatabase();
        let userId = 'user1'; // Edit To User ID 
        const reference = ref(db, 'user/' + userId);
        onValue(reference, (snapshot) => {
            setFarmData(snapshot.val().farm);
            setWater_1_Data(snapshot.val().farm.servo.servo1);
            setWater_2_Data(snapshot.val().farm.servo.servo2);
            setWater_3_Data(snapshot.val().farm.servo.servo3);
            setWater_4_Data(snapshot.val().farm.servo.servo4);
        })
    }


    const [isSwitchOnServo1, setIsSwitchOnServo1] = useState(false);
    const onToggleSwitch1 = () => setIsSwitchOnServo1(!isSwitchOnServo1);

    const [isSwitchOnServo2, setIsSwitchOnServo2] = useState(false);
    const onToggleSwitch2 = () => setIsSwitchOnServo2(!isSwitchOnServo2);

    const [isSwitchOnServo3, setIsSwitchOnServo3] = useState(false);
    const onToggleSwitch3 = () => setIsSwitchOnServo3(!isSwitchOnServo3);

    const [isSwitchOnServo4, setIsSwitchOnServo4] = useState(false);
    const onToggleSwitch4 = () => setIsSwitchOnServo4(!isSwitchOnServo4);

    return (

        <View style={styles.container}>


            <View>
                <View style={{ flexDirection: 'column', width: '100%', marginBottom: 0, alignItems: 'flex-start', paddingLeft: '5%' }} >

                    <Text style={{ fontSize: 25, textAlign: 'center', fontWeight: 'bold' }} >Light</Text>
                    <Text style={{ fontSize: 18, textAlign: 'center', }} >Vegetable Control System</Text>
                    <Text style={{ fontSize: 18, textAlign: 'center', }} >Name:  {farmData.deviceName}</Text>
                </View>
                <View style={styles.containerAreaCard}>
                    <View style={styles.containerCard}>
                        <View style={{ paddingLeft: '10%' }}>
                            <MaterialCommunityIcons name="watering-can" size={24} color="white" />
                        </View>
                        <View style={{ paddingLeft: '5%' }}>
                            <Text style={styles.label}>คุมน้ำตัวที่ 1 :  </Text>
                            <Text style={styles.label}>{water_1_Data.name}</Text>
                            <Switch value={isSwitchOnServo1} onValueChange={onToggleSwitch1} color={'#008640'} style={{ width: '30%', }} />
                        </View>

                    </View>
                    <View style={styles.containerCardFalse}>
                        <View style={{ paddingLeft: '10%' }}>
                            <MaterialCommunityIcons name="watering-can" size={24} color="white" />
                        </View>
                        <View style={{ paddingLeft: '5%' }}>
                            <Text style={styles.label}>คุมน้ำตัวที่ 2 :  </Text>
                            <Text style={styles.label}>{water_2_Data.name}</Text>
                            <Switch value={isSwitchOnServo2} onValueChange={onToggleSwitch2} color={'#008640'} style={{ width: '30%', }} />
                        </View>

                    </View>
                </View>
                <View style={styles.containerAreaCard}>
                    <View style={styles.containerCard}>
                        <View style={{ paddingLeft: '10%' }}>
                            <MaterialCommunityIcons name="watering-can" size={24} color="white" />
                        </View>
                        <View style={{ paddingLeft: '5%' }}>
                            <Text style={styles.label}>คุมน้ำตัวที่ 3 :  </Text>
                            <Text style={styles.label}>{water_3_Data.name}</Text>
                            <Switch value={isSwitchOnServo3} onValueChange={onToggleSwitch3} color={'#008640'} style={{ width: '30%', }} />
                        </View>

                    </View>
                    <View style={styles.containerCardFalse}>
                        <View style={{ paddingLeft: '10%' }}>
                            <MaterialCommunityIcons name="watering-can" size={24} color="white" />
                        </View>
                        <View style={{ paddingLeft: '5%' }}>
                            <Text style={styles.label}>คุมน้ำตัวที่ 4 :  </Text>
                            <Text style={styles.label}>{water_4_Data.name}</Text>
                            <Switch value={isSwitchOnServo4} onValueChange={onToggleSwitch4} color={'#008640'} style={{ width: '30%', }} />
                        </View>

                    </View>
                </View>
            </View>

            <View>
                <TouchableOpacity color={color.primary} onPress={() => navigation.navigate('ListWater')} style={styles.submitButton}>
                    <View
                        style={{
                            backgroundColor: color.white,
                            width: '90%',
                            padding: 5,
                            borderRadius: 10,
                        }}>
                        <Text style={styles.labelButton}>Set Time</Text>
                    </View>

                </TouchableOpacity>
            </View>

        </View >
    )
}

export default Water


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        paddingTop: 0,
        marginBottom: 0,
        justifyContent: 'space-around'

    },
    containerAreaCard: {
        justifyContent: 'space-around',
        width: '100%',
        flexDirection: 'row'
    },
    containerCard: {
        justifyContent: 'center',
        width: '45%',
        height: 160,
        backgroundColor: color.primary,
        borderRadius: 20,
        margin: 10,

    },
    containerCardFalse: {
        justifyContent: 'center',
        width: '45%',
        height: 160,
        backgroundColor: '#878787',
        borderRadius: 20,
        margin: 10,

    },

    title: {
        color: color.white,
        fontSize: 20,
        fontWeight: 'bold'
    },
    titleHeader: {
        color: '#000000',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        width: '100%',
        height: '10%',


    },
    label: {
        color: color.white,
        marginTop: 4,
        fontSize: 18,
        textAlign: 'left',
        paddingLeft: '5%'
    },
    submitButton: {
        padding: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2,
        width: '100%',

    },
    labelButton: {
        color: '#878787',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',

    },

})

