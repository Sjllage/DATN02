import React, { useState } from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import AxiosIntance from '../ultil/AxiosIntance';
import LinearGradient from 'react-native-linear-gradient';
import { LinearTextGradient } from 'react-native-text-gradient';

const Register = (props) => {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dangKyNe = async () => {
    console.log(email, password, confirmPassword);
    try {
      if (password !== confirmPassword) {
        ToastAndroid.show('Mật khẩu không khớp', ToastAndroid.SHORT);
        return;
      }

      const response = await AxiosIntance().post('user/register', {
        email: email,
        password: password,
      });

      console.log(response);

      if (response.result === true) {
        ToastAndroid.show('Đăng ký thành công', ToastAndroid.SHORT);
        navigation.navigate('Login');
      } else {
        ToastAndroid.show('Đăng ký thất bại', ToastAndroid.SHORT);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Image style={styles.logo} source={require('../img/logo.png')} />
        <LinearTextGradient
          style={styles.title}
          locations={[0, 1]}
          colors={['#5200FF', '#FF00B7']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <Text>Đăng ký</Text>
        </LinearTextGradient>
        <View style={styles.inputContainer}>
          <View style={styles.inputSection}>
            <Image style={styles.inputIcon} source={require('../img/user.png')} />
            <TextInput
              style={styles.input}
              placeholder='Số điện thoại hoặc email'
              underlineColorAndroid={'rgba(0,0,0,0)'}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.inputSection}>
            <Image style={styles.inputIcon} source={require('../img/lock.png')} />
            <TextInput
              style={styles.input}
              placeholder='Mật khẩu'
              secureTextEntry
              underlineColorAndroid={'rgba(0,0,0,0)'}
              onChangeText={setPassword}
            />
          </View>
          <View style={styles.inputSection}>
            <Image style={styles.inputIcon} source={require('../img/lock.png')} />
            <TextInput
              style={styles.input}
              placeholder='Nhập lại mật khẩu'
              secureTextEntry
              underlineColorAndroid={'rgba(0,0,0,0)'}
              onChangeText={setConfirmPassword}
            />
          </View>
        </View>

        <LinearGradient colors={['#5200FF', '#FF00B7']} style={styles.btn}>
          <TouchableOpacity onPress={dangKyNe}>
            <Text style={styles.btnText}>Đăng ký</Text>
          </TouchableOpacity>
        </LinearGradient>
      </SafeAreaView>
    </ScrollView>
  );
};

  export default Register;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
      paddingVertical: 20,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 30,
      textDecorationLine: 'underline',
      marginVertical: 20,
      color: '#5200FF', // Default blue color
    },
    logo: {
      marginTop: 30,
      alignItems: 'center',
    },
    inputContainer: {
      width: '100%',
    },
    inputSection: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#007BFF', // Default blue color
      height: 50,
      marginVertical: 10,
    },
    inputIcon: {
      marginLeft: 10,
      height: 24,
      width: 24,
    },
    input: {
      flex: 1,
      fontSize: 16,
    },
    btn: {
      backgroundColor: '#007BFF', // Default blue color
      width: '100%',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      marginVertical: 20,
    },
    btnText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
    },
    selectedImage: {
      width: 50,
      height: 50,
      borderRadius: 8,
      marginRight: 8,
    },
  });
  