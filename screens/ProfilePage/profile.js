import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Profile({ navigation }) {
    return (
        <View style={styles.container}>
           
                <ImageBackground
                    source={require('../../assets/background-profile.jpg')}
                    style={{ width: '100%', height: 250, margin: 0, }}
                />
            
            <View style={{ width: '100%', alignItems: 'center', marginTop: -70 }}>
                <Image
                    source={require('../../assets/picProfile.jpg')}
                    style={styles.image}
                />
            </View>
            <Text style={styles.Topic}>test_name@gmail.com</Text>
            <Text style={styles.TopicDetail}>Vegetable Control System</Text>
            <View style={{ width: '100%', height: '40%', justifyContent: 'space-around', flexDirection: 'column', alignItems: 'center' }}>

                <View style={{ width: '90%', height: 50, backgroundColor: 'white', justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center', }}>

                    <Image
                        source={require('../../assets/lock.png')}
                        style={{ width: 25, height: 25, margin: 0, }}
                    />
                    <Text style={styles.Logout}>Change Password</Text>
                    <Image
                        source={require('../../assets/right.png')}
                        style={{ width: 30, height: 30, margin: 0, }}
                    />
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ width: '100%', height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', flexDirection: 'row' }}>
                    <Image
                        source={require('../../assets/logout.png')}
                        style={{ width: 25, height: 25, margin: 0, }}
                    />
                    <Text style={styles.Logout}>Logout</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: windowHeight,
        marginTop: 0

    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 5,
        borderColor: "#f2f2f2"
    },
    Topic: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    TopicDetail: {
        fontSize: 18,
        fontWeight: 'normal'
    },
    Logout: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#A2A2A2'
    },
});
