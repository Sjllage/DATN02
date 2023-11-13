import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Lichsukham = props => {
  const dulieu = props;

  return (
    <View>
      <LinearGradient colors={['#5200FF', '#FF00B7']} style={styles.btn}>
        <Pressable>
          <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
            Lịch sử khám
          </Text>
        </Pressable>
      </LinearGradient>

      <View>
        <ScrollView>
          <View style={styles.sectionStyle}>
            <Text>Ngày khám: </Text>
            <Text>Thời giam khám: </Text>
            <Text>Bác sĩ khám: </Text>
          </View>
          <View style={styles.sectionStyle}>
            <Text>Ngày khám: </Text>
            <Text>Thời giam khám: </Text>
            <Text>Bác sĩ khám: </Text>
          </View>
          <View style={styles.sectionStyle}>
            <Text>Ngày khám: </Text>
            <Text>Thời giam khám: </Text>
            <Text>Bác sĩ khám: </Text>
          </View>
          <View style={styles.sectionStyle}>
            <Text>Ngày khám: </Text>
            <Text>Thời giam khám: </Text>
            <Text>Bác sĩ khám: </Text>
          </View>
          <View style={styles.sectionStyle}>
            <Text>Ngày khám: </Text>
            <Text>Thời giam khám: </Text>
            <Text>Bác sĩ khám: </Text>
          </View>
          <View style={styles.sectionStyle}>
            <Text>Ngày khám: </Text>
            <Text>Thời giam khám: </Text>
            <Text>Bác sĩ khám: </Text>
          </View>
          <View style={styles.sectionStyle}>
            <Text>Ngày khám: </Text>
            <Text>Thời giam khám: </Text>
            <Text>Bác sĩ khám: </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Lichsukham;

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
    height: 80,
    width: 320,
    margin: 10,
    borderRadius: 10,
    left: 30,
  },
});
