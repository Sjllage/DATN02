import { ScrollView, StyleSheet, Text, View, Image, TextInput, Button } from 'react-native'
import React from 'react'
import AxiosIntance from '../ultil/AxiosIntance';

const Information = (props) => {
    const { navigation } = props;
    const [name, setname] = useState("");
    const [password, setpassword] = useState("");
    const [email, setemail] = useState("");
    const [sdt, setsdt] = useState("");

    const capNhat = async () => {
        console.log(name, password, email, sdt);
        try {
            const response = await AxiosIntance().
                post("user/update-info", 
                     {name: name, name: name, password: password, email: email, sdt: sdt});

            console.log(response);
            if(response.error == false) {
                ToastAndroid.show("Dang ky thanh cong", ToastAndroid.SHORT);
                navigation.navigate('Login');
            }else{
                ToastAndroid.show("Dang ky that bai", ToastAndroid.SHORT);
            }
        } catch (error) {
            console.log(error);
            
        }
    }

    return (
        <ScrollView>
            <Image source={require('../img/Person_image.png')} style={{ width: 100, height: 100, marginLeft: 150, marginTop: 100, borderWidth: 10, borderRadius: 50 }} />
            <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', marginTop: 30 }}>Thông tin cá nhân</Text>
            <Text style ={{marginLeft: 30, fontSize: 20, fontWeight: 'bold', marginTop: 10}}>Họ và tên</Text>
            <TextInput value={name} onChangeText={setname} placeholder='Nguyễn Văn A' style={{ borderWidth: 1, width: 350, alignSelf: 'center', marginTop: 5, borderRadius: 10 }}></TextInput>
            <Text style ={{marginLeft: 30, fontSize: 20, fontWeight: 'bold', marginTop: 10}}>Mật khẩu</Text>
            <TextInput value={password} onChangeText={setpassword} placeholder='Mật khẩu' style={{ borderWidth: 1, width: 350, alignSelf: 'center', marginTop: 10, borderRadius: 10, marginBottom: 5 }}></TextInput>
            <Text style ={{marginLeft: 30, fontSize: 20, fontWeight: 'bold', marginTop: 10}}>Email</Text>
            <TextInput value={email} onChangeText={setemail} placeholder='Email' style={{ borderWidth: 1, width: 350, alignSelf: 'center', marginTop: 10, borderRadius: 10, marginBottom: 5 }}></TextInput>
            <Text style ={{marginLeft: 30, fontSize: 20, fontWeight: 'bold', marginTop: 10}}>Số điện thoại</Text>
            <TextInput value={sdt} onChangeText={setsdt} placeholder='Số điện thoại' style={{ borderWidth: 1, width: 350, alignSelf: 'center', marginTop: 10, borderRadius: 10, marginBottom: 50 }}></TextInput>
            <Button title="Đăng nhập" color="#841584" accessibilityLabel="Learn more about this purple button" ></Button>
        </ScrollView>
    )
}

export default Information

const styles = StyleSheet.create({})