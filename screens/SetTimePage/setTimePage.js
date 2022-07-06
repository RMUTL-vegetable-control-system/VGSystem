import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, FlatList, Alert, Image } from 'react-native'
import { Entypo, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from "react-redux"
import * as Action from '../../redux/Action'
import { bindActionCreators } from 'redux'




const color = {
    primary: '#08823F',
    white: '#ffffff',
    gray: '#C4C4C4',
}

function SetTimePage({ navigation }) {



    const dispatch = useDispatch();
    const { deleteMember } = bindActionCreators(Action, dispatch);
    const members = useSelector((state) => state.member);

    const onDeleteItem = (id, name, surname) => Alert.alert(
        "ลบสมาชิก",
        `ต้องการลบ \n${name}  ${surname} `,
        [
            {
                text: "ไม่",
                onPress: () => { },
                style: "cancel"
            },
            { text: "ใช่", onPress: () => deleteMember(id) }
        ]
    );

    const onEditItem = (member) => navigation.push('add', { member })

    const MemberItem = ({ onDeletePressed, onEditPressed, member }) => {
        const { name, surname, userIdPatt, phoneNumberPatt } = member

        let userIdFormat = (userIdPatt)
        if (userIdFormat.length >= 2) userIdFormat = userIdFormat.slice(0, 1) + '-' + userIdFormat.slice(1);
        if (userIdFormat.length >= 7) userIdFormat = userIdFormat.slice(0, 6) + '-' + userIdFormat.slice(6);
        if (userIdFormat.length >= 13) userIdFormat = userIdFormat.slice(0, 12) + '-' + userIdFormat.slice(12);
        if (userIdFormat.length >= 16) userIdFormat = userIdFormat.slice(0, 15) + '-' + userIdFormat.slice(15);
        ;


        let phoneFormat = (phoneNumberPatt)
        if (phoneFormat.length >= 4) phoneFormat = phoneFormat.slice(0, 3) + '-' + phoneFormat.slice(3);

        console.log(phoneFormat);





        return (
            <View style={styles.containerMember}>
                <View style={styles.wrapContent}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.title}>{name}   </Text>
                        <Text style={styles.title}>{surname}</Text>
                    </View>
                    <Text style={styles.label}>{userIdFormat}</Text>
                    <Text style={styles.label}>{phoneFormat}</Text>
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
            <View >
                <FlatList
                    data={members}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={{ flexGrow: 1 }}
                    renderItem={({ item }) =>
                        <MemberItem
                            onDeletePressed={() => onDeleteItem(item.id, item.name, item.surname)}
                            onEditPressed={() => onEditItem(item)}
                            member={item}
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
                <Text style={{ fontSize: 25, textAlign: 'center', fontWeight: 'bold' }} >SET TIME SET UP</Text>
                <Text style={{ fontSize: 18, textAlign: 'center', }} >Vegetable Control System</Text>
            </View>

            {members.length > 0 ? renderList() : renderEmptyList()}
        </View >
    )
}

export default SetTimePage


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 60,

    },
    emptyContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Dimensions.get('screen').width / 6,
    },
    addFirstButton: {
        backgroundColor: '#673ab7',
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
        borderColor: '#673ab7',
    },
    containerMember: {
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
