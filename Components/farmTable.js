import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getDatabase, ref, onValue } from 'firebase/database';

const farmTable = () => {

    const [user, setUser] = useState([]);
    const [farm, setFarm] = useState([]);
    const [jsonData, setJsonData] = useState([]);

    useEffect(async () => {
        const db = getDatabase();
        let userId = 'user1';
        const reference = ref(db, 'user/' + userId);
        onValue(reference, (snapshot) => {
            const userData = snapshot.val();
            const farmData = snapshot.val().farm;
            setUser(userData);
            setFarm(farmData);
            setJsonData(JSON.stringify(userData));
        })
    }, [])

    return (
        <View>
            <Text>{jsonData}</Text>
        </View>
    )
}

export default farmTable