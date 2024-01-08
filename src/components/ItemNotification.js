import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import images from '../utils/images';
import {Colors} from '../utils/colors';
import {Typography} from '../utils/typography';
import { displayPostedTime } from '../utils/time';

const renderItem = ({item}) => (
  <View style={styles.item}>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View
          style={{
            borderRadius: 200,
            overflow: 'hidden',
            marginRight: 10,
            width: 40,
            height: 40,
          }}>
          <Image
            source={images.icon_company}
            style={{width: '100%', height: '100%'}}
          />
        </View>
        <View>
          <Text
            style={{
              ...Typography.subheadBold,
              color: Colors.secondary,
              maxWidth: 230,
            }}>
            {item.title}
          </Text>
        </View>
      </View>

      <View>
        <Image source={images.icon_options} style={{width: 20, height: 20}} />
      </View>
    </View>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Pressable
      style={{
        borderWidth: 1,
        borderColor: "#150B3D",
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical:8,
      }}>
        <Text>See notification</Text>
      </Pressable>
      <Text style={{fontFamily: 'Roboto-Regular', fontSize: 12}}>{displayPostedTime(item.date)}</Text>
    </View>
  </View>
);

export default renderItem;

const styles = StyleSheet.create({
  item: {
    position: 'relative',
    justifyContent: 'space-around',
    width: '100%',
    height: 143,
    borderRadius: 20,
    backgroundColor: Colors.white,
    marginBottom: 30,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
