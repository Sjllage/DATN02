import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const Home = () => {
  const carouselItems = [
    { id: 1, image: require('../img/slide.jpg') },
    { id: 2, image: require('../img/slide.jpg') },
    { id: 3, image: require('../img/slide.jpg') },
  ];

  const data = [
    { id: '1', title: 'Vi khuẩn Hib hình thành thế nào' },
    { id: '2', title: 'Sau khi điều trị suy tim có nên bổ sung vitamin D hay không' },
    { id: '3', title: '7 bài tập thể dục cho bệnh nhân hồi phục sau cơn đau tim' },
    // Add more items as needed
  ];

  const renderCarouselItem = (item) => (
    <View key={item.id} style={styles.carouselItemContainer}>
      <Image source={item.image} style={styles.carouselItemImage} />
    </View>
  );

  const renderFlatListItem = ({ item }) => (
    <TouchableOpacity style={styles.flatListItem}>
      <Text style={styles.flatListItemText}>{item.title}</Text>
      {/* Add more content as needed */}
    </TouchableOpacity>
  );

  const renderFlatListHeader = () => (
    <View style={styles.flatListHeader}>
      <Text style={styles.flatListHeaderText}>Tin mới nhất</Text>
    </View>
  );

  const AppGrid = () => {
    const navigation = useNavigation(); // Use useNavigation to get the navigation object
  
    const handlePress = (id) => {
      if (id === '7') {
        navigation.navigate('FeedbackScreen');
      }
     
      if (id === '5') {  // Corrected: Remove the extra space after '4'
        navigation.navigate('Lich_kham');
      }
      if (id === '8') {  // Corrected: Remove the extra space after '4'
        navigation.navigate('ProfileScreen');
      }
      if (id === '1') {  // Corrected: Remove the extra space after '4'
        navigation.navigate('ChatScreen');
      }
      // Handle other items as needed
    };
  
    const data1 = [
      { id: '1', title: 'Liên Hệ', image: require('../img/ic_chiso1.png') },
      // { id: '2', title: 'Tin tức', image: require('../img/ic_chiso1.png') },
      { id: '5', title: 'Đặt lịch', image: require('../img/ic_chiso1.png') },
      { id: '7', title: 'Đánh giá', image: require('../img/ic_chiso1.png') },
      { id: '8', title: 'Hồ sơ', image: require('../img/ic_chiso1.png') },
      // Add more items as needed
    ];
  
    return (
      <View style={styles.appGridContainer}>
        {data1.map((item) => (
          <TouchableOpacity key={item.id} onPress={() => handlePress(item.id)}>
            <View style={styles.gridItem}>
              <Image source={item.image} style={styles.gridItemImage} />
              <Text style={styles.gridItemText}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>Tagoca</Text>
        <Text style={styles.subtitle}>Chăm sóc bằng tài năng, y đức và sự thấu cảm</Text>

        <Swiper style={styles.carousel} showsButtons={false} autoplay>
          {carouselItems.map(renderCarouselItem)}
        </Swiper>

        <AppGrid />

        <FlatList
          data={data}
          ListHeaderComponent={renderFlatListHeader}
          renderItem={renderFlatListItem}
          keyExtractor={(item) => item.id}
          style={styles.flatList}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    flexDirection: 'column',
  },
  text: {
    fontFamily: 'Popins',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'Popins',
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  carousel: {
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
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
  flatList: {
    flex: 1,
    marginTop: 10,
  },
  flatListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  flatListItemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  flatListHeader: {
    marginVertical: 10,
  },
  flatListHeaderText: {
    marginLeft: 10,
    fontSize: 24,
    fontWeight: 'bold',
  },
  appGridContainer: {
    marginTop: 10,
    flexDirection: 'row', // Thay đổi hướng của flex container thành dòng
    flexWrap: 'wrap', // Cho phép các item "tự động xuống dòng" khi không đủ không gian
    justifyContent: 'space-between', // Canh giữa giữa các cột
  },
  gridItem: {
    width: '48%', // Độ rộng của mỗi item (2 cột)
    aspectRatio: 1, // Đảm bảo item có kích thước vuông
    marginVertical: 8,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Đổ bóng
  },
  gridItemText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
  },
  gridItemImage: {
    width: '60%', // Độ rộng của hình ảnh trong item
    height: '60%', // Chiều cao của hình ảnh trong item
    marginBottom: 8,
    resizeMode: 'contain',
  },
});

export default Home;