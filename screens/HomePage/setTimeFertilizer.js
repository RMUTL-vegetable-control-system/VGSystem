import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native'
import { getDatabase, ref, onValue, set } from 'firebase/database';
import DatePicker from 'react-native-modern-datepicker';

const color = {
  primary: '#80C5De',
  white: '#ffffff',
  gray: '#C4C4C4',
}



export default function SetTimeFertilizer({ navigation }) {
  const [selectedDate, setSelectedDate] = useState('');
  const [time, setTime] = useState([]);
  const [date, setDate] = useState([]);

  async function fetchData() {
    const db = getDatabase();
    const reference = ref(db, 'farm');
    onValue(reference, (snapshot) => {
      setDate(snapshot.val().fertilizer.date);
      setTime(snapshot.val().fertilizer.time);
    })
  }

  useEffect(() => {
    console.log('Fetching Data...');
    fetchData();
    console.log('Fetch Data Done')

  }, [])

  const myArray = selectedDate.split(" ");
  const dataDate = myArray[0];
  const dataTime = myArray[1];
  console.log(dataDate)
  console.log(dataTime)


  const saveDate = () => {
    date.push(dataDate);
    time.push(dataTime);
    const db = getDatabase();
    let path = 'farm/fertilizer';
    const referenceTimerID = ref(db, path);
    set(referenceTimerID, {
      date: date,
      time: time,
    });
    navigation.navigate('ListFertilizer');
  };

  return (

    <View style={styles.container}>

      <Text style={{ fontSize: 30, textAlign: 'center', marginBottom: 20 }}>วันที่ : {dataDate} เวลา : {dataTime}</Text>

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
            <Text style={styles.labelButton}>ยืนยัน</Text>
          </View>

        </TouchableOpacity>
      </View>
    </View >

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