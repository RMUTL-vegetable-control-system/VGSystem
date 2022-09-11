import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, FlatList, Alert, Image } from 'react-native'
import { Entypo, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from "react-redux"
import * as Action from '../../redux/Action'
import { bindActionCreators } from 'redux'
import { getDatabase, ref, onValue } from 'firebase/database';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
// import * as firebase from 'firebase';




const color = {
    primary: '#08823F',
    white: '#ffffff',
    gray: '#808080',
    red: '#FF4000',
    orange: '#FF7500',
    yellow: '#F7CF1D',
    skyblue: '#50cfff',

}

function Home({ navigation }) {

    // สิ่งที่ต้องแสดง
    // ชื่อของ Farm
    //ความชื้น
    //สถานะของ Farm ว่ามีสีอะไรแทนการทำงาน


    const [farmData, setFarmData] = useState([]);
    const [humidity, setHumidity] = useState([]);

    const valueHumatity = humidity.value;

    // if (valueHumatity >= 1000) {
    //     console.log('แห้งมาก');
    //     console.log(color.red);
    // }
    // else if (valueHumatity >= 980 && valueHumatity < 1000) {
    //     console.log('แห้ง')
    //     console.log(color.orange)
    // }
    // else if (valueHumatity >= 950 && valueHumatity < 980) {
    //     console.log('ชื้น')
    //     console.log(color.yellow)
    // }
    // else if (valueHumatity >= 850 && valueHumatity < 950) {
    //     console.log('เปียก')
    //     console.log(color.skyblue)
    // }
    // else {
    //     console.log('error')
    // }



    useEffect(() => {
        fetchData();
    }, [])

    function fetchData() {
        const db = getDatabase();
        let userId = 'user1'; // Edit To User ID 
        const reference = ref(db, 'user/' + userId);
        onValue(reference, (snapshot) => {
            setFarmData(snapshot.val().farm);
            setHumidity(snapshot.val().farm.humidity);
        })
    }





    return (

        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%',}}>
                <Image
                    source={require('../../assets/LogoApp.png')}
                    style={{ width: 50, height: 50, }}
                />

            </View>


            <View style={{ flexDirection: 'column', width: '100%', marginBottom: 0, alignItems: 'flex-start', paddingLeft: '5%' }} >

                <Text style={{ fontSize: 25, textAlign: 'center', fontWeight: 'bold' }} >หน้าแรก</Text>
                <Text style={{ fontSize: 18, textAlign: 'center', }} >Vegetable Control System</Text>
            </View>
            <View style={styles.containerAreaCard}>
                <View style={{
                    justifyContent: 'center',
                    width: '90%',
                    height: 150,
                    backgroundColor:
                        valueHumatity >= 1000 ? color.red
                            : valueHumatity >= 980 && valueHumatity < 1000 ? color.orange
                                : valueHumatity >= 950 && valueHumatity < 980 ? color.yellow
                                    : color.skyblue,
                    borderRadius: 10,
                    margin: 10,
                    borderWidth: 1,
                    borderColor: color.gray
                }}>
                    <View style={{ paddingLeft: '10%', }}>
                        <MaterialCommunityIcons name="coolant-temperature" size={35} color="white" />
                    </View>
                    <View style={{ paddingLeft: '5%' }}>
                        <Text style={styles.label}>Name  :  {humidity.name}</Text>
                        <Text style={styles.labelTemp}>ค่าความชื้นในดิน :  ~{humidity.value}</Text>
                        <Text style={styles.labelTemp}>~
                            {valueHumatity >= 1000 ? "แห้งมาก"
                                : valueHumatity >= 980 && valueHumatity < 1000 ? "แห้ง"
                                    : valueHumatity >= 950 && valueHumatity < 980 ? "ชื้น"
                                        : "เปียก"
                            }
                        </Text>
                    </View>

                </View>

            </View>

            <View style={styles.containerCardButton}>
                <TouchableOpacity color={color.primary} onPress={() => navigation.navigate('Edit')} style={styles.submitButton}>
                    <View
                        style={{
                            backgroundColor: '#2EACD2',
                            width: 150,
                            padding: 5,
                            borderRadius: 10,
                        }}>
                        <Text style={styles.labelButton}>แก้ไข</Text>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity color={color.primary} onPress={() => navigation.navigate('ListFertilizer')} style={styles.submitButton}>
                    <View
                        style={{
                            backgroundColor: '#eea944',
                            width: 150,
                            padding: 5,
                            borderRadius: 10,
                        }}>
                        <Text style={styles.labelButton}>การให้ปุ๋ย</Text>
                    </View>

                </TouchableOpacity>
            </View>

            <View style={styles.containerAreaCard}>
                <View style={styles.containerCardTop}>

                    <View style={{ paddingLeft: '5%' }}>
                        <Text style={styles.labelTempBlack}>ข้อมูลฟาร์ม</Text>
                        <Text style={styles.labelBlack}>ชื่อผักที่ปลูก   :   {humidity.name}</Text>
                        <Text style={styles.labelBlack}>วันที่ใส่ปุ๋ยครั้งล่าสุด  :  {farmData.deviceName}</Text>
                        <Text style={styles.labelBlack}>จำนวนวันในการปลูก  :  {farmData.deviceName}</Text>

                    </View>

                </View>

            </View>
            <View style={styles.containerAreaCard}>
                <View style={styles.containerCard}>

                    <View style={{ paddingLeft: '5%' }}>
                        <View style={{ flexDirection: 'row', paddingLeft: '5%' }}>
                            <FontAwesome5 name="envira" size={24} color="white" />
                            <Text style={styles.labelTemp}>วันที่รอเก็บเกี่ยว</Text>
                        </View>

                        <Text style={styles.label}>ชื่อผักที่ปลูก   :   {humidity.name}</Text>
                    </View>

                </View>

            </View>



        </View >
    )
}

export default Home



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        paddingTop: Platform.OS === 'ios' ? 50 : 10,
        marginBottom: 0,
        // justifyContent: 'space-around'

    },
    containerAreaCard: {
        justifyContent: 'space-around',
        width: '100%',
        flexDirection: 'row',
        paddingTop: 0

    },

    containerCardTop: {
        justifyContent: 'center',
        width: '90%',
        height: 150,
        backgroundColor: color.white,
        borderRadius: 10,
        margin: 10,
        borderWidth: 0.3,
        borderColor: color.gray

    },
    containerCard: {
        justifyContent: 'center',
        width: '90%',
        height: 100,
        backgroundColor: color.primary,
        borderRadius: 10,
        margin: 5,
        borderWidth: 1,
        borderColor: color.gray
    },
    containerCardButton: {
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 0
    },

    containerCardFalse: {
        justifyContent: 'center',
        width: '45%',
        height: 160,
        backgroundColor: '#878787',
        borderRadius: 10,
        margin: 10,

    },

    title: {
        color: color.white,
        fontSize: 18,
        fontWeight: 'bold'
    },
    titleHeader: {
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        width: '100%',
        height: '10%',


    },
    label: {
        color: color.white,
        marginTop: 10,
        fontSize: 18,
        textAlign: 'left',
        paddingLeft: '5%'
    },
    labelButton: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',

    },
    labelTemp: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'left',
        marginTop: 0,
        paddingLeft: '5%'
    },
    labelTempBlack: {
        color: '#000',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'left',
        marginTop: 0,
        paddingLeft: '5%'
    },
    labelBlack: {
        color: 'black',
        marginTop: 10,
        fontSize: 18,
        textAlign: 'left',
        paddingLeft: '5%'
    },

})