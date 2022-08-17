import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, FlatList, Alert, Image } from 'react-native'
import { Entypo, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from "react-redux"
import * as Action from '../../redux/Action'
import { bindActionCreators } from 'redux'
import { getDatabase, ref, onValue } from 'firebase/database';

// import * as firebase from 'firebase';




const color = {
    primary: '#08823F',
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

    return (
        <View style={styles.container}>
            <Text>List Of Display</Text>
            <Text> ชื่อ:{farmData.deviceName}</Text>
            <Text>คุมน้ำตัวที่ 1 : {water_1_Data.name}</Text>
            <Text>คุมน้ำตัวที่ 2 : {water_2_Data.name}</Text>
            <Text>คุมน้ำตัวที่ 3 : {water_3_Data.name}</Text>
            <Text>คุมน้ำตัวที่ 4 : {water_4_Data.name}</Text>
        </View >
    )
}

export default Water


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 60,
        marginBottom: 0

    },
    emptyContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Dimensions.get('screen').width / 6,
    },
    addFirstButton: {
        backgroundColor: '#08823F',
        padding: 12,
        borderRadius: 4,
        width: 150
    },
    addFirstButtonText: {
        color: '#ffffff',
        textAlign: 'center'
    },
    addButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        marginHorizontal: 12,
        marginVertical: 6,
        padding: 12,
        borderWidth: 1,
        borderColor: '#08823F',
    },
    containerFarm: {
        width: '94%',
        flexDirection: 'row',
        padding: 12,
        marginHorizontal: 12,
        marginVertical: 6,
        backgroundColor: color.primary,
        borderRadius: 4,
    },
    wrapContent: {
        flex: 1
    },
    wrapIcon: {
        justifyContent: 'space-between'
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
        fontSize: 16
    }

})
