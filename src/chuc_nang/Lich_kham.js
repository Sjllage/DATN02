import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const Lich_kham = () => {
  return (
    <View style={styles.container}>
      <View style={styles.btn}>
        <Pressable>
          <Text style={styles.btnText}>Thông tin đặt khám</Text>
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.datePickerContainer}>
          <Text style={styles.label}>Chọn ngày/tháng năm:</Text>
          <TextInput style={styles.input} placeholder="DD/MM/YYYY" />
        </View>

        <View style={styles.timePickerContainer}>
          <Text style={styles.label}>Chọn thời gian cụ thể khám:</Text>
          <View style={styles.timeSlots}>
            <Pressable style={styles.timeSlot}>
              <Text style={styles.timeSlotText}>09:00 AM</Text>
            </Pressable>
            <Pressable style={styles.timeSlot}>
              <Text style={styles.timeSlotText}>10:00 AM</Text>
            </Pressable>
            <Pressable style={styles.timeSlot}>
              <Text style={styles.timeSlotText}>11:00 AM</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.userInfoContainer}>
          <Text style={styles.label}>Thông tin người đặt lịch:</Text>
          <TextInput
            style={styles.input}
            placeholder="Họ tên đầy đủ"
            placeholderTextColor="#A9A9A9"
          />
          <TextInput
            style={styles.input}
            placeholder="Ngày sinh"
            placeholderTextColor="#A9A9A9"
          />
          <TextInput
            style={styles.input}
            placeholder="Số điện thoại"
            placeholderTextColor="#A9A9A9"
          />
          <Text style={styles.label}>Lý do khám:</Text>
          <TextInput
            style={styles.textArea}
            placeholder="* Vui lòng mô tả triệu chứng của bạn và nhu cầu thăm khám"
            multiline
            numberOfLines={4}
          />
        </View>

        <View style={styles.btn1}>
          <TouchableOpacity>
            <Text style={styles.btnText}>Đặt lịch khám</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    backgroundColor: '#32CD32',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn1: {
    backgroundColor: '#32CD32',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    marginTop: 50,
    borderRadius: 10,
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  datePickerContainer: {
    marginTop: 10,
  },
  timePickerContainer: {
    marginTop: 20,
  },
  label: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 0.5,
    height: 40,
    width: '100%',
    marginTop: 5,
    paddingLeft: 10,
    borderRadius: 5,
  },
  timeSlots: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  timeSlot: {
    backgroundColor: '#D9D9D9',
    color: '#000000',
    width: '30%',
    height: 30,
    textAlign: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  timeSlotText: {
    fontSize: 14,
  },
  userInfoContainer: {
    marginTop: 20,
  },
  textArea: {
    borderWidth: 0.5,
    height: 100,
    width: '100%',
    marginTop: 5,
    paddingLeft: 10,
    borderRadius: 5,
  },
});

export default Lich_kham;
