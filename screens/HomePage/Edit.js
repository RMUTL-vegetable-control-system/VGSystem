import { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import DatePicker from 'react-native-modern-datepicker';
import { getDatabase, ref, onValue, set, off, on } from 'firebase/database';
export default function Edit({ navigation }) {

    const [Name, setName] = useState();
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

    const [valueName, setvalueName] = useState();
    const [valueNameVegetable, setvalueNameVegetable] = useState("");
    const [valueTypeVegetable, setvalueTypeVegetable] = useState("");
    const [valueAmountHarvested, setvalueAmountHarvested] = useState("");
    const [valueNameLight1, setvalueNameLight1] = useState("");
    const [valueNameLight2, setvalueNameLight2] = useState("");
    const [valueNameLight3, setvalueNameLight3] = useState("");
    const [valueNameLight4, setvalueNameLight4] = useState("");
    const [valueNameWater1, setvalueNameWater1] = useState("");
    const [valueNameWater2, setvalueNameWater2] = useState("");
    const [valueNameWater3, setvalueNameWater3] = useState("");
    const [valueNameWater4, setvalueNameWater4] = useState("");
    const [valueNameHumidity, setvalueNameHumidity] = useState("");
    const [valueselectedDate, setvalueSelectedDate] = useState('');
    const [valuecameraIP, setvalueCameraIP] = useState('');



    useEffect(() => {
        fetchData();
        setvalueName(Name);
    }, [])

    function fetchData() {
        const db = getDatabase();
        const reference_edit = ref(db, 'farm');
        onValue(reference_edit, (snapshot) => {
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

        });
    }


    const saveDate = () => {
        const db = getDatabase();
        let path = '/farm/Detail/';
        const reference = ref(db, path);
        console.log(path)
        set(reference, {
            name: valueName ? valueName : Name,
            vegetable: valueNameVegetable ? valueNameVegetable : NameVegetable,
            vegetableType: valueTypeVegetable ? valueTypeVegetable : TypeVegetable,
            dayToHarvest: valueAmountHarvested ? valueAmountHarvested : AmountHarvested,
            Light1: valueNameLight1 ? valueNameLight1 : NameLight1,
            Light2: valueNameLight2 ? valueNameLight2 : NameLight2,
            Light3: valueNameLight3 ? valueNameLight3 : NameLight3,
            Light4: valueNameLight4 ? valueNameLight4 : NameLight4,
            Water1: valueNameWater1 ? valueNameWater1 : NameWater1,
            Water2: valueNameWater2 ? valueNameWater2 : NameWater2,
            Water3: valueNameWater3 ? valueNameWater3 : NameWater3,
            Water4: valueNameWater4 ? valueNameWater4 : NameWater4,
            Humidity: valueNameHumidity ? valueNameHumidity : NameHumidity,
            datePlant: valueselectedDate ? valueselectedDate : selectedDate,
            cameraIP: valuecameraIP ? valuecameraIP : cameraIP,
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
                            onChangeText={value => setvalueName(value)}
                            style={{ height: 50 }}
                            selectionColor="#08823F"
                            activeUnderlineColor='#08823F'

                        />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.TopicDetail}>ชื่อผัก : {NameVegetable}</Text>
                        <TextInput
                            label="ชื่อผัก"
                            onChangeText={value => setvalueNameVegetable(value)}
                            style={{ height: 50, marginTop: 10 }}
                            selectionColor="#08823F"
                            activeUnderlineColor='#08823F'
                        />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.TopicDetail}>ชนิดผัก : {TypeVegetable}</Text>
                        <TextInput
                            label="ชนิดผัก"
                            onChangeText={TypeVegetable => setvalueTypeVegetable(TypeVegetable)}
                            style={{ height: 50, marginTop: 10 }}
                            selectionColor="#08823F"
                            activeUnderlineColor='#08823F'
                        />
                    </View>
                    <View style={{ marginTop: 20, }}>
                        <Text style={styles.TopicDetail}>วันที่ปลูก {selectedDate}</Text>
                        <DatePicker
                            mode="datepicker"
                            onSelectedChange={date => setvalueSelectedDate(date)}
                        />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.TopicDetail}>จำนวนวันที่ต้องปลูก : {AmountHarvested}</Text>
                        <TextInput
                            keyboardType='numeric'
                            label="จำนวนที่ต้องเก็บเกี่ยว"
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
                            onChangeText={NameLight1 => setvalueNameLight1(NameLight1)}
                            style={{ height: 50, marginTop: 10 }}
                            selectionColor="#08823F"
                            activeUnderlineColor='#08823F'
                        />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.TopicDetail}>ชื่อหลอดไฟ 2 : {NameLight2}</Text>
                        <TextInput
                            label="ชื่อหลอดไฟ 2"
                            onChangeText={NameLight2 => setvalueNameLight2(NameLight2)}
                            style={{ height: 50, marginTop: 10 }}
                            selectionColor="#08823F"
                            activeUnderlineColor='#08823F'
                        />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.TopicDetail}>ชื่อหลอดไฟ 3 : {NameLight3}</Text>
                        <TextInput
                            label="ชื่อหลอดไฟ 3"
                            onChangeText={NameLight3 => setvalueNameLight3(NameLight3)}
                            style={{ height: 50, marginTop: 10 }}
                            selectionColor="#08823F"
                            activeUnderlineColor='#08823F'
                        />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.TopicDetail}>ชื่อหลอดไฟ 4 : {NameLight4}</Text>
                        <TextInput
                            label="ชื่อหลอดไฟ 4"
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
                            onChangeText={NameWater1 => setvalueNameWater1(NameWater1)}
                            style={{ height: 50, marginTop: 10 }}
                            selectionColor="#08823F"
                            activeUnderlineColor='#08823F'
                        />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.TopicDetail}>ชื่อน้ำ 2 : {NameWater2}</Text>
                        <TextInput
                            label="ชื่อน้ำ 2"
                            onChangeText={NameWater2 => setvalueNameWater2(NameWater2)}
                            style={{ height: 50, marginTop: 10 }}
                            selectionColor="#08823F"
                            activeUnderlineColor='#08823F'
                        />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.TopicDetail}>ชื่อน้ำ 3 : {NameWater3}</Text>
                        <TextInput
                            label="ชื่อน้ำ 3"
                            onChangeText={NameWater3 => setvalueNameWater3(NameWater3)}
                            style={{ height: 50, marginTop: 10 }}
                            selectionColor="#08823F"
                            activeUnderlineColor='#08823F'
                        />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.TopicDetail}>ชื่อน้ำ 4 : {NameWater4}</Text>
                        <TextInput
                            label="ชื่อน้ำ 4"
                            onChangeText={NameWater4 => setvalueNameWater4(NameWater4)}
                            style={{ height: 50, marginTop: 10 }}
                            selectionColor="#08823F"
                            activeUnderlineColor='#08823F'
                        />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.TopicDetail}>ชื่อความชื้น : {NameHumidity}</Text>
                        <TextInput
                            label="ชื่อความชื้น"
                            onChangeText={NameHumidity => setvalueNameHumidity(NameHumidity)}
                            style={{ height: 50, marginTop: 10 }}
                            selectionColor="#08823F"
                            activeUnderlineColor='#08823F'
                        />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.TopicDetail}>Camera IP Address : {cameraIP}</Text>
                        <TextInput
                            label="IP Address"
                            onChangeText={cameraIP => setvalueCameraIP(cameraIP)}
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