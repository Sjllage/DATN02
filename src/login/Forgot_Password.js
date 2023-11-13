import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {LinearTextGradient} from 'react-native-text-gradient';

const Forgot_Password = props => {
  const {navigation} = props;
  //chuyen trang register
  const dangKy = () => {
    navigation.navigate('Login');
  };
  return (
    <ScrollView>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <Image style={styles.logo} source={require('../img/logo.png')} />
          <LinearTextGradient
            style={{
              fontWeight: 'bold',
              fontSize: 30,
              textDecorationLine: 'underline',
              fontWeight: 'bold',
              margin: 30,
            }}
            locations={[0, 1]}
            colors={['#5200FF', '#FF00B7']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <Text>Quên mật khẩu</Text>
          </LinearTextGradient>
          <View style={styles.sectionStyle}>
            <Image style={styles.img} source={require('../img/user.png')} />
            <Text style={styles.text}>|</Text>
            <TextInput
              style={{flex: 1, fontSize: 16}}
              placeholder="Tên đăng nhập"
              underlineColorAndroid={'rgba(0,0,0,0)'}
            />
          </View>
          <View style={styles.sectionStyle}>
            <Image style={styles.img} source={require('../img/mail.png')} />
            <Text style={styles.text}>|</Text>
            <TextInput
              style={{flex: 1, fontSize: 16}}
              placeholder="Email"
              underlineColorAndroid={'rgba(0,0,0,0)'}
            />
          </View>
          <View style={styles.sectionStyle}>
            <Image style={styles.img} source={require('../img/lock.png')} />
            <Text style={styles.text}>|</Text>
            <TextInput
              style={{flex: 1, fontSize: 16}}
              placeholder="Mật khẩu"
              underlineColorAndroid={'rgba(0,0,0,0)'}
            />
          </View>
          <View style={styles.sectionStyle}>
            <Image style={styles.img} source={require('../img/lock.png')} />
            <Text style={styles.text}>|</Text>
            <TextInput
              style={{flex: 1, fontSize: 16}}
              placeholder="Xác nhận mật khẩu"
              underlineColorAndroid={'rgba(0,0,0,0)'}
            />
          </View>
          <LinearGradient colors={['#5200FF', '#FF00B7']} style={styles.btn}>
            <Pressable onPress={dangKy}>
              <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
                Xác nhận
              </Text>
            </Pressable>
          </LinearGradient>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Forgot_Password;

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
    margin: 5,
  },
  img: {
    marginLeft: 10,
    height: 24,
    width: 24,
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
    margin: 20,
  },
});
