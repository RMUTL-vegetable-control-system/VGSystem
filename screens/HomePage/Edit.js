import { useState, useRef } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import DatePicker from 'react-native-modern-datepicker';

export default function Edit({ navigation }) {

    const [Name, setName] = useState("");
    const [NameVegetable, setNameVegetable] = useState("");
    const [TypeVegetable, setTypeVegetable] = useState("");
    const [AmountHarvested, setAmountHarvested] = useState("");
    const [NameLight1, setNameLight1] = useState("");
    const [NameLight2, setNameLight2] = useState("");
    const [NameLight3, setNameLight3] = useState("");
    const [NameLight4, setNameLight4] = useState("");
    const [NameWater1, setNameWater1] = useState("");
    const [NameWater2, setNameWater2] = useState("");
    const [NameWater3, setNameWater3] = useState("");
    const [NameWater4, setNameWater4] = useState("");
    const [NameHumatity, setNameHumatity] = useState("");
    const [selectedDate, setSelectedDate] = useState('');
    const refName = useRef();
    const refNameVegetable = useRef();
    const refTypeVegetable = useRef();
    const refAmountHarvested = useRef();
    const refNameLight1 = useRef();
    const refNameLight2 = useRef();
    const refNameLight3 = useRef();
    const refNameLight4 = useRef();
    const refNameWater1 = useRef();
    const refNameWater2 = useRef();
    const refNameWater3 = useRef();
    const refNameWater4 = useRef();
    const refNameHumatity = useRef();

    const myArray = selectedDate.split(" ");
    const dataDate = myArray[0];
    const dataTime = myArray[1];
    console.log(dataDate)
    console.log(dataTime)


    const saveDate = () => {
        navigation.navigate('Menu')
    };


    return (
        <ScrollView>
            <View style={styles.container}>



                <View style={styles.containerTop}>
                    <Image
                        source={require('../../assets/LogoApp.png')}
                        style={{ width: 80, height: 80, }}
                    />
                    <Text style={styles.Topic}>แก้ไขข้อมูลฟาร์ม</Text>
                </View>



                <View style={styles.containerInput}>
                    <View>
                        <Text style={styles.TopicDetail}>ชื่อโครงการ : {Name}</Text>
                        <TextInput
                            label="ชื่อโครงการ"
                            value={Name}
                            returnKeyType="next"
                            ref={refName}
                            onSubmitEditing={() => refNameVegetable.current.focus()}
                            onChangeText={Name => setName(Name)}
                            style={{ height: 50 }}
                            selectionColor="#08823F"
                            activeUnderlineColor='#08823F'

                        />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.TopicDetail}>ชื่อผัก : {NameVegetable}</Text>
                        <TextInput
                            label="ชื่อผัก"
                            value={NameVegetable}
                            secureTextEntry={false}
                            returnKeyType="next"
                            ref={refNameVegetable}
                            onSubmitEditing={() => refTypeVegetable.current.focus()}
                            onChangeText={NameVegetable => setNameVegetable(NameVegetable)}
                            style={{ height: 50, marginTop: 10 }}
                            selectionColor="#08823F"
                            activeUnderlineColor='#08823F'
                        />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.TopicDetail}>ชนิดผัก : {TypeVegetable}</Text>
                        <TextInput
                            label="ชนิดผัก"
                            value={TypeVegetable}
                            secureTextEntry={false}
                            returnKeyType="next"
                            ref={refTypeVegetable}
                            onSubmitEditing={() => refAmountHarvested.current.focus()}
                            onChangeText={TypeVegetable => setTypeVegetable(TypeVegetable)}
                            style={{ height: 50, marginTop: 10 }}
                            selectionColor="#08823F"
                            activeUnderlineColor='#08823F'
                        />
                    </View>
                    <View style={{ marginTop: 20, }}>
                        <Text style={styles.TopicDetail}>วันที่ปลูก {selectedDate}</Text>
                        <DatePicker
                            mode="datepicker"
                            onSelectedChange={date => setSelectedDate(date)}
                        />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.TopicDetail}>จำนวนที่ต้องเก็บเกี่ยว : {AmountHarvested}</Text>
                        <TextInput
                            keyboardType='numeric'
                            label="จำนวนที่ต้องเก็บเกี่ยว"
                            value={AmountHarvested}
                            secureTextEntry={false}
                            returnKeyType="next"
                            ref={refAmountHarvested}
                            onSubmitEditing={() => refNameLight1.current.focus()}
                            onChangeText={AmountHarvested => setAmountHarvested(AmountHarvested)}
                            style={{ height: 50, marginTop: 10 }}
                            selectionColor="#08823F"
                            activeUnderlineColor='#08823F'
                        />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.TopicDetail}>ชื่อหลอดไฟ 1 : {NameLight1}</Text>
                        <TextInput
                            label="ชื่อหลอดไฟ 1"
                            value={NameLight1}
                            secureTextEntry={false}
                            returnKeyType="next"
                            ref={refNameLight1}
                            onSubmitEditing={() => refNameLight2.current.focus()}
                            onChangeText={NameLight1 => setNameLight1(NameLight1)}
                            style={{ height: 50, marginTop: 10 }}
                            selectionColor="#08823F"
                            activeUnderlineColor='#08823F'
                        />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.TopicDetail}>ชื่อหลอดไฟ 2 : {NameLight2}</Text>
                        <TextInput
                            label="ชื่อหลอดไฟ 2"
                            value={NameLight2}
                            secureTextEntry={false}
                            returnKeyType="next"
                            ref={refNameLight2}
                            onSubmitEditing={() => refNameLight3.current.focus()}
                            onChangeText={NameLight2 => setNameLight2(NameLight2)}
                            style={{ height: 50, marginTop: 10 }}
                            selectionColor="#08823F"
                            activeUnderlineColor='#08823F'
                        />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.TopicDetail}>ชื่อหลอดไฟ 3 : {NameLight3}</Text>
                        <TextInput
                            label="ชื่อหลอดไฟ 3"
                            value={NameLight3}
                            secureTextEntry={false}
                            returnKeyType="next"
                            ref={refNameLight3}
                            onSubmitEditing={() => refNameLight4.current.focus()}
                            onChangeText={NameLight3 => setNameLight3(NameLight3)}
                            style={{ height: 50, marginTop: 10 }}
                            selectionColor="#08823F"
                            activeUnderlineColor='#08823F'
                        />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.TopicDetail}>ชื่อหลอดไฟ 4 : {NameLight4}</Text>
                        <TextInput
                            label="ชื่อหลอดไฟ 4"
                            value={NameLight4}
                            secureTextEntry={false}
                            returnKeyType="next"
                            ref={refNameLight4}
                            onSubmitEditing={() => refNameWater1.current.focus()}
                            onChangeText={NameLight4 => setNameLight4(NameLight4)}
                            style={{ height: 50, marginTop: 10 }}
                            selectionColor="#08823F"
                            activeUnderlineColor='#08823F'
                        />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.TopicDetail}>ชื่อน้ำ 1 : {NameWater1}</Text>
                        <TextInput
                            label="ชื่อน้ำ 1"
                            value={NameWater1}
                            secureTextEntry={false}
                            returnKeyType="next"
                            ref={refNameWater1}
                            onSubmitEditing={() => refNameWater2.current.focus()}
                            onChangeText={NameWater1 => setNameWater1(NameWater1)}
                            style={{ height: 50, marginTop: 10 }}
                            selectionColor="#08823F"
                            activeUnderlineColor='#08823F'
                        />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.TopicDetail}>ชื่อน้ำ 2 : {NameWater2}</Text>
                        <TextInput
                            label="ชื่อน้ำ 2"
                            value={NameWater2}
                            secureTextEntry={false}
                            returnKeyType="next"
                            ref={refNameWater2}
                            onSubmitEditing={() => refNameWater3.current.focus()}
                            onChangeText={NameWater2 => setNameWater2(NameWater2)}
                            style={{ height: 50, marginTop: 10 }}
                            selectionColor="#08823F"
                            activeUnderlineColor='#08823F'
                        />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.TopicDetail}>ชื่อน้ำ 3 : {NameWater3}</Text>
                        <TextInput
                            label="ชื่อน้ำ 3"
                            value={NameWater3}
                            secureTextEntry={false}
                            returnKeyType="next"
                            ref={refNameWater3}
                            onSubmitEditing={() => refNameWater4.current.focus()}
                            onChangeText={NameWater3 => setNameWater3(NameWater3)}
                            style={{ height: 50, marginTop: 10 }}
                            selectionColor="#08823F"
                            activeUnderlineColor='#08823F'
                        />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.TopicDetail}>ชื่อน้ำ 4 : {NameWater4}</Text>
                        <TextInput
                            label="ชื่อน้ำ 4"
                            value={NameWater4}
                            secureTextEntry={false}
                            returnKeyType="next"
                            ref={refNameWater4}
                            onSubmitEditing={() => refNameHumatity.current.focus()}
                            onChangeText={NameWater4 => setNameWater4(NameWater4)}
                            style={{ height: 50, marginTop: 10 }}
                            selectionColor="#08823F"
                            activeUnderlineColor='#08823F'
                        />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.TopicDetail}>ชื่อความชื้น : {NameHumatity}</Text>
                        <TextInput
                            label="ชื่อความชื้น"
                            value={NameHumatity}
                            secureTextEntry={false}
                            returnKeyType="done"
                            ref={refNameHumatity}
                            onChangeText={NameHumatity => setNameHumatity(NameHumatity)}
                            style={{ height: 50, marginTop: 10 }}
                            selectionColor="#08823F"
                            activeUnderlineColor='#08823F'
                        />
                    </View>


                    <View style={{ marginTop: 20, marginBottom: 40 }}>
                        <Button mode="contained" color='#08823F' onPress={() => navigation.navigate('Home')}>
                            <Text style={styles.TopicButton}>ยืนยัน</Text>
                        </Button>
                    </View>


                </View>


            </View >
        </ScrollView >
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',


    },
    containerTop: {
        alignItems: 'center',
        justifyContent: 'center',

    },
    containerInput: {
        width: '85%',
        paddingTop: 20,

    },
    Topic: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    TopicButton: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    TopicDetail: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    forgetPassword: {
        fontSize: 15,
        fontWeight: 'normal',
        color: '#08823F',
    },
    signUp: {
        fontSize: 15,
        fontWeight: 'normal',
        color: '#000000',
    },
});