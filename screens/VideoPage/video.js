import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { WebView } from 'react-native-webview';


const color = {
    primary: '#08823F',
    white: '#ffffff',
    gray: '#C4C4C4',
}

export default function Video() {



    return (

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
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Platform.OS === 'ios' ? 32 : 0,
    },
    containerBanner: {
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

    },
});
