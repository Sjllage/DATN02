import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Lich_kham = () => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#5200FF', '#FF00B7']} style={styles.btn}>
        <Pressable>
          <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
            Thông tin đặt khám
          </Text>
        </Pressable>
      </LinearGradient>

      <ScrollView>
        <View>
          <Text style={{fontSize: 20, marginTop: 10, marginLeft: 10}}>
            Chọn ngày/tháng năm :
          </Text>
        </View>
        <View>
          <Text style={{fontSize: 20, marginTop: 10, marginLeft: 10}}>
            Chọn thời gian cụ thể khám :
          </Text>
          <View style={{flexDirection: 'row', left: 30}}>
            <Pressable>
              <Text
                style={{
                  fontSize: 18,
                  marginTop: 10,
                  marginLeft: 10,
                  backgroundColor: '#D9D9D9',
                  color: '#000000',
                  width: 100,
                  height: 30,
                  textAlign: 'center',
                }}>
                09:00 AM
              </Text>
            </Pressable>
            <Pressable>
              <Text
                style={{
                  fontSize: 18,
                  marginTop: 10,
                  marginLeft: 10,
                  backgroundColor: '#D9D9D9',
                  color: '#000000',
                  width: 100,
                  height: 30,
                  textAlign: 'center',
                }}>
                09:00 AM
              </Text>
            </Pressable>
            <Pressable>
              <Text
                style={{
                  fontSize: 18,
                  marginTop: 10,
                  marginLeft: 10,
                  backgroundColor: '#D9D9D9',
                  color: '#000000',
                  width: 100,
                  height: 30,
                  textAlign: 'center',
                }}>
                09:00 AM
              </Text>
            </Pressable>
          </View>
        </View>

        <View style={{flexDirection: 'row', left: 30}}>
          <Pressable>
            <Text
              style={{
                fontSize: 18,
                marginTop: 10,
                marginLeft: 10,
                backgroundColor: '#D9D9D9',
                color: '#000000',
                width: 100,
                height: 30,
                textAlign: 'center',
              }}>
              09:00 AM
            </Text>
          </Pressable>
          <Pressable>
            <Text
              style={{
                fontSize: 18,
                marginTop: 10,
                marginLeft: 10,
                backgroundColor: '#D9D9D9',
                color: '#000000',
                width: 100,
                height: 30,
                textAlign: 'center',
              }}>
              09:00 AM
            </Text>
          </Pressable>
          <Pressable>
            <Text
              style={{
                fontSize: 18,
                marginTop: 10,
                marginLeft: 10,
                backgroundColor: '#D9D9D9',
                color: '#000000',
                width: 100,
                height: 30,
                textAlign: 'center',
              }}>
              09:00 AM
            </Text>
          </Pressable>
        </View>

        <View style={{flexDirection: 'row', left: 30}}>
          <Pressable>
            <Text
              style={{
                fontSize: 18,
                marginTop: 10,
                marginLeft: 10,
                backgroundColor: '#D9D9D9',
                color: '#000000',
                width: 100,
                height: 30,
                textAlign: 'center',
              }}>
              09:00 AM
            </Text>
          </Pressable>
          <Pressable>
            <Text
              style={{
                fontSize: 18,
                marginTop: 10,
                marginLeft: 10,
                backgroundColor: '#D9D9D9',
                color: '#000000',
                width: 100,
                height: 30,
                textAlign: 'center',
              }}>
              09:00 AM
            </Text>
          </Pressable>
          <Pressable>
            <Text
              style={{
                fontSize: 18,
                marginTop: 10,
                marginLeft: 10,
                backgroundColor: '#D9D9D9',
                color: '#000000',
                width: 100,
                height: 30,
                textAlign: 'center',
              }}>
              09:00 AM
            </Text>
          </Pressable>
        </View>

        <View style={{marginTop: 10, marginLeft: 10}}>
          <Text style={{fontSize: 20, marginTop: 10}}>Chọn giờ khám :</Text>
          <Text style={{fontSize: 20, marginTop: 10}}>Tuổi người bệnh :</Text>
          <Text style={{fontSize: 20, marginTop: 10}}>Mô tả :</Text>
        </View>
        <LinearGradient colors={['#5200FF', '#FF00B7']} style={styles.btn1}>
          <Pressable>
            <Text style={{color: '#fff', fontSize: 20}}>Đặt lịch khám</Text>
          </Pressable>
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

export default Lich_kham;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    backgroundColor: '#5200FF',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn1: {
    backgroundColor: '#5200FF',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    marginTop: 50,
    borderRadius: 10,
  },
});
