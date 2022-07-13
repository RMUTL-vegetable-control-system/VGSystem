import { View, Text, StyleSheet, TouchableOpacity, Image, } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { TextInput } from 'react-native-paper';
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import * as FarmAction from '../redux/Action'




const ERR_MESSAGE_NAME = 'กรุณากรอกชื่อ'
const ERR_MESSAGE_DETAIL = 'กรุณากรอกนามสกุล'
const ERR_MESSAGE_DEVICE_ID = 'กรุณากรอกเลขบัตรประชาชน'
const ERR_MESSAGE_CHECK_DEVICE_ID = 'กรุณากรอกเลขบัตรประชาชนให้ถูกต้อง'
const ERR_MESSAGE_PIN_ID = 'กรุณากรอกเบอร์โทรศัพท์'
const ERR_MESSAGE_CHECK_PIN_ID = 'กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง'




const color = {
  primary: '#673ab7',
  white: '#ffffff',
  gray: '#C4C4C4',
}


function AddFarmForm({ route, navigation }) {

  const nameInput = useRef();
  const detailInput = useRef();
  const deviceIdInput = useRef();
  const pinIdInput = useRef();




  const [name, setName] = useState('');
  const [detail, setDetail] = useState('');
  const [deviceId, setDeviceId] = useState('');
  const deviceIdPatt = deviceId.replace(/\W/g, '');
  const [pinIdNumber, setPinIdNumber] = useState('');
  const pinIdNumberPatt = pinIdNumber.replace(/\W/g, '');
  const [isEditing, setIsEditing] = useState(false);

  const [isNameEdited, setIsNameEdited] = useState(false);
  const [isDetailEdited, setIsDetailEdited] = useState(false);
  const [isDeviceIdEdited, setIsDeviceIdEdited] = useState(false);
  const [isPinIdEdited, setIsPinIdEdited] = useState(false);

  const isName = name.length > 0
  const isDetail = detail.length > 0
  const isDeviceId = deviceId.length == 0
  const isDeviceIdCheck = deviceId.length > 0 && deviceId.length < 17
  const pattPassword = /1{13}|2{13}|3{13}|4{13}|5{13}|6{13}|7{13}|8{13}|9{13}|0{13}/
  const isPattPassword = pattPassword.test(deviceIdPatt);
  const isPinIdNumber = pinIdNumber.length == 0
  const isPinIdNumberCheck = pinIdNumber.length > 0 && pinIdNumber.length < 11
  const pattPinIdNumber = /1{10}|2{10}|3{10}|4{10}|5{10}|6{10}|7{10}|8{10}|9{10}|0{10}/
  const isPattPinIdNumber = pattPinIdNumber.test(pinIdNumberPatt);



  const canSubmit = isName && isDetail && !isDeviceId && !isPinIdNumber && !isDeviceIdCheck && !isPinIdNumberCheck && !isPattPassword && !isPattPinIdNumber



  const dispatch = useDispatch();
  const { addFarm, editFarm } = bindActionCreators(FarmAction, dispatch);



  const errorName = !isName && isNameEdited ? ERR_MESSAGE_NAME : ''
  const errorDetail = !isDetail && isDetailEdited ? ERR_MESSAGE_DETAIL : ''
  const errorID = isDeviceId && isDeviceIdEdited ? ERR_MESSAGE_DEVICE_ID : isDeviceIdCheck && isDeviceIdEdited ? ERR_MESSAGE_CHECK_DEVICE_ID : isPattPassword && isDeviceIdEdited ? ERR_MESSAGE_CHECK_DEVICE_ID : ''
  const errorPinId = isPinIdNumber && isPinIdEdited ? ERR_MESSAGE_PIN_ID : isPinIdNumberCheck && isPinIdEdited ? ERR_MESSAGE_CHECK_PIN_ID : isPattPinIdNumber && isPinIdEdited ? ERR_MESSAGE_CHECK_PIN_ID : ''


  useEffect(() => {
    if (route.params) {
      navigation.setOptions({ title: 'Edit Info Farm' });
      const { farm } = route.params;
      setIsEditing(true);
      setName(farm.name);
      setDetail(farm.detail);
      setDeviceId(farm.deviceIdPatt);
      setPinIdNumber(farm.pinIdNumberPatt);
    } else {
      navigation.setOptions({ title: 'Insert Farm' });
    }
  }, [])

  const onAddFarm = () => {
    addFarm({ name, detail, deviceIdPatt, pinIdNumberPatt });
    navigation.goBack();
  }

  const onEditFarm = () => {
    const { farm } = route.params
    editFarm({ name, detail, deviceIdPatt, pinIdNumberPatt, id: farm.id });
    navigation.goBack();
  }
  const onDeviceIdEditing = (deviceIdText) => {
    let text = (deviceIdText).replace(/\D/g, '');
    if (text.length >= 2) text = text.slice(0, 1) + '-' + text.slice(1);
    if (text.length >= 7) text = text.slice(0, 6) + '-' + text.slice(6);
    if (text.length >= 13) text = text.slice(0, 12) + '-' + text.slice(12);
    if (text.length >= 16) text = text.slice(0, 15) + '-' + text.slice(15);
    setDeviceId(text)
  }

  const onPinIdEditing = (pinIdText) => {
    let text = (pinIdText).replace(/\D/g, '');
    if (text.length >= 4) text = text.slice(0, 3) + '-' + text.slice(3);
    setPinIdNumber(text)
  }

  return (
    <View style={styles.container}>
      <TextInput
        ref={nameInput}
        value={name}
        onChangeText={setName}
        placeholder={'Name'}
        style={styles.input}
        returnKeyType='next'
        onSubmitEditing={() => detailInput.current.focus()}
        onEndEditing={() => setIsNameEdited(true)}
        activeUnderlineColor='#C4C4C4'

      />
      <Text style={styles.errMessage}>{errorName}</Text>

      <TextInput
        ref={detailInput}
        value={detail}
        onChangeText={setDetail}
        placeholder={'Detail'}
        style={styles.inputDetail}
        height={100}
        onEndEditing={() => setIsDetailEdited(true)}
        activeUnderlineColor='#C4C4C4'
        multiline={true}
      />
      <Text style={styles.errMessage}>{errorDetail}</Text>

      <TextInput
        ref={deviceIdInput}
        value={deviceId}
        onChangeText={onDeviceIdEditing}
        placeholder={'Device ID'}
        maxLength={17}
        style={styles.input}
        returnKeyType='next'
        keyboardType='numeric'
        onSubmitEditing={() => pinIdInput.current.focus()}
        onEndEditing={() => setIsDeviceIdEdited(true)}
        activeUnderlineColor='#C4C4C4'
      />
      <Text style={styles.errMessage}>{errorID}</Text>


      <TextInput
        ref={pinIdInput}
        value={pinIdNumber}
        onChangeText={onPinIdEditing}
        placeholder={'PIN ID'}
        maxLength={11}
        style={styles.input}
        keyboardType='phone-pad'
        returnKeyType='done'
        onEndEditing={() => setIsPinIdEdited(true)}
        activeUnderlineColor='#C4C4C4'
      />
      <Text style={styles.errMessage}>{errorPinId}</Text>
      <TouchableOpacity disabled={!canSubmit} onPress={isEditing ? onEditFarm : onAddFarm} style={styles.submitButton(!canSubmit)}>
        <Text style={styles.submitButtonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  )
}
export default AddFarmForm

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '10%',
    backgroundColor: "#ffffff"
  },
  input: {
    height: 44,
    padding: 0,
    marginBottom: 10,
    backgroundColor: '#ffffff'
  },
  inputDetail: {
    height: 100,
    padding: 0,
    marginBottom: 10,
    backgroundColor: '#ffffff'
  },
  submitButton: (disable) => {
    return {
      backgroundColor: disable ? color.gray : color.primary,
      padding: 12,
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20
    }
  },
  submitButtonText: {
    color: '#ffffff',
  },
  errMessage: {
    fontSize: 14,
    color: 'red',
  }
})