import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Button, Input, TouchableOpacity, } from 'react-native'
import DatePicker from 'react-native-modern-datepicker';

const color = {
  primary: '#80C5De',
  white: '#ffffff',
  gray: '#C4C4C4',
}



export default function SetTimeFertilizer({ navigation }) {
  const [selectedDate, setSelectedDate] = useState('');

  //ตัวแปล dataDate คือวันที่ที่จะเอาไปใส่ในฐานข้อมูล
  
  


  //ตัวแปล dataTime คือเวลาที่จะเอาไปใส่ในฐานข้อมูล
  const myArray = selectedDate.split(" ");
  const dataDate = myArray[0];
  const dataTime = myArray[1];
  console.log(dataDate)
  console.log(dataTime)


  const saveDate = () => {
    navigation.navigate('Menu')
  };

  return (

    <View style={styles.container}>

      <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 }}>{dataDate}:{dataTime}</Text>

      <View style={styles.containerCardTimePicker} >
        <DatePicker
          mode="datepicker"
          onSelectedChange={date => setSelectedDate(date)}
        />
      </View>
      <View style={{ marginTop: 100 }}>
        <TouchableOpacity color={color.primary} onPress={() => saveDate()} style={styles.submitButton}>
          <View
            style={{
              backgroundColor: '#5cb85c',
              width: '90%',
              padding: 5,
              borderRadius: 10,
            }}>
            <Text style={styles.labelButton}>Confirm</Text>
          </View>

        </TouchableOpacity>
      </View>
    </View>

  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingTop: 30,
    marginBottom: 0,
  },
  containerCardTimePicker: {
    width: '100%',
    height: Platform.OS === 'ios' ? '45%' : '50%',
    backgroundColor: '#fff',

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
    textAlign: 'center',
    paddingLeft: '0%'
  },
  submitButton: {
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    width: '100%',

  },
  labelButton: {
    color: '#ffffff',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',

  },

})