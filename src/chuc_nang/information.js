import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TextInput, Button, ToastAndroid } from 'react-native';
import AxiosIntance from '../ultil/AxiosIntance';

const Information = (props) => {
    const { navigation } = props;
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [sex, setSex] = useState("");
    const [sdt, setSdt] = useState("");

    const capNhat = async () => {
        console.log(name, date, sex, sdt);
        try {
            const response = await AxiosIntance().post("user/update-info", { name, date, sex, sdt });

            console.log(response);
            if (response.error === false) {
                ToastAndroid.show("Cập nhật thành công", ToastAndroid.SHORT);
                navigation.navigate('Login');
            } else {
                ToastAndroid.show("Cập nhật thất bại", ToastAndroid.SHORT);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={require('../img/Person_image.png')} style={styles.avatar} />
            <Text style={styles.title}>Thông tin cá nhân</Text>
            <TextInput
                value={name}
                onChangeText={setName}
                placeholder='Họ tên đầy đủ'
                style={styles.input}
            />
            <TextInput
                value={date}
                onChangeText={setDate}
                placeholder='Ngày sinh'
                style={styles.input}
            />
            <TextInput
                value={sex}
                onChangeText={setSex}
                placeholder='Giới tính'
                style={styles.input}
            />
            <TextInput
                value={sdt}
                onChangeText={setSdt}
                placeholder='Số điện thoại'
                style={styles.input}
            />
           <Button title="Hoàn tất" color="#841584" onPress={capNhat} style={{ marginTop: -50 }} />

        </ScrollView>
    )
}

export default Information;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingVertical: 20,
        paddingHorizontal: 16,
    },
    avatar: {
        width: 100,
        height: 100,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 30,
        borderWidth: 10,
        borderRadius: 50,
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 30,
    },
    input: {
        borderWidth: 1,
        width: '100%',
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginBottom:20,
    },
});
