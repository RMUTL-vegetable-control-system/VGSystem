import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';


export default function LoginPage({ navigation }) {

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");


    return (
        <View style={styles.container}>



            <View style={styles.containerTop}>
                <Image
                    source={require('../../assets/Logo.png')}
                    style={{ width: 150, height: 150, margin: 0, }}
                />
                <Text style={styles.Topic}>SING IN</Text>
                <Text style={styles.TopicDetail}>Vegetable Control System</Text>
            </View>



            <View style={styles.containerInput}>
                <View>
                    <TextInput
                        label="Email"
                        value={Email}
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
                        onChangeText={Password => setPassword(Password)}
                        style={{ height: 60, marginTop: 10 }}
                        selectionColor="#08823F"
                        activeUnderlineColor='#08823F'
                    />
                </View>
                <View style={{ alignItems: 'flex-end', marginTop: 5 }}>
                    <Text style={styles.forgetPassword}>Forget Password ?</Text>
                </View>

                <View style={{ marginTop: 30 }}>
                    <Button mode="contained" color='#08823F' onPress={() => navigation.navigate('Menu')}>
                        <Text style={styles.Topic}>SING IN</Text>
                    </Button>
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
    signUp: {
        fontSize: 15,
        fontWeight: 'normal',
        color: '#000000',
    },
});
