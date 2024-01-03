import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ViewPropTypes from 'deprecated-react-native-prop-types';


const Lichsukham = (props) => {
  const dulieu = props;

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#5200FF', '#FF00B7']} style={styles.header}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Lịch sử khám</Text>
        </Pressable>
      </LinearGradient>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {[...Array(4).keys()].map((index) => (
          <View key={index} style={styles.recordContainer}>
            <Text style={styles.recordLabel}>Họ tên đầy đủ:</Text>
            <Text style={styles.recordText}>Ngày sinh:</Text>
            <Text style={styles.recordText}>SĐT:</Text>
            <Text style={styles.recordText}>Lý do khám:</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft:'10'
  },
  header: {
    backgroundColor: '#5200FF',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:'10'
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft:'10'
  },
  contentContainer: {
    paddingVertical: 10,
    alignItems: 'center',
    marginLeft:'10'

  },
  recordContainer: {
    marginLeft:'10',
    flexDirection: 'column',
    alignItems: 'flex-start', // Align text to the left
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#5200FF',
    height: 100,
    width: '80%',
    marginVertical: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  recordLabel: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 16,
  },
  recordText: {
    marginBottom: 5,
    fontSize: 14,
  },
});

export default Lichsukham;
