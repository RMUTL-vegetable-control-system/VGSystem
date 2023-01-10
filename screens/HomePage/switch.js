import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, FlatList, Alert, Image } from 'react-native'
import { Entypo, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from "react-redux"
import * as Action from '../../redux/Action'
import { bindActionCreators } from 'redux'


// import * as firebase from 'firebase';




const color = {
    primary: '#08823F',
    white: '#ffffff',
    gray: '#C4C4C4',
}

function Switch({ navigation }) {



    const dispatch = useDispatch();
    const { deleteFarm } = bindActionCreators(Action, dispatch);
    const farms = useSelector((state) => state.farm);

    const onDeleteItem = (id, name, detail) => Alert.alert(
        "Delete Farm",
        `Confirm Delete \n${name}  ${detail} `,
        [
            {
                text: "NO",
                onPress: () => { },
                style: "cancel"
            },
            { text: "YES", onPress: () => deleteFarm(id) }
        ]
    );

    const onEditItem = (farm) => navigation.push('add', { farm })

    const FarmItem = ({ onDeletePressed, onEditPressed, farm }) => {
        const { name, detail, } = farm

        return (
            <View style={styles.containerFarm}>
                <View style={styles.wrapContent}>
                    <View style={{ flexDirection: 'colum' }}>
                        <Text style={styles.title}>{name}   </Text>
                        <Text style={styles.label}>{detail}</Text>
                    </View>
                    {/* <Text style={styles.label}>{userIdFormat}</Text>
                    <Text style={styles.label}>{phoneFormat}</Text> */}
                </View>
                <View style={styles.wrapIcon}>
                    <TouchableOpacity onPress={onEditPressed}>
                        <MaterialIcons name="edit" size={28} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onDeletePressed}>
                        <AntDesign name="delete" size={28} color="red" />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }


    const renderEmptyList = () => {
        return (
            <View style={styles.emptyContainer}>
                <View style={{ marginBottom: 20 }}>
                    <Text style={{ fontSize: 18 }} >Don't have Farm Please Insert Farm</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.push('Add')} style={styles.addFirstButton}>
                    <Text style={styles.addFirstButtonText}>Insert</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const renderAddButton = () => {
        return (
            <TouchableOpacity onPress={() => navigation.push('Add')} style={styles.addButton}>
                <Entypo name="plus" size={24} color={color.primary} />
                <Text style={{ color: color.primary, fontSize: 18, fontWeight: 'bold' }}>Insert</Text>
            </TouchableOpacity>
        )
    }

    const renderList = () => {
        return (
            <View style={{ marginBottom: '50%', }}>
                <FlatList
                    data={farms}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={{ flexGrow: 1 }}
                    renderItem={({ item }) =>
                        <FarmItem
                            onDeletePressed={() => onDeleteItem(item.id, item.name, item.detail)}
                            onEditPressed={() => onEditItem(item)}
                            farm={item}
                        />}
                />
                {renderAddButton()}
            </View>
        )
    }



    return (
        <View style={styles.container}>

            <View style={{ flexDirection: 'column', width: '100%', marginBottom: 20, alignItems: 'center' }} >
                <Image
                    source={require('../../assets/Logo.png')}
                    style={{ width: 60, height: 60, margin: 0, }}
                />
                <Text style={{ fontSize: 25, textAlign: 'center', fontWeight: 'bold' }} >HOME SET UP</Text>
                <Text style={{ fontSize: 18, textAlign: 'center', }} >Vegetable Control System</Text>
            </View>

            {farms.length > 0 ? renderList() : renderEmptyList()}
            <FarmTable />
        </View >
    )
}

export default Switch


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
