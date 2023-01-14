import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { WebView } from 'react-native-webview';
import { MaterialIcons } from '@expo/vector-icons';
import { getDatabase, ref, onValue } from 'firebase/database';

const color = {
    primary: '#A0A0A0',
    white: '#ffffff',
    gray: '#C4C4C4',
}

export default function Video() {

    const [cameraIP, setCameraIP] = useState('');
    useEffect(() => {
        fetchData();
        console.log(cameraIP);
    }, [])

    /**
     * It fetches data from the database and sets the data to the state.
     */
    async function fetchData() {
        const db = getDatabase();
        const reference = ref(db, 'farm');
        onValue(reference, async (snapshot) => {
            setCameraIP('http://' + snapshot.val().Detail.cameraIP + ':81/stream');
        })
    }


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

            <View style={{ height: '60%', width: '100%', marginTop: Platform.OS === 'ios' ? 0 : 0, }}>
                <WebView
                    style={{ width: '100%' }}
                    originWhitelist={['*']}
                    scrollEnabled={true}
                    onScroll={false}
                    source={{ uri: cameraIP }}
                />
                <View >
                    <Text style={{ textAlign: 'left', fontSize: 20, fontWeight: 'bold', color: '#303030', marginTop: 0 }}>ลิงค์ของวิดีโอ  :{cameraIP}</Text>
                    <Text style={{ textAlign: 'left', fontSize: 16, fontWeight: 'bold', color: '#303030', marginTop: 0 }}>Local stream</Text>
                </View>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
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
        justifyContent: 'space-between',

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
