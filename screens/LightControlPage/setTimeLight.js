import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Button, Input, TouchableOpacity, } from 'react-native'
import { TextInput, } from 'react-native-paper';
import { TimePicker, } from 'react-native-simple-time-picker';
import SelectDropdown from 'react-native-select-dropdown'

const color = {
  primary: '#80C5De',
  white: '#ffffff',
  gray: '#C4C4C4',
}



export default function SetTimeLight({navigation}) {
  const countries = ["Servo1", "Servo2", "Servo3", "Servo4"]

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const handleChange = (value = { hours, minutes }) => {
    setHours(value.hours);
    setMinutes(value.minutes);
  };

  const saveTimeLight = () => {
    navigation.navigate('Menu')
  };

  return (

    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>เลือกเครื่องServoเปิดไฟ</Text>
      <View style={styles.containerServo}>
        <SelectDropdown
          data={countries}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index)
          }}
          buttonStyle={{
            backgroundColor: 'white',
            width: '100%'
          }}
          dropdownStyle={{
            backgroundColor: 'white',
            width: '95%',
            fontSize: 18,
            fontWeight: 'bold'
          }}
          defaultButtonText={'เลือกServo'}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            return item
          }}
        />
      </View>

      <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}>เวลาที่เริ่ม</Text>
      <Text style={{ marginBottom: Platform.OS === 'ios' ? 50 : 40, fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}>{hours}:{minutes}น.</Text>

      <View style={styles.containerCardTimePicker} >
        <TimePicker
          value={{ hours, minutes }}
          onChange={handleChange}
          textColor={'#000000'}
          width={'50%'}


        />
      </View>
      <Text style={{ marginTop: 20, fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}>จำนวนเวลา/นาที</Text>

      <View style={styles.containerAreaCard}>
        <TextInput
          style={{ height: 60, width: '50%', marginTop: 0, textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}
          selectionColor="#08823F"
          activeUnderlineColor='#08823F'
          maxLength={4}
          keyboardType='number-pad'
          returnKeyType='done'


        />
      </View>
      <View style={{ marginTop: 50 }}>
        <TouchableOpacity color={color.primary} onPress={() =>saveTimeLight()} style={styles.submitButton}>
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
  containerServo: {
    justifyContent: 'center',
    margin: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      height: 0.5,
      width: 0.4
    }
  },

  containerAreaCard: {
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
  },

  containerCardTimePicker: {
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    height: Platform.OS === 'ios' ? 120 : 60,
    backgroundColor: '#fff',
    borderRadius: 0,
    marginBottom: 30,


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