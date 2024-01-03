// BmiCalculatorScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const BmiCalculatorScreen = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmiResult, setBmiResult] = useState(null);

  const calculateBMI = () => {
    // Thực hiện tính toán BMI ở đây (BMI = cân nặng / (chiều cao * chiều cao))
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);

    // Đánh giá BMI và cập nhật kết quả
    if (bmi < 18.5) {
      setBmiResult(`BMI: ${bmi.toFixed(2)} - Underweight`);
    } else if (bmi >= 18.5 && bmi < 24.9) {
      setBmiResult(`BMI: ${bmi.toFixed(2)} - Normal weight`);
    } else if (bmi >= 25 && bmi < 29.9) {
      setBmiResult(`BMI: ${bmi.toFixed(2)} - Overweight`);
    } else {
      setBmiResult(`BMI: ${bmi.toFixed(2)} - Obesity`);
    }

    // Lưu thời gian đo BMI (có thể sử dụng thư viện như moment.js)
    const measurementTime = new Date().toLocaleString();
    console.log('BMI measured at:', measurementTime);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BMI Calculator</Text>
      <TextInput
        placeholder="Nhập chiều cao"
        keyboardType="numeric"
        style={styles.input}
        value={height}
        onChangeText={(text) => setHeight(text)}
      />
      <TextInput
        placeholder="Nhập cân nặng (kg)"
        keyboardType="numeric"
        style={styles.input}
        value={weight}
        onChangeText={(text) => setWeight(text)}
      />
      <Button title="Calculate BMI cm/kg" onPress={calculateBMI} />
      {bmiResult && <Text style={styles.result}>{bmiResult}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
  result: {
    fontSize: 18,
    marginTop: 16,
  },
});

export default BmiCalculatorScreen;
