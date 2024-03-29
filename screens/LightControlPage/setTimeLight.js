import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native'
import { TextInput, } from 'react-native-paper';
import { TimePicker, } from 'react-native-simple-time-picker';
import SelectDropdown from 'react-native-select-dropdown'
import { getDatabase, ref, onValue, set } from 'firebase/database';

const color = {
  primary: '#80C5De',
  white: '#ffffff',
  gray: '#C4C4C4',
}


export default function SetTimeLight({ navigation }) {
  const countries = ["ไฟสังเคราะห์แสง1", "ไฟสังเคาระห์แสง2", "ไฟสังเคราะแสง3", "ไฟสังเคราะห์แสง4"]
  //ตัวแปรทั้ง4
  const [valueLight, setValueLight] = useState('');
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [valueTime, setValueTime] = useState(0);

  const [timerID, setTimerID] = useState([]);
  const [startHour, setStartHour] = useState([]);
  const [startMinute, setStartMinute] = useState([]);
  const [duration, setDuration] = useState([]);

  useEffect(() => {
    console.log('Fetching Data...');
    fetchData();
    console.log('Fetch Data Done')

  }, [])


  function fetchData() {
    const db = getDatabase();
    const reference = ref(db, 'farm');
    onValue(reference, (snapshot) => {
      setTimerID(snapshot.val().light.timer.timerID);
      setStartHour(snapshot.val().light.timer.startHour);
      setStartMinute(snapshot.val().light.timer.startMinute);
      setDuration(snapshot.val().light.timer.duration);
    })
  }

  const handleChange = (value = { hours, minutes }) => {
    setHours(value.hours);
    setMinutes(value.minutes);
  };

  const saveTimeLight = () => {
    console.log(valueLight);
    console.log(hours);
    console.log(minutes);
    console.log(valueTime);
    timerID.push(valueLight);
    startHour.push(hours);
    startMinute.push(minutes);
    duration.push(valueTime);
    const db = getDatabase();
    const path = 'farm/light/timer';
    const referenceTimerID = ref(db, path);
    set(referenceTimerID, {
      timerID: timerID,
      startHour: startHour,
      startMinute: startMinute,
      duration: duration,
    });
    navigation.navigate('ListLight')
  };

  return (

    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>เลือกไฟสังเคราะห์แสง</Text>
      <View style={styles.containerServo}>
        <SelectDropdown
          data={countries}
          onSelect={(selectedItem, index) => {
            setValueLight(index + 1);
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
          defaultButtonText={'กรุณาเลือก'}
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
      <Text style={{ marginTop: 10, fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}>จำนวนเวลา/นาที</Text>
      <View style={styles.containerAreaCard}>
        <TextInput
          style={{ height: 60, width: '50%', marginTop: 0, textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}
          selectionColor="#08823F"
          activeUnderlineColor='#08823F'
          maxLength={4}
          onChangeText={valueTime => setValueTime(valueTime)}
          value={valueTime}
          keyboardType='number-pad'
          returnKeyType='done'


        />
      </View>
      <View style={{ marginTop: 100 }}>
        <TouchableOpacity color={color.primary} onPress={() => saveTimeLight()} style={styles.submitButton}>
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
    paddingTop: 10,
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