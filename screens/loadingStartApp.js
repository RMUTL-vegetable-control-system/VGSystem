import React from "react";
import { ActivityIndicator, StyleSheet, StatusBar, View, Image } from "react-native";

//ฟอร์มเช็คif loading
           // {user == null ? (<></>) : (<><InformationScreen /></>)}

const LoadingStartApp = () => (
    <>
        <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#292B2D" translucent={true} />

        <View style={styles.container}>
            <View style={{ alignItems: 'center', marginBottom: 20 }}>
                <Image
                    source={require('../assets/LogoApp.png')}
                    style={{ width: 300, height: 300, margin: 0, }}
                />
            </View>
            <View style={{ alignItems: 'center' }}>
                <ActivityIndicator size='large' color="#08823F" />
            </View>



        </View>
    </>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        flexDirection: 'column',

        backgroundColor: '#ffffff'
    },

});

export default LoadingStartApp;