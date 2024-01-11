import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
    const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInformation}>
        <View style={styles.avatarContainer}>
          <Image
            source={require('../img/ic_user1.png')}
            style={styles.avatar}
          />
        </View>
        <View style={styles.userInfoContainer}>
          <Text style={[styles.title, { marginTop: 15, marginBottom: 5 }]}>Nguyễn Tuấn Kiệt</Text>
        </View>
      </View>
      <View style={styles.userInfoContainer}>
        <View style={styles.row}>
          <Text style={styles.infoText}>0905583818</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.infoText}>kietzpp@gmail.com</Text>
        </View>
      </View>
      <View style={styles.menuWrapper}>
        <TouchableOpacity onPress={() => {navigation.navigate('ResetPasswordScreen')}}>
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>Đổi mật khẩu</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate('ChangedProfileScreen')}}>
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>Cập nhật thông tin cá nhân</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>Đăng xuất</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  userInformation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  avatarContainer: {
    marginRight: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  userInfoContainer: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  caption: {
    fontSize: 18,
    color: '#777',
  },
  row: {
    marginTop: 10,
  },
  infoText: {
    color: '#777777',
    fontSize: 16,
    marginLeft: 20,
  },
  menuWrapper: {
    marginTop: 20,
  },
  menuItem: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#32CD32',
    borderRadius: 8,
    marginBottom: 10,
  },
  menuItemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default ProfileScreen;
