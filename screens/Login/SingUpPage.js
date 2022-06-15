import { useState, useRef } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function SingUpPage({ navigation }) {

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfrimPassword, setConfrimPassword] = useState("");

  const refEmail = useRef();
  const refPassword = useRef();
  const refConfrimPassword = useRef();


  return (
    <View style={styles.container}>



      <View style={styles.containerTop}>
        <Image
          source={require('../../assets/Logo.png')}
          style={{ width: 150, height: 150, }}
        />
        <Text style={styles.Topic}>Create a new account</Text>
      </View>



      <View style={styles.containerInput}>
        <View>
          <TextInput
            label="Email"
            value={Email}
            returnKeyType="next"
            ref={refEmail}
            onSubmitEditing={() => refPassword.current.focus()}
            onChangeText={Email => setEmail(Email)}
            style={{ height: 60 }}
            selectionColor="#08823F"
            activeUnderlineColor='#08823F'

          />
        </View>
        <View>
          <TextInput
            label="Password"
            value={Password}
            secureTextEntry={true}
            returnKeyType="next"
            ref={refPassword}
            onSubmitEditing={() => refConfrimPassword.current.focus()}
            onChangeText={Password => setPassword(Password)}
            style={{ height: 60, marginTop: 10 }}
            selectionColor="#08823F"
            activeUnderlineColor='#08823F'
          />
        </View>
        <View>
          <TextInput
            label="Confrim Password"
            value={ConfrimPassword}
            secureTextEntry={true}
            returnKeyType="done"
            ref={refConfrimPassword}
            onChangeText={ConfrimPassword => ConfrimPassword(setConfrimPassword)}
            style={{ height: 60, marginTop: 10 }}
            selectionColor="#08823F"
            activeUnderlineColor='#08823F'
          />
        </View>


        <View style={{ marginTop: 80 }}>
          <Button mode="contained" color='#08823F' onPress={() => navigation.navigate('Login')}>
            <Text style={styles.Topic}>SING UP</Text>
          </Button>
        </View>


      </View>

      <View style={{ marginTop: 250, }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.signUp}>Already i have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.forgetPassword}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View >
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  containerTop: {
    alignItems: 'center',
    justifyContent: 'center',

  },
  containerInput: {
    width: '85%',
    height: 170,
    paddingTop: 20,
    justifyContent: 'space-between',

  },
  Topic: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  TopicDetail: {
    fontSize: 18,
    fontWeight: 'normal'
  },
  forgetPassword: {
    fontSize: 15,
    fontWeight: 'normal',
    color: '#08823F',
  },
  signUp: {
    fontSize: 15,
    fontWeight: 'normal',
    color: '#000000',
  },
});