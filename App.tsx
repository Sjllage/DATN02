import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Register from './src/login/Register';
import Forgot_Password from './src/login/Forgot_Password';
import Lichsukham from './src/chuc_nang/Lichsukham';
import Benh_an from './src/chuc_nang/Benh_an';
import Don_thuoc from './src/chuc_nang/Don_thuoc';
import Lich_kham from './src/chuc_nang/Lich_kham';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/login/Login';
import {AppContextProvider} from './src/ultil/AppContext';
import AppNavigator from './src/ultil/AppNavigator';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={Lich_kham} />
        <Tab.Screen name="Lichsukham" component={Lichsukham} />
        <Tab.Screen name="Benh_an" component={Benh_an} />
        <Tab.Screen name="Don_thuoc" component={Don_thuoc} />
        
        <Tab.Screen name="Register" component={Register} />
        <Tab.Screen name="Forgot_Password" component={Forgot_Password} />
        <Tab.Screen name="Login" component={Login} />
        

 
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
