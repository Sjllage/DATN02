import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import Swiper from 'react-native-swiper';


const Home = () => {
  const carouselItems = [
    { id: 1, image: require('../img/slide.jpg') },
    { id: 2, image: require('../img/slide.jpg') },
    { id: 3, image: require('../img/slide.jpg') },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tagoca</Text>
      <Text>Chăm sóc bằng tài năng, y đức và {'\n'} sự thấu cảm</Text>

      <Swiper style={styles.carousel} showsButtons={false} autoplay>
        {carouselItems.map(item => (
          <View key={item.id} style={styles.carouselItemContainer}>
            <Image source={item.image} style={styles.carouselItemImage} />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginStart: 10,
    marginEnd: 10,
    flexDirection: 'column',
  },
  text: {
    fontFamily: 'Popins',
    fontSize: 30,
    fontWeight: 'bold',
  },
  carousel: {
    height: 200,
  },
  carouselItemContainer: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  carouselItemImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

export default Home;
