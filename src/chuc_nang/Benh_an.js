import {StyleSheet, Text, View, Pressable, ScrollView} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Benh_an = (props) => {

const {dulieu}= props;

  return (
    <View>
     <LinearGradient colors={['#5200FF', '#FF00B7']} style={styles.btn}>
        <Pressable>
          <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
            Bệnh án
          </Text>
        </Pressable>
      </LinearGradient>
      <ScrollView>
        <View>
          <View style={styles.sectionStyle}>
                <View>
                  <Text>Bệnh nhân:</Text>
                  <Text>Giới tính: </Text>
                  <Text>Phòng Khám:</Text>
                  <Text>Ngày nhập viện: </Text>
                  <Text>Ngày xuất viện: </Text>
                  <Text>Bệnh án: </Text>
                  <Text>Thuốc đã kê đơn: </Text>
                  <Text>Trạng thái: </Text>
                  <Text>ngày tạo bệnh án:</Text>
                </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Benh_an;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
    height: 200,
    width: 320,
    margin: 10,
    borderRadius: 10,
    left: 30,
  },
});
