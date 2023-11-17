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

//login, register => stack
const Stack = createNativeStackNavigator();
const Users = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Forgot_Password" component={Forgot_Password} />
      <Stack.Screen name="Login" component={Login} />
      
    </Stack.Navigator>
    </NavigationContainer>
  );
};
//Main => tab
const Tab = createBottomTabNavigator();
const Main = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Lich_kham} />

    </Tab.Navigator>
  );
};

const AppNavigator = () => {
   
  const {isLogin} = useContext(Context);
  return
    (
        <>
        {
            isLogin == false ? <Users /> : <Main />
        }
        </>

    )
    }    
export default AppNavigator;

const styles = StyleSheet.create({});
