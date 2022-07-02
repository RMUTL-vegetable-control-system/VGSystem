import { useRef, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const ERR_MESSAGE_EMAIL = 'กรุณากรอกอีเมล์'
const ERR_MESSAGE_EMAIL_PATT = 'กรุณากรอกอีเมล์ให้ถูกต้อง'
const ERR_MESSAGE_PASSWORD = 'กรุณากรอกรหัสผ่าน'
const ERR_MESSAGE_PASSWORD_PATT = 'กรุณากรอกรหัสผ่านให้ถูกต้อง'

export default function LoginPage({ navigation }) {

    const emailRef = useRef();
    const passwordRef = useRef();



    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const [isEmailEdited, serIsEmailEdited] = useState(false);
    const [isPasswordEdited, serIsPasswordEdited] = useState(false);

    const isEmail = Email.length > 0
    const pattEmail = /(\w+)\@(\w+)\.(\w+)/
    const isPattEmail = pattEmail.test(Email);
    const isPassword = Password.length > 0
    const pattPassword = /\d{13}/
    const isPattPassword = pattPassword.test(Password);


  


    const canSubmit = isEmail && isPassword && isPattEmail


    const errorEmail = !isEmail && isEmailEdited ? ERR_MESSAGE_EMAIL : !isPattEmail && isEmailEdited ? ERR_MESSAGE_EMAIL_PATT : ''
    const errorPassword = !isPassword && isPasswordEdited ? ERR_MESSAGE_PASSWORD : isPattPassword && isPasswordEdited ? ERR_MESSAGE_PASSWORD_PATT : ''


    return (
        <View style={styles.container}>



            <View style={styles.containerTop}>
                <Image
                    source={require('../../assets/Logo.png')}
                    style={{ width: 100, height: 100, margin: 0, }}
                />
                <Text style={styles.Topic}>SING IN</Text>
                <Text style={styles.TopicDetail}>Vegetable Control System</Text>
            </View>



            <View style={styles.containerInput}>
                <View>
                    <TextInput
                        label="Email"
                        value={Email}
                        ref={emailRef}
                        onChangeText={Email => setEmail(Email)}
                        style={{ height: 60 }}
                        selectionColor="#08823F"
                        activeUnderlineColor='#08823F'
                        onEndEditing={() => serIsEmailEdited(true)}
                        onSubmitEditing={() => passwordRef.current.focus()}
                        returnKeyType='next'
                    />
                </View>
                <Text style={styles.errorText}>{errorEmail}</Text>

                <View>
                    <TextInput
                        label="Password"
                        value={Password}
                        ref={passwordRef}
                        onChangeText={Password => setPassword(Password)}
                        style={{ height: 60, marginTop: 10 }}
                        selectionColor="#08823F"
                        activeUnderlineColor='#08823F'
                        onEndEditing={() => serIsPasswordEdited(true)}
                        secureTextEntry={true}
                        returnKeyType='done'
                    />
                </View>
                <Text style={styles.errorText}>{errorPassword}</Text>
                <View style={{ alignItems: 'flex-end', marginTop: 5 }}>
                    <Text style={styles.forgetPassword}>Forget Password ?</Text>
                </View>


                <View style={{ marginTop: 30 }}>
                    <TouchableOpacity color='#08823F' disabled={!canSubmit} onPress={() => navigation.navigate('Menu')} style={styles.submitButton(!canSubmit)}>
                        <Text style={styles.signIn}>SING IN</Text>
                    </TouchableOpacity>
                </View>


            </View>

            <View style={{ marginTop: 250, }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.signUp}>Don't have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SingUp')}>
                        <Text style={styles.forgetPassword}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View >
    );
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
        paddingTop: 60,
        justifyContent: 'space-between',

    },
    Topic: {
        fontSize: 25,
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
    signIn: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    signUp: {
        fontSize: 15,
        fontWeight: 'normal',
        color: '#000000',
    },
    errorText: {
        fontSize: 15,
        fontWeight: 'normal',
        color: 'red',
    },
    submitButton: (disable) => {
        return {
            backgroundColor: disable ? '#878787' : '#08823F',
            padding: 12,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
            borderRadius: 2,

        }
    },
});
