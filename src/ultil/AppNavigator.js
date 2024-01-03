import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import Register from '../login/Register';
import Forgot_Password from '../login/Forgot_Password';
import Login from '../login/Login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Lich_kham from '../chuc_nang/Lich_kham';
import { Context } from './AppContext';
import { NavigationContainer } from '@react-navigation/native';
import FeedbackScreen from '../chuc_nang/FeedbackScreen';
import AppGrid from '../Grid/AppGrid';
import FeedbackListingScreen from '../chuc_nang/FeedbackListingScreen';
import Home from '../chuc_nang/Home';

// login, register => stack
const Stack = createNativeStackNavigator();
const Users = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Register" component={Register} />
      {/* <Stack.Screen name="Forgot_Password" component={Forgot_Password} /> */}
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

// Main => tab
const Tab = createBottomTabNavigator();
const Main = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="ChangedProfileScreen" component={ChangedProfileScreen} />
    </Tab.Navigator>
  );
};

// AppGridStack => stack
const AppGridStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="AppGrid"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="AppGrid" component={AppGrid} />
      <Stack.Screen name="FeedbackScreen" component={FeedbackScreen} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  const {isLogin} = useContext(Context);
  return (
    <NavigationContainer>
      {isLogin == false ? (
        <Users />
      ) : (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Lich_kham} />
          <Tab.Screen name="AppGrid" component={AppGridStack} />
          <Tab.Screen name="FeedbackList" component={FeedbackListingScreen} />
          <Stack.Screen name="TabNavigator" component={TabNavigator} />
        
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
