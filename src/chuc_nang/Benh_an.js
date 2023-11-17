import {StyleSheet, Text, View, Pressable, ScrollView} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Benh_an = (props) => {

const {dulieu, navigation}= props;
    const { name } = product;
    console.log(product);
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.textTile}>{name}</Text>
        </View>
      </View>
    </TouchableOpacity>
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
