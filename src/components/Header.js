import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {Colors} from '../utils/colors';
import {Typography} from '../utils/typography';
import images from '../utils/images';

const Header = ({title, navigation}) => {
  return (
    <View style={{backgroundColor: Colors.white}}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Pressable
          onPress={() => {
            navigation.navigate('Setting');
          }}>
          <Image source={images.icon_setting} />
        </Pressable>
      </View>
      <View style={{borderBottomWidth: 1, borderColor: Colors.gray_200}}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 60,
    marginHorizontal: 20,
    marginBottom: 22,
    justifyContent: 'space-between',
  },
  title: {
    ...Typography.title2,
    color: Colors.secondary,
  },
});

export default Header;
