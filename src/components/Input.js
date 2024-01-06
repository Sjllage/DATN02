import React from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';
import { Colors } from '../utils/colors';
import {Typography} from '../utils/typography';

const Input = ({ label ,placeholder, secureTextEntry, style, ...restProps }) => {
  return (
    <View style={[styles.container,style]}>
        <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        {...restProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label:{
    ...Typography.subheadBold,
    color: Colors.secondary,
    marginBottom: 11,
  },
  input: {
    borderRadius: 8,
    fontSize: 12,
    color: "#0d004099",
    backgroundColor: Colors.white,
    paddingVertical: 12,
    paddingLeft: 16,
  },
});

export default Input;
