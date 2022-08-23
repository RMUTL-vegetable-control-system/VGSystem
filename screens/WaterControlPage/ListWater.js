import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react';

const color = {
    primary: '#80C5De',
    white: '#ffffff',
    gray: '#C4C4C4',
}
export default function ListWater({ navigation }) {
    const listTime = [
        { id: 1, name: 'water1', time: '12.20', timeAmount: '20' },
        { id: 2, name: 'water2', time: '22.00', timeAmount: '120' },
        { id: 3, name: 'water3', time: '07.30', timeAmount: '30' }

    ];

    const Item = ({ time, name }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.title}>{time} น.</Text>
        </View>
    );
    const renderItem = ({ item }) => (
        <Item time={item.time} name={item.name} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={listTime}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <View>
                <TouchableOpacity color={color.primary} onPress={() => navigation.navigate('SetTimeWater')} style={styles.submitButton}>
                    <View
                        style={{
                            backgroundColor: color.white,
                            width: 200,
                            padding: 5,
                            borderRadius: 10,
                            marginBottom: 20,
                            alignContent: 'center',
                        }}>
                        <Text style={styles.labelButton}>Add Set Time</Text>
                    </View>

                </TouchableOpacity>
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    labelButton: {
        color: '#878787',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',

    },
    item: {
        width: 350,
        backgroundColor: color.primary,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius:20
    },
    title: {
        fontSize: 24,
    },
});