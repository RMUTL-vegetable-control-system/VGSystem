import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, FlatList, Alert } from 'react-native'
import { useSelector, useDispatch } from "react-redux"
import * as Action from '../../redux/Action'
import { bindActionCreators } from 'redux'


export default function FarmButton({ navigation }) {

    const dispatch = useDispatch();
    const { deleteMember } = bindActionCreators(Action, dispatch);
    const farms = useSelector((state) => state.farm);

    const onDeleteItem = (id, name, surname) => Alert.alert(
        "Delete Farm",
        `Confirm Delete ? \n${name}  ${surname} `,
        [
            {
                text: "ไม่",
                onPress: () => { },
                style: "cancel"
            },
            { text: "ใช่", onPress: () => deleteMember(id) }
        ]
    );

    const MemberItem = ({ onDeletePressed, onEditPressed, farm }) => {
        const { name, surname, userIdPatt, phoneNumberPatt } = farm

        let userIdFormat = (userIdPatt)
        if (userIdFormat.length >= 2) userIdFormat = userIdFormat.slice(0, 1) + '-' + userIdFormat.slice(1);
        if (userIdFormat.length >= 7) userIdFormat = userIdFormat.slice(0, 6) + '-' + userIdFormat.slice(6);
        if (userIdFormat.length >= 13) userIdFormat = userIdFormat.slice(0, 12) + '-' + userIdFormat.slice(12);
        if (userIdFormat.length >= 16) userIdFormat = userIdFormat.slice(0, 15) + '-' + userIdFormat.slice(15);
        ;


        let phoneFormat = (phoneNumberPatt)
        if (phoneFormat.length >= 4) phoneFormat = phoneFormat.slice(0, 3) + '-' + phoneFormat.slice(3);







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
                    <Text style={{ fontSize: 18 }} >Please add farm.</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.push('Add')} style={styles.addFirstButton}>
                    <Text style={styles.addFirstButtonText}>เพิ่ม</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const renderAddButton = () => {
        return (
            <TouchableOpacity onPress={() => navigation.push('Add')} style={styles.addButton}>
                <Entypo name="plus" size={24} color={'#08823F'} />
                <Text style={{ color: '#673ab7', fontSize: 18, fontWeight: 'bold' }}>เพิ่ม</Text>
            </TouchableOpacity>
        )
    }

    const renderList = () => {
        return (
            <View >
                <FlatList
                    data={farms}
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
            {farms.length > 0 ? renderList() : renderEmptyList()}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 8,
        paddingVertical: 12,
        backgroundColor: '#ffffff'
    },
    emptyContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Dimensions.get('screen').width / 1.5
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
    containerMember: {
        width: '94%',
        flexDirection: 'row',
        padding: 12,
        marginHorizontal: 12,
        marginVertical: 6,
        backgroundColor: '#08823F',
        borderRadius: 4,
    },
    wrapContent: {
        flex: 1
    },
    wrapIcon: {
        justifyContent: 'space-between'
    },
    title: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    label: {
        color: '#ffffff',
        marginTop: 4,
        fontSize: 16
    }

})