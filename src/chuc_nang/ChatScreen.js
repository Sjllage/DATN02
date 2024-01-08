import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';
import ImagePicker, { launchCamera } from 'react-native-image-picker';
import { PermissionsAndroid } from 'react-native';
import cameraImage from '../img/camera.png';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Set the initial system message when the component mounts
    setMessages([{ id: 1, text: 'Xin chào, Tôi có thể hỗ trợ gì cho anh/chị?', type: 'received' }]);
  }, []);
  const capture = async () => {
    const result = await launchCamera();
    console.log(result);
  }
  const sendMessage = () => {
    if (inputMessage.trim() !== '' || selectedImage) {
      const userMessage = {
        id: messages.length + 1,
        text: inputMessage,
        type: 'sentText',
      };

      // Add user's message to the chat
      setMessages([userMessage, ...messages]);
      setInputMessage('');
      setSelectedImage(null); // Clear selectedImage after sending

      // Simulate a response from the other side
      const responseMessage = {
        id: messages.length + 2,
        text: 'Cảm ơn đã liên hệ. Chúng tôi sẽ phản hồi sớm nhất có thể!',
        type: 'received',
      };

      // Add the simulated response to the chat after a short delay
      // setTimeout(() => {
      //   setMessages([responseMessage, ...messages]);
      // }, 1000); // Adjust the delay time as needed
    }
  };

  const pickImage = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Permission required',
          message: 'This app needs access to your photos.',
        }
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        ImagePicker.showImagePicker((response) => {
          if (!response.didCancel && !response.error) {
            setSelectedImage(response);
          }
        });
      } else {
        console.log('Permission denied');
      }
    } catch (error) {
      console.error('Error picking image:', error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={item.type === 'sentText' || item.type === 'sentImage' ? styles.sentMessage : styles.receivedMessage}>
      {item.type === 'sentText' || item.type === 'received' ? (
        <Text style={styles.messageText}>{item.text}</Text>
      ) : (
        <Image source={{ uri: item.image }} style={styles.messageImage} />
      )}
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Hệ thống Y tế Tagota</Text>
      </View>

      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        inverted
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={inputMessage}
          onChangeText={(text) => setInputMessage(text)}
        />

        {selectedImage ? (
          <Image source={{ uri: selectedImage.uri }} style={styles.selectedImage} />
        ) : (
          <TouchableOpacity onPress={capture}>
            <Image source={cameraImage} style={styles.cameraImage} />
          </TouchableOpacity>
        )}

        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Text style={styles.sendButtonText}>{selectedImage ? 'Send' : 'Send '}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 16,
  },
  header: {
    backgroundColor: '#32CD32',
    padding: 16,
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 8,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  sentMessage: {
    backgroundColor: '#fff', // Đổi màu nền thành trắng
    color: '#000000', // Đổi màu chữ thành đen
    padding: 10,
    borderRadius: 8,
    maxWidth: '80%',
    alignSelf: 'flex-end',
    marginVertical: 5,
  },
  receivedMessage: {
    backgroundColor: '#4CAF50', // Đổi màu nền thành màu xanh lá cây (hoặc màu nền mà bạn mong muốn)
    color: '#ffffff', // Đổi màu chữ thành trắng
    padding: 10,
    borderRadius: 8,
    maxWidth: '80%',
    alignSelf: 'flex-start',
    marginVertical: 5,
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 8,
  },
  input: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginRight: 8,
    fontSize: 16,
    color: '#000000', // Đổi màu chữ thành đen
  },
  sendButton: {
    backgroundColor: '#32CD32',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cameraImage: {
    width: 30,
    height: 30,
    marginRight: 8,
  },
  messageImage: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
});


