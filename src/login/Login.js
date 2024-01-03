import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Image, ToastAndroid } from 'react-native';
import AxiosIntance from '../ultil/AxiosIntance';
import Register from './Register';

const Login = ({ navigation }) => {
  const [phoneOrEmail, setPhoneOrEmail] = useState("");
  const [password, setPassword] = useState("");

  const dangNhapNe = async () => {
    console.log(phoneOrEmail, password);
    try {
      const response = await AxiosIntance().post("user/login", {
        email: phoneOrEmail,
        password: password,
      });
      console.log(response);
      if (response.error === false) {
        ToastAndroid.show("Đăng nhập thành công", ToastAndroid.SHORT);
        navigation.navigate('Home');
      } else {
        ToastAndroid.show("Đăng nhập thất bại", ToastAndroid.SHORT);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const dangKy = () => {
    navigation.navigate('Register');
  };

  return (
    <ScrollView>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Image style={styles.logo} source={require('../img/logo.png')} />
          <View style={styles.sectionStyle}>
            <Image style={styles.img} source={require('../img/user.png')} />
            <TextInput
              style={{ flex: 1, fontSize: 16 }}
              placeholder="Số điện thoại/email đã đăng ký"
              underlineColorAndroid={'rgba(0,0,0,0)'}
              value={phoneOrEmail}
              onChangeText={(text) => setPhoneOrEmail(text)}
            />
          </View>
          <View style={styles.sectionStyle}>
            <Image style={styles.img} source={require('../img/lock.png')} />
            <TextInput
              style={{ flex: 1, fontSize: 16 }}
              placeholder="Nhập mật khẩu"
              secureTextEntry
              underlineColorAndroid={'rgba(0,0,0,0)'}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <TouchableOpacity style={styles.btn} onPress={dangNhapNe}>
            <Text style={{ color: '#fff', fontSize: 16 }}>Đăng nhập</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn1} onPress={dangKy}>
            <Text style={{ color: '#5200FF', fontSize: 16 }}>Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#5200FF',
    height: 50,
    width: 310,
    margin: 5,
  },
  img: {
    marginLeft: 10,
    height: 24,
    width: 24,
  },
  logo: {
    marginBottom: 20,
  },
  btn: {
    backgroundColor: '#5200FF',
    width: 310,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 4,
  },
  btn1: {
    backgroundColor: '#fff',
    width: 310,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 4,
    borderWidth: 1,
    borderColor: '#5200FF',
    marginTop: 10,
  },
});
