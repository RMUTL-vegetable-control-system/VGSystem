import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, FlatList, Alert, Image } from 'react-native'
import { Entypo, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from "react-redux"
import * as Action from '../../redux/Action'
import { bindActionCreators } from 'redux'
import { getDatabase, ref, onValue, set } from 'firebase/database';
import { FontAwesome } from '@expo/vector-icons';
import { Switch } from 'react-native-paper';
// import * as firebase from 'firebase';




const color = {
    primary: '#f2c97a',
    white: '#ffffff',
    gray: '#878787',
}

function Light({ navigation }) {
    let num1 = 0;
    let num2 = 0;
    // ส่วนไว้เช็คการเชื่อมต่อของServoถ้าเชื่อเเล้ว isConnect1 เป็น ture แล้วพื้นหลัง จะเปลี่ยนสี
    const [isConnect1, setIsConnect1] = useState(false);
    const [isConnect2, setIsConnect2] = useState(false);
    const [isConnect3, setIsConnect3] = useState(true);
    const [isConnect4, setIsConnect4] = useState(true);

    // สิ่งที่ต้องแสดง
    // ชื่อของ Farm
    //ชื่อหลอดไฟ
    //สถานะของหลอดไฟ ถ้าทีเป็นเขียว ไม่มีเป็นเทา
    //มีปุ่มใหญ่ๆด้านล่างไว้สำหรับ กรอกเวลาเปิดและปิดหลอดไฟได้ ลิงค์ไปหน้าเปล่าๆก่อน
    //ในแต่ละช่องของไฟให้กดได้ ถ้าเป็นสีเขียวให้กดแล้วเปลี่ยนค่าได้ ก็คือ เปลี่ยนแค่ตัวหนังสือ สีไม่ต้อง
    //แต่ถ้าเป็นสีเท่ากดเข้าไป ให้ลิงไปหน้าเพิ่มหลอดไฟได้ ทำหน้าเปล่าๆทิ้งไว้

    const [farmData, setFarmData] = useState([]);
    const [light_1_Data, setLight_1_Data] = useState([]);
    const [light_2_Data, setLight_2_Data] = useState([]);
    const [light_3_Data, setLight_3_Data] = useState([]);
    const [light_4_Data, setLight_4_Data] = useState([]);

    useEffect(() => {
        fetchData();
    }, [num1])

    function fetchData() {
        const db = getDatabase();
        let userId = 'user1'; // Edit To User ID 
        const reference = ref(db, 'user/' + userId);
        onValue(reference, (snapshot) => {
            setFarmData(snapshot.val().farm);
            setLight_1_Data(snapshot.val().farm.light.light1);
            setLight_2_Data(snapshot.val().farm.light.light2);
            setLight_3_Data(snapshot.val().farm.light.light3);
            setLight_4_Data(snapshot.val().farm.light.light4);
            setIsConnect1(snapshot.val().farm.light.light1.status);
            setIsConnect2(snapshot.val().farm.light.light2.status);
            setIsConnect3(snapshot.val().farm.light.light3.status);
            setIsConnect4(snapshot.val().farm.light.light4.status);

        })
    }

    function setSwitch(ID, status) {
        const db = getDatabase();
        let name, value;
        let userId = 'user1';
        let path = 'user/' + userId + '/farm/light/light' + ID;
        const reference = ref(db, path);
        if (ID === 1) {
            name = light_1_Data.name;
            value = light_1_Data.value;
        }
        if (ID === 2) {
            name = light_2_Data.name;
            value = light_2_Data.value;
        }
        if (ID === 3) {
            name = light_3_Data.name;
            value = light_3_Data.value;
        }
        if (ID === 4) {
            name = light_4_Data.name;
            value = light_4_Data.value;
        }
        console.log(value)
        if (status && value !== "timing") {
            value = 'on';
        } else if (!status && value !== "timing") {
            value = 'off'
        }

        set(reference, {
            name: name,
            status: status,
            value: value,
        });

    }



    const onToggleSwitch1 = () => setSwitch(1, !isConnect1);

    const onToggleSwitch2 = () => setSwitch(2, !isConnect2);

    const onToggleSwitch3 = () => setSwitch(3, !isConnect3);

    const onToggleSwitch4 = () => setSwitch(4, !isConnect4);



    return (


        <View style={styles.container}>


            <View>
                <View style={{ flexDirection: 'column', width: '100%', marginBottom: 0, alignItems: 'flex-start', paddingLeft: '5%' }} >

                    <Text style={{ fontSize: 25, textAlign: 'center', fontWeight: 'bold' }} >หน้าควบคุมหลอดไฟ</Text>
                    <Text style={{ fontSize: 18, textAlign: 'center', }} >Vegetable Control System</Text>
                    <Text style={{ fontSize: 18, textAlign: 'center', }} >ชื่อ:  {farmData.deviceName}</Text>
                </View>
                <View style={styles.containerAreaCard}>
                    <View style={{
                        justifyContent: 'center',
                        width: '45%',
                        height: 160,
                        backgroundColor: isConnect1 === true ? color.primary : color.gray,
                        borderRadius: 20,
                        margin: 10,
                    }}>
                        <View style={{ paddingLeft: '10%' }}>
                            <FontAwesome name="lightbulb-o" size={24} color="white" />
                        </View>
                        <View style={{ paddingLeft: '5%' }}>
                            <Text style={styles.label}>หลอดไฟดวงที่ 1 </Text>
                            <Text style={styles.label}>{light_1_Data.name}</Text>
                            <Switch value={isConnect1} onValueChange={onToggleSwitch1} color={'#008640'} style={{ width: '30%', }} />

                        </View>

                    </View>
                    <View style={{
                        justifyContent: 'center',
                        width: '45%',
                        height: 160,
                        backgroundColor: isConnect2 === true ? color.primary : color.gray,
                        borderRadius: 20,
                        margin: 10,
                    }}>
                        <View style={{ paddingLeft: '10%' }}>
                            <FontAwesome name="lightbulb-o" size={24} color="white" />
                        </View>
                        <View style={{ paddingLeft: '5%' }}>
                            <Text style={styles.label}>หลอดไฟดวงที่ 2 </Text>
                            <Text style={styles.label}>{light_2_Data.name}</Text>
                            <Switch value={isConnect2} onValueChange={onToggleSwitch2} color={'#008640'} style={{ width: '30%', }} />

                        </View>

                    </View>
                </View>
                <View style={styles.containerAreaCard}>
                    <View style={{
                        justifyContent: 'center',
                        width: '45%',
                        height: 160,
                        backgroundColor: isConnect3 === true ? color.primary : color.gray,
                        borderRadius: 20,
                        margin: 10,
                    }}>
                        <View style={{ paddingLeft: '10%' }}>
                            <FontAwesome name="lightbulb-o" size={24} color="white" />
                        </View>
                        <View style={{ paddingLeft: '5%' }}>
                            <Text style={styles.label}>หลอดไฟดวงที่ 3 </Text>
                            <Text style={styles.label}>{light_3_Data.name}</Text>
                            <Switch value={isConnect3} onValueChange={onToggleSwitch3} color={'#008640'} style={{ width: '30%', }} />

                        </View>

                    </View>
                    <View style={{
                        justifyContent: 'center',
                        width: '45%',
                        height: 160,
                        backgroundColor: isConnect4 === true ? color.primary : color.gray,
                        borderRadius: 20,
                        margin: 10,
                    }}>
                        <View style={{ paddingLeft: '10%' }}>
                            <FontAwesome name="lightbulb-o" size={24} color="white" />
                        </View>
                        <View style={{ paddingLeft: '5%' }}>
                            <Text style={styles.label}>หลอดไฟดวงที่ 4 </Text>
                            <Text style={styles.label}>{light_4_Data.name}</Text>
                            <Switch value={isConnect4} onValueChange={onToggleSwitch4} color={'#008640'} style={{ width: '30%', }} />

                        </View>

                    </View>
                </View>
            </View>

            <View>
                <TouchableOpacity color={color.primary} onPress={() => navigation.navigate('ListLight')} style={styles.submitButton}>
                    <View
                        style={{
                            backgroundColor: color.white,
                            width: '90%',
                            padding: 5,
                            borderRadius: 10,
                        }}>
                        <Text style={styles.labelButton}>ตั้งเวลา</Text>
                    </View>

                </TouchableOpacity>
            </View>

        </View >

    )
}

export default Light


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
