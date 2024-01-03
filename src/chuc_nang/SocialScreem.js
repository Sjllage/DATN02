import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, FlatList, StyleSheet, ScrollView } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const SocialScreen = () => {
  const [postText, setPostText] = useState('');
  const [postImage, setPostImage] = useState(null);
  const [posts, setPosts] = useState([]);

  const handlePost = () => {
    if (postText.trim() === '') {
      // Bạn có thể thêm xử lý thông báo lỗi nếu câu hỏi trống
      return;
    }

    // Cập nhật danh sách bài đăng
    const newPost = { id: String(posts.length + 1), text: postText, image: postImage, answers: [] };
    setPosts((prevPosts) => [...prevPosts, newPost]);

    // Xóa nội dung câu hỏi sau khi đăng
    setPostText('');
    setPostImage(null);
  };

  const handleChooseImage = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        // Set ảnh đã chọn vào state
        setPostImage(response.uri);
      }
    });
  };

  const renderPost = ({ item }) => (
    <View style={styles.postContainer}>
      <Text style={styles.postText}>{item.text}</Text>
      {item.image && <Image source={{ uri: item.image }} style={styles.postImage} />}
      {/* Hiển thị câu trả lời bên dưới nếu có */}
      <FlatList
        data={item.answers}
        renderItem={({ item: answer }) => <Text style={styles.answerText}>{answer}</Text>}
        keyExtractor={(answer) => answer}
      />
      <TextInput
        style={styles.answerInput}
        placeholder="Your answer"
        onChangeText={(text) => {/* Lưu câu trả lời tạm thời ở đây */}}
      />
      <Button title="Reply" onPress={() => {/* Gửi câu trả lời ở đây */}} />
    </View>
  );

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Cộng đồng hỏi đáp Tagoca</Text>
      <TextInput
        style={styles.input}
        placeholder="What's on your mind?"
        multiline
        value={postText}
        onChangeText={setPostText}
      />
      {postImage && <Image source={{ uri: postImage }} style={styles.previewImage} />}
      {/* <Button title="Add Image" onPress={handleChooseImage} /> */}
      <Button title="Post" onPress={handlePost} style={styles.button} />

      <Text style={styles.title}>Recent Posts</Text>
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        style={styles.postList}
      />
    </View>
    </ScrollView>
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
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    minHeight: 100,
    marginTop:8,
  },
  previewImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
    resizeMode: 'cover',
  },
  postList: {
    marginBottom: 16,
  },
  postContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  postText: {
    fontSize: 16,
    marginBottom: 8,
  },
  postImage: {

    width: '100%',
    height: 200,
    borderRadius: 8,
    marginTop:8,
    marginBottom: 20,
    resizeMode: 'cover',
  },
  answerInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
  },
  answerText: {
    fontSize: 14,
    marginBottom: 8,
  },
  button: {
    marginBottom: 20, // Đặt giá trị margin bottom tùy ý
  },
});

export default SocialScreen;
