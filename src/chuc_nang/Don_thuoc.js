import {StyleSheet, Text, View, Pressable, ScrollView} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Don_thuoc = () => {


  return (
    <View>
      <LinearGradient colors={['#5200FF', '#FF00B7']} style={styles.btn}>
        <Pressable>
          <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
            Đơn thuốc
          </Text>
        </Pressable>
      </LinearGradient>

      <ScrollView>
        
          <View style={styles.sectionStyle}>
            <Text>Tên đơn thuốc: </Text>
            <Text>Số lượng thuốc: </Text>
            <Text>Chí tiết: </Text>
            <Text>Tên thuốc: </Text>
            <Text>Tổng tiền: </Text>
          </View>
          <View style={styles.sectionStyle}>
            <Text>Tên đơn thuốc: </Text>
            <Text>Số lượng thuốc: </Text>
            <Text>Chí tiết: </Text>
            <Text>Tên thuốc: </Text>
            <Text>Tổng tiền: </Text>
          </View>
          <View style={styles.sectionStyle}>
            <Text>Tên đơn thuốc: </Text>
            <Text>Số lượng thuốc: </Text>
            <Text>Chí tiết: </Text>
            <Text>Tên thuốc: </Text>
            <Text>Tổng tiền: </Text>
          </View>
          <View style={styles.sectionStyle}>
            <Text>Tên đơn thuốc: </Text>
            <Text>Số lượng thuốc: </Text>
            <Text>Chí tiết: </Text>
            <Text>Tên thuốc: </Text>
            <Text>Tổng tiền: </Text>
          </View>
          <View style={styles.sectionStyle}>
            <Text>Tên đơn thuốc: </Text>
            <Text>Số lượng thuốc: </Text>
            <Text>Chí tiết: </Text>
            <Text>Tên thuốc: </Text>
            <Text>Tổng tiền: </Text>
          </View>
        
      </ScrollView>
    </View>
  );
};

export default Don_thuoc;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  btn: {
    backgroundColor: '#5200FF',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },

  sectionStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#5200FF',
    height: 120,
    width: 320,
    margin: 10,
    borderRadius: 10,
    left: 30,
  },
});
