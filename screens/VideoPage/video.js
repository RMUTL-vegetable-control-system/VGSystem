import { StatusBar } from 'expo-status-bar';
<<<<<<< HEAD
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
=======
import { StyleSheet, Text, View, Button } from 'react-native';
>>>>>>> d3e95044dd436a1268bea405b0615c179de68053
import { WebView } from 'react-native-webview';
import { MaterialIcons } from '@expo/vector-icons';

const color = {
    primary: '#A0A0A0',
    white: '#ffffff',
    gray: '#C4C4C4',
}

export default function Video() {



    return (

<<<<<<< HEAD

        <View style={styles.containerBanner}>
          
            <View style={styles.titleHeader}>
                <View>
                    <MaterialIcons name="live-tv" size={34} color="black" />
                    <Text style={{ textAlign: 'left', fontSize: 25, fontWeight: 'bold', color: '#303030' }}>Live Video Farm</Text>
                </View>
                <View>
                    <Image
                        source={require('../../assets/live-icon.png')}
                        style={{ width: 85, height: 85, margin: 0, }}
                    />
                </View>
            </View>

            <View style={{ height: '35%', width: '100%', marginTop: Platform.OS === 'ios' ? 10 : 10, }}>
                <WebView
                    style={{ width: '100%' }}
                    originWhitelist={['*']}
                    scrollEnabled={true}
                    onScroll={false}
                    source={{ uri: 'https://2b7c-2403-6200-8853-49ea-2032-6f22-1e67-56d0.ngrok.io/stream' }}
                />
            </View>


            {/* <View style={styles.cardDetail}>
                <Text style={{ textAlign: 'left', fontSize: 25, fontWeight: 'bold', color: '#fff', padding: 10 }}>Detail Farm</Text>
                <Text style={{ textAlign: 'left', fontSize: 20, fontWeight: 'normal', color: '#fff', padding: 10 }}>Live Video Farm Live Video Farm</Text>
                <Text style={{ textAlign: 'left', fontSize: 20, fontWeight: 'normal', color: '#fff', padding: 10 }}>Live Video Farm Live Video Farm</Text>
                <Text style={{ textAlign: 'left', fontSize: 20, fontWeight: 'normal', color: '#fff', padding: 10 }}>Live Video Farm Live Video Farm</Text>
            </View> */}
      
            </View >


      


=======
        <View style={styles.container}>

            <View style={styles.containerBanner}>
                <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', color: '#fff' }}>Video</Text>
            </View>


            <View style={styles.containerStreaming}>
                <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', color: '#fff' }}>Streaming</Text>
                <WebView
                    style={{ marginTop: Platform.OS === 'ios' ? 10 : 10, width: 400, height: 100 }}
                    source={{ uri: 'https://2b7c-2403-6200-8853-49ea-2032-6f22-1e67-56d0.ngrok.io/stream' }}
                />
            </View>
        </View>
>>>>>>> d3e95044dd436a1268bea405b0615c179de68053
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: Platform.OS === 'ios' ? 32 : 0,
    },
    containerBanner: {
<<<<<<< HEAD
        backgroundColor: color.white,
        width: '100%',
        height: '100%',
        padding: 30
=======
        backgroundColor: color.primary,
        width: '100%',
        height: '10%',
        alignContent: 'center',
        justifyContent: 'center'

    },
    containerStreaming: {
        backgroundColor: color.primary,
        width: '100%',
        height: '50%',

>>>>>>> d3e95044dd436a1268bea405b0615c179de68053
    },
    titleHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cardDetail: {
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: color.primary,
        borderRadius: 20,
        width: '100%',
        height: '30%',
        marginTop: 30

    },

});
