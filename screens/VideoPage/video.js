import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
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
                <Text style={{textAlign:'center',fontSize:25,fontWeight:'bold',color:'#fff'}}>Video</Text>
            </View>

            <WebView
                style={{ marginTop: Platform.OS === 'ios' ? 10 : 10, width: 400, }}
                originWhitelist={['*']}
                source={{ uri: 'https://ceativespace.w3spaces.com/index.html?fbclid=IwAR2ZRdlSQKM8_UG8YfAc5jVPj9qk8X-CW8hqItLEOZ7l0bIkqXvkldTqBNA' }}
            />
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
        width:'100%',
        height:'10%',
        alignContent:'center',
        justifyContent:'center'
        
    },
});
