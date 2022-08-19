import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";

const color = {
  primary: '#80C5De',
  white: '#ffffff',
  gray: '#C4C4C4',
}

export default function SetTimeWater() {

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [time, setTime] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (time) => {
    setTime(time);
    hideDatePicker();
  };


  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.label}>{time}</Text>
        <Button title="Show Date Picker" onPress={showDatePicker} />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="time"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
    </View>
  )
}


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
    width: '100%',
    height: 60,
    backgroundColor: '#878787',
    borderRadius: 10,
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
    color: '#878787',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',

  },

})