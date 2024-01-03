// AppGrid.js
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AppGrid = () => {
  const navigation = useNavigation();

  const handlePress = (id) => {
    if (id === '7') {
      navigation.navigate('FeedbackScreen');
    }
    if (id === '4') {
      navigation.navigate('SocialScreen');
    }
    // Handle other items as needed
  };

  const data1 = [
    // ... your data array
  ];

  return (
    <View>
      {data1.map((item) => (
        <TouchableOpacity key={item.id} onPress={() => handlePress(item.id)}>
          <View>
            <Image source={item.image} />
            <Text>{item.title}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default AppGrid;
