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
const Login = props => {
  const {navigation} = props;
  //chuyen trang register
  const dangKy = () => {
    navigation.navigate('Register');
  };
  const dangNhap = () => {
    navigation.navigate('Forgot_Password');
  };

  return (
    <ScrollView>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <Image style={styles.logo} source={require('../img/logo.png')} />
          <LinearTextGradient
            style={{
              fontSize: 24,

              fontWeight: 'bold',
              margin: 10,
            }}
            locations={[0, 1]}
            colors={['#5200FF', '#FF00B7']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <Text>Chào mừng đến với</Text>
          </LinearTextGradient>

          <LinearTextGradient
            style={{
              fontSize: 48,

              margin: 10,
              fontWeight: 'bold',
            }}
            locations={[0, 1]}
            colors={['#5200FF', '#FF00B7']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <Text>Tagoca</Text>
          </LinearTextGradient>

          <LinearTextGradient
            style={{
              fontSize: 20,

              fontWeight: 'bold',
              margin: 10,
            }}
            locations={[0, 1]}
            colors={['#5200FF', '#FF00B7']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <Text> Vì sức khỏe của bạn</Text>
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
            <Image style={styles.img} source={require('../img/lock.png')} />
            <Text style={styles.text}>|</Text>
            <TextInput
              style={{flex: 1, fontSize: 16}}
              placeholder="Mật khẩu"
              underlineColorAndroid={'rgba(0,0,0,0)'}
            />
          </View>
          <Pressable style={styles.btn1}>
            <LinearTextGradient
              style={{
                fontSize: 20,
                fontWeight: 'bold',
              }}
              locations={[0, 1]}
              colors={['#5200FF', '#FF00B7']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
              <Text> Đăng nhập</Text>
            </LinearTextGradient>
          </Pressable>
          <LinearGradient colors={['#5200FF', '#FF00B7']} style={styles.btn}>
            <Pressable onPress={dangKy}>
              <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
                Đăng ký
              </Text>
            </Pressable>
          </LinearGradient>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginTop: 20,
              textDecorationLine: 'underline',
            }}
            onPress={dangNhap}>
            Quên mật khẩu
          </Text>
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
  text: {
    fontSize: 40,
    color: '#5200FF',
    marginLeft: 5,
    marginRight: 5,
    marginTop: -5,
  },
  logo: {
    alignItems: 'center',
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
