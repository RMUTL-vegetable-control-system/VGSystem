import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, FlatList, Alert, Image } from 'react-native'
import { Entypo, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from "react-redux"
import * as Action from '../../redux/Action'
import { bindActionCreators } from 'redux'
import { getDatabase, ref, onValue } from 'firebase/database';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import * as firebase from 'firebase';




const color = {
    primary: '#08823F',
    white: '#ffffff',
    gray: '#C4C4C4',
}

function Home({ navigation }) {

    // สิ่งที่ต้องแสดง
    // ชื่อของ Farm
    //ความชื้น
    //สถานะของ Farm ว่ามีสีอะไรแทนการทำงาน

    const [farmData, setFarmData] = useState([]);
    const [humidity, setHumidity] = useState([]);

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



            <View style={{ flexDirection: 'column', width: '100%', marginBottom: 0, alignItems: 'flex-start', paddingLeft: '5%' }} >

                <Text style={{ fontSize: 25, textAlign: 'center', fontWeight: 'bold' }} >HOME</Text>
                <Text style={{ fontSize: 18, textAlign: 'center', }} >Vegetable Control System</Text>
            </View>
            <View style={styles.containerAreaCard}>
                <View style={styles.containerCard}>
                    <View style={{ paddingLeft: '10%', }}>
                        <MaterialCommunityIcons name="coolant-temperature" size={44} color="white" />
                    </View>
                    <View style={{ paddingLeft: '5%' }}>
                        <Text style={styles.label}>List Of Display</Text>
                        <Text style={styles.label}>Name  :  {farmData.deviceName}</Text>
                        <Text style={styles.labelTemp}>Temp   :   {humidity.name}</Text>
                    </View>

                </View>

            </View>

            <View style={styles.containerCardButton}>
                <TouchableOpacity color={color.primary} onPress={() => navigation.navigate('ListWater')} style={styles.submitButton}>
                    <View
                        style={{
                            backgroundColor: '#2EACD2',
                            width: 150,
                            padding: 5,
                            borderRadius: 10,
                        }}>
                        <Text style={styles.labelButton}>Edit</Text>
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
                        <Text style={styles.labelButton}>Fertilizer</Text>
                    </View>

                </TouchableOpacity>
            </View>

            <View style={styles.containerAreaCard}>
                <View style={styles.containerCard}>

                    <View style={{ paddingLeft: '5%' }}>
                        <Text style={styles.labelTemp}>Detail Farm</Text>
                        <Text style={styles.labelTemp}>Temp   :   {humidity.name}</Text>
                        <Text style={styles.label}>List Of Display</Text>
                        <Text style={styles.label}>Name  :  {farmData.deviceName}</Text>

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
        paddingTop: 20
    },
    containerCard: {
        justifyContent: 'center',
        width: '90%',
        height: 180,
        backgroundColor: color.primary,
        borderRadius: 20,
        margin: 10,
    },
    containerCardButton: {
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 20
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

})