import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, FlatList, Alert, Image } from 'react-native'
import { Entypo, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from "react-redux"
import * as Action from '../../redux/Action'
import { bindActionCreators } from 'redux'
import FarmTable from '../../Components/FarmTable';

// import * as firebase from 'firebase';




const color = {
    primary: '#08823F',
    white: '#ffffff',
    gray: '#C4C4C4',
}

function Home({ navigation }) {


    return (
        <View style={styles.container}>
            <FarmTable />
        </View >
    )
}

export default Home


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 60,
        marginBottom: 0

    },
    emptyContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Dimensions.get('screen').width / 6,
    },
    addFirstButton: {
        backgroundColor: '#08823F',
        padding: 12,
        borderRadius: 4,
        width: 150
    },
    addFirstButtonText: {
        color: '#ffffff',
        textAlign: 'center'
    },
    addButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        marginHorizontal: 12,
        marginVertical: 6,
        padding: 12,
        borderWidth: 1,
        borderColor: '#08823F',
    },
    containerFarm: {
        width: '94%',
        flexDirection: 'row',
        padding: 12,
        marginHorizontal: 12,
        marginVertical: 6,
        backgroundColor: color.primary,
        borderRadius: 4,
    },
    wrapContent: {
        flex: 1
    },
    wrapIcon: {
        justifyContent: 'space-between'
    },
    title: {
        color: color.white,
        fontSize: 20,
        fontWeight: 'bold'
    },
    titleHeader: {
        color: '#000000',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        width: '100%',
        height: '10%',


    },
    label: {
        color: color.white,
        marginTop: 4,
        fontSize: 16
    }

})
