import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Button, Input,TouchableOpacity } from 'react-native'
import { TextInput, } from 'react-native-paper';

const color = {
  primary: '#80C5De',
  white: '#ffffff',
  gray: '#C4C4C4',
}

export default function SetTimeWater() {




  return (
    <View style={styles.container}>
      <Text style={{ marginTop: 20, fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}>เวลา</Text>
      <View style={styles.containerAreaCard}>
        <TextInput
          style={{ height: 60, width: 60, marginTop: 10, textAlign: 'center' }}
          selectionColor="#08823F"
          activeUnderlineColor='#08823F'
          maxLength={2}
          keyboardType='number-pad'

        />
        <Text style={{ marginTop: 20, fontSize: 30, fontWeight: 'bold' }}> : </Text>
        <TextInput
          style={{ height: 60, width: 60, marginTop: 10, textAlign: 'center' }}
          selectionColor="#08823F"
          activeUnderlineColor='#08823F'
          maxLength={2}
          keyboardType='number-pad'
        />
      </View>
      <Text style={{ marginTop: 20, fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}>จำนวนเวลา/นาที</Text>
      <View style={styles.containerAreaCard}>
        <TextInput
          style={{ height: 60, width: 120, marginTop: 10, textAlign: 'center' }}
          selectionColor="#08823F"
          activeUnderlineColor='#08823F'
          maxLength={4}
          keyboardType='number-pad'

        />
      </View>
      <View style={{marginTop:50}}>
                <TouchableOpacity color={color.primary} onPress={() => navigation.navigate('SetTimeWater')} style={styles.submitButton}>
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
    paddingTop: 80,
    marginBottom: 0,


  },
  containerAreaCard: {
    justifyContent: 'center',
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
    color: '#ffffff',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',

  },

})