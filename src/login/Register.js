import { Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, ToastAndroid, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import AxiosIntance from '../ultil/AxiosIntance';
import LinearGradient from 'react-native-linear-gradient';
import {LinearTextGradient} from 'react-native-text-gradient';

const Register = (props) => {
    const { navigation } = props;
    const [nameUser, setnameUser] = useState("");
    const [usernameUser, setusernameUser] = useState("");
    const [passwordUser, setpasswordUser] = useState("");
    const [confirmpasswordUser, setconfirmpasswordUser] = useState("");
    const [emailUser, setemailUser] = useState("");
    const [phoneUser, setphoneUser] = useState("");
    
    const dangKyNe = async () => {
        console.log(nameUser, usernameUser, passwordUser, confirmpasswordUser, emailUser, phoneUser);
        try {
            const response = await AxiosIntance().
                post("users/register", 
                     {name: nameUser, username: usernameUser, password: passwordUser, confirmpassword: confirmpasswordUser, email: emailUser, phone: phoneUser});

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
            <SafeAreaView style={{ flex: 1 }}>
          
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../img/logo.png')} />
          <LinearTextGradient
            style={{
              fontWeight: 'bold',
              fontSize: 30,
              textDecorationLine: 'underline',
              fontWeight: 'bold',
              margin: 20,
            }}
            locations={[0, 1]}
            colors={['#5200FF', '#FF00B7']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <Text>Đăng ký</Text>
          </LinearTextGradient>
            <View style={styles.sectionStyle}>
                <Image style={styles.img} source={require('../img/user.png')} />
                <Text style={styles.text}>|</Text>
                <TextInput style={{flex: 1,fontSize: 16 }} placeholder=' Họ và tên' underlineColorAndroid={'rgba(0,0,0,0)'} onChangeText={setnameUser}/>
            </View>
            <View style={styles.sectionStyle}>
                <Image style={styles.img} source={require('../img/user.png')} />
                <Text style={styles.text}>|</Text>
                <TextInput style={{flex: 1,fontSize: 16 }} placeholder='Tên đăng nhập' underlineColorAndroid={'rgba(0,0,0,0)'} onChangeText={setusernameUser}/>
            </View>
            <View style={styles.sectionStyle}>
                <Image style={styles.img} source={require('../img/lock.png')} />
                <Text style={styles.text}>|</Text>
                <TextInput style={{flex: 1,fontSize: 16 }} placeholder='Mật khẩu' underlineColorAndroid={'rgba(0,0,0,0)'} onChangeText={setpasswordUser}/>
            </View>
            <View style={styles.sectionStyle}>
                <Image style={styles.img} source={require('../img/lock.png')} />
                <Text style={styles.text}>|</Text>
                <TextInput style={{flex: 1,fontSize: 16 }} placeholder='Xác nhận mật khẩu' underlineColorAndroid={'rgba(0,0,0,0)'} onChangeText={setconfirmpasswordUser}/>
            </View>
            <View style={styles.sectionStyle}>
                <Image style={styles.img} source={require('../img/mail.png')} />
                <Text style={styles.text}>|</Text>
                <TextInput style={{flex: 1,fontSize: 16 }} placeholder='Email' underlineColorAndroid={'rgba(0,0,0,0)'} onChangeText={setemailUser}/>
            </View>
            <View style={styles.sectionStyle}>
                <Image style={styles.img} source={require('../img/Vector.png')} />
                <Text style={styles.text}>|</Text>
                <TextInput style={{flex: 1,fontSize: 16 }} placeholder=' Số điện thoại' underlineColorAndroid={'rgba(0,0,0,0)'} onChangeText={setphoneUser}/>
            </View>
            

            <LinearGradient colors={['#5200FF', '#FF00B7']} style={styles.btn} >
            <Pressable onPress={dangKyNe} >
              <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
                Đăng ký
              </Text>
            </Pressable>
          </LinearGradient>
        </View>

    </SafeAreaView>
    </ScrollView>

  )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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
        margin: 5
        
        
    },
   img: {
       marginLeft:10,
       height: 24,
       width: 24
       
   },
   text: {
       fontSize: 40,
       color: '#5200FF',
       marginLeft: 5,
       marginRight: 5,
       marginTop: -5,
    
   },
   logo: {
       marginTop: 70,
       alignItems: 'center',
 
   },
   btn: {
       backgroundColor: '#5200FF',
       width: 310,
       height: 50,
       alignItems: 'center',
       justifyContent: 'center',
       borderRadius: 10,
       margin: 20

       
   }

})