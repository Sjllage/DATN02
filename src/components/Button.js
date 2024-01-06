import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';
import {Colors} from '../utils/colors';
import {Typography} from '../utils/typography';

const Button = ({title, onPress, backgroundColor}) => {
  return (
    <Pressable
      style={[styles.button, {backgroundColor: backgroundColor}]}
      onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    paddingVertical: 17,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    ...Typography.subheadBold,
    color: Colors.white,
  },
});

export default Button;
