import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { WebView } from 'react-native-webview';
import { MaterialIcons } from '@expo/vector-icons';

const color = {
    primary: '#A0A0A0',
    white: '#ffffff',
    gray: '#C4C4C4',
}

export default function Video() {



    return (


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

            <View style={{ height: '90%', width: '100%', marginTop: Platform.OS === 'ios' ? 0 : 0, }}>
                <WebView
                    style={{ width: '100%' }}
                    originWhitelist={['*']}
                    scrollEnabled={true}
                    onScroll={false}
                    source={{ uri: 'http://1f7d-2403-6200-8853-49ea-1165-dc-93a1-9bab.ngrok.io/stream' }}
                />
            </View>


            {/* <View style={styles.cardDetail}>
                <Text style={{ textAlign: 'left', fontSize: 25, fontWeight: 'bold', color: '#fff', padding: 10 }}>Detail Farm</Text>
                <Text style={{ textAlign: 'left', fontSize: 20, fontWeight: 'normal', color: '#fff', padding: 10 }}>Live Video Farm Live Video Farm</Text>
                <Text style={{ textAlign: 'left', fontSize: 20, fontWeight: 'normal', color: '#fff', padding: 10 }}>Live Video Farm Live Video Farm</Text>
                <Text style={{ textAlign: 'left', fontSize: 20, fontWeight: 'normal', color: '#fff', padding: 10 }}>Live Video Farm Live Video Farm</Text>
            </View> */}

        </View >





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
        backgroundColor: color.white,
        width: '100%',
        height: '100%',
        padding: 20

    },
    containerStreaming: {
        backgroundColor: color.primary,
        width: '100%',
        height: '50%',

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
