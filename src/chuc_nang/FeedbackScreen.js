import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image, StyleSheet } from 'react-native';

const FeedbackScreen = () => {
  const [feedback, setFeedback] = useState('');
  const [starRating, setStarRating] = useState(0);

  const submitFeedback = () => {
    if (feedback.trim() !== '') {
      const message = `Thank you for your feedback!\nYou gave a rating of ${starRating} stars.`;
      Alert.alert('Feedback Submitted', message);
      setFeedback('');
      setStarRating(0);
    } else {
      Alert.alert('Error', 'Please enter your feedback before submitting.');
    }
  };

  const renderRatingImages = () => {
    const ratingImages = [];
    for (let i = 1; i <= 5; i++) {
      ratingImages.push(
        <TouchableOpacity key={i} onPress={() => setStarRating(i)}>
          <Image
            style={[styles.starImage, { tintColor: i <= starRating ? '#f39c12' : '#d3d3d3' }]}
            source={require('../img/bell.png')}
          />
        </TouchableOpacity>
      );
    }
    return ratingImages;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đánh giá dịch vụ tại Tagoca</Text>

      <View style={styles.ratingContainer}>{renderRatingImages()}</View>

      <TextInput
        style={styles.input}
        multiline
        placeholder="Chia sẻ thêm về ý kiến của Quý khách"
        value={feedback}
        onChangeText={(text) => setFeedback(text)}
      />

      <TouchableOpacity style={styles.submitButton} onPress={submitFeedback}>
        <Text style={styles.submitButtonText}>Submit Feedback</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  starImage: {
    width: 30,
    height: 30,
    marginHorizontal: 5,
  },
  input: {
    height: 120,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  submitButton: {
    backgroundColor: '#5200FF',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default FeedbackScreen;
