import {StyleSheet, Text, View, Pressable, ScrollView} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Benh_an = () => {
  const [fruit, setFruit] = useState([{name: 'ssss', key: '1'}]);
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
            {fruit.map(item => {
              return (
                <View key={item.key}>
                  <Text>Bệnh nhân:{item.name} </Text>
                  <Text>Giới tính:{item.name} </Text>
                  <Text>Phòng Khám:{item.name} </Text>
                  <Text>Ngày nhập viện{item.name}: </Text>
                  <Text>Ngày xuất viện:{item.name} </Text>
                  <Text>Bệnh án:{item.name} </Text>
                  <Text>Thuốc đã kê đơn: {item.name}</Text>
                  <Text>Trạng thái: {item.name}</Text>
                  <Text>ngày tạo bệnh án:{item.name}</Text>
                </View>
              );
            })}
          </View>
        </View>
        <View>
          <View style={styles.sectionStyle}>
            {fruit.map(item => {
              return (
                <View key={item.key}>
                  <Text>Bệnh nhân:{item.name} </Text>
                  <Text>Giới tính:{item.name} </Text>
                  <Text>Phòng Khám:{item.name} </Text>
                  <Text>Ngày nhập viện{item.name}: </Text>
                  <Text>Ngày xuất viện:{item.name} </Text>
                  <Text>Bệnh án:{item.name} </Text>
                  <Text>Thuốc đã kê đơn: {item.name}</Text>
                  <Text>Trạng thái: {item.name}</Text>
                  <Text>ngày tạo bệnh án:{item.name}</Text>
                </View>
              );
            })}
          </View>
        </View>
        <View>
          <View style={styles.sectionStyle}>
            {fruit.map(item => {
              return (
                <View key={item.key}>
                  <Text>Bệnh nhân:{item.name} </Text>
                  <Text>Giới tính:{item.name} </Text>
                  <Text>Phòng Khám:{item.name} </Text>
                  <Text>Ngày nhập viện{item.name}: </Text>
                  <Text>Ngày xuất viện:{item.name} </Text>
                  <Text>Bệnh án:{item.name} </Text>
                  <Text>Thuốc đã kê đơn: {item.name}</Text>
                  <Text>Trạng thái: {item.name}</Text>
                  <Text>ngày tạo bệnh án:{item.name}</Text>
                </View>
              );
            })}
          </View>
        </View>
        <View>
          <View style={styles.sectionStyle}>
            {fruit.map(item => {
              return (
                <View key={item.key}>
                  <Text>Bệnh nhân:{item.name} </Text>
                  <Text>Giới tính:{item.name} </Text>
                  <Text>Phòng Khám:{item.name} </Text>
                  <Text>Ngày nhập viện{item.name}: </Text>
                  <Text>Ngày xuất viện:{item.name} </Text>
                  <Text>Bệnh án:{item.name} </Text>
                  <Text>Thuốc đã kê đơn: {item.name}</Text>
                  <Text>Trạng thái: {item.name}</Text>
                  <Text>ngày tạo bệnh án:{item.name}</Text>
                </View>
              );
            })}
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
