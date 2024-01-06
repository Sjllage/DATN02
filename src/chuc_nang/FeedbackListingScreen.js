// FeedbackListingScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const FeedbackListingScreen = () => {
  const [feedbackList, setFeedbackList] = useState([]);

  // Assume getFeedbackList is a function that fetches the feedback data
  const getFeedbackList = async () => {
    // Fetch feedback data from your data source (API, local storage, etc.)
    // For now, let's assume it's a static array
    const staticFeedbackList = [
      { id: '1', rating: 5, comment: 'Excellent service!', date: '2024-01-15' },
      { id: '2', rating: 4, comment: 'Good experience overall.', date: '2024-01-14' },
      // Add more feedback items as needed
    ];

    setFeedbackList(staticFeedbackList);
  };

  useEffect(() => {
    getFeedbackList();
  }, []);

  const renderFeedbackItem = ({ item }) => (
    <View style={styles.feedbackItem}>
      <Text style={styles.ratingText}>Rating: {item.rating} stars</Text>
      <Text style={styles.commentText}>{item.comment}</Text>
      <Text style={styles.dateText}>Date: {item.date}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feedback Listing</Text>
      <FlatList
        data={feedbackList}
        renderItem={renderFeedbackItem}
        keyExtractor={(item) => item.id}
        style={styles.flatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  feedbackItem: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
  },
  ratingText: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  commentText: {
    marginBottom: 8,
  },
  dateText: {
    color: '#777',
  },
  flatList: {
    flex: 1,
    marginTop: 10,
  },
});

export default FeedbackListingScreen;
