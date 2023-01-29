import { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import DatePicker from 'react-native-modern-datepicker';
import { getDatabase, ref, onValue, set } from 'firebase/database';
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
    const [NameHumidity, setNameHumidity] = useState("");
    const [selectedDate, setSelectedDate] = useState('');
    const [cameraIP, setCameraIP] = useState('');
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
    const refNameHumidity = useRef();
    const refCameraIP = useRef();


    useEffect(() => {
        fetchData();
    }, [])

    function fetchData() {
        const db = getDatabase();
        const reference = ref(db, 'farm');
        onValue(reference, (snapshot) => {
            setName(snapshot.val().Detail.name);
            setNameVegetable(snapshot.val().Detail.vegetable);
            setTypeVegetable(snapshot.val().Detail.vegetableType);
            setAmountHarvested(snapshot.val().Detail.dayToHarvest);
            setNameLight1(snapshot.val().Detail.Light1);
            setNameLight2(snapshot.val().Detail.Light2);
            setNameLight3(snapshot.val().Detail.Light3);
            setNameLight4(snapshot.val().Detail.Light4);
            setNameWater1(snapshot.val().Detail.Water1);
            setNameWater2(snapshot.val().Detail.Water2);
            setNameWater3(snapshot.val().Detail.Water3);
            setNameWater4(snapshot.val().Detail.Water4);
            setNameHumidity(snapshot.val().Detail.Humidity);
            setSelectedDate(snapshot.val().Detail.datePlant);
            setCameraIP(snapshot.val().Detail.cameraIP);
        })
    }


    const saveDate = () => {
        const db = getDatabase();
        let name, value;
        let userId = 'user1';
        let path = 'user/' + userId + '/farm/Detail/';
        const reference = ref(db, path);
        console.log(path)
        set(reference, {
            name: Name,
            vegetable: NameVegetable,
            vegetableType: TypeVegetable,
            dayToHarvest: AmountHarvested,
            Light1: NameLight1,
            Light2: NameLight2,
            Light3: NameLight3,
            Light4: NameLight4,
            Water1: NameWater1,
            Water2: NameWater2,
            Water3: NameWater3,
            Water4: NameWater4,
            Humidity: NameHumidity,
            datePlant: selectedDate,
            cameraIP: cameraIP,
        });


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
                        <Text style={styles.TopicDetail}>จำนวนวันที่ต้องปลูก : {AmountHarvested}</Text>
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
                            onSubmitEditing={() => refNameHumidity.current.focus()}
                            onChangeText={NameWater4 => setNameWater4(NameWater4)}
                            style={{ height: 50, marginTop: 10 }}
                            selectionColor="#08823F"
                            activeUnderlineColor='#08823F'
                        />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.TopicDetail}>ชื่อความชื้น : {NameHumidity}</Text>
                        <TextInput
                            label="ชื่อความชื้น"
                            value={NameHumidity}
                            secureTextEntry={false}
                            returnKeyType="done"
                            ref={refNameHumidity}
                            onChangeText={NameHumidity => setNameHumidity(NameHumidity)}
                            style={{ height: 50, marginTop: 10 }}
                            selectionColor="#08823F"
                            activeUnderlineColor='#08823F'
                        />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.TopicDetail}>Camera IP Address : {cameraIP}</Text>
                        <TextInput
                            label="IP Address"
                            value={cameraIP}
                            secureTextEntry={false}
                            returnKeyType="done"
                            ref={refCameraIP}
                            onChangeText={cameraIP => setCameraIP(cameraIP)}
                            style={{ height: 50, marginTop: 10 }}
                            selectionColor="#08823F"
                            activeUnderlineColor='#08823F'
                        />
                    </View>


                    <View style={{ marginTop: 20, marginBottom: 40 }}>

                        <Button mode="contained" color='#08823F' onPress={() => saveDate()}>
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