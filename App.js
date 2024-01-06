import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import Register from './src/login/Register';
import Forgot_Password from './src/login/Forgot_Password';
import Lichsukham from './src/chuc_nang/Lichsukham';
import ChatScreen from './src/chuc_nang/ChatScreen';
import Listbenhan from './src/chuc_nang/ListBenhan';
import Don_thuoc from './src/chuc_nang/Don_thuoc';
import Lich_kham from './src/chuc_nang/Lich_kham';
import infomation from './src/chuc_nang/Information';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/login/Login';
import {AppContext, AppContextProvider} from './src/ultil/AppContext';
import Home from './src/chuc_nang/Home';
import FeedbackScreen from './src/chuc_nang/FeedbackScreen';
import SocialScreen from './src/chuc_nang/SocialScreem';
import BmiCalculatorScreen from './src/chuc_nang/BmiCalculatorScreen';
import ProfileScreen from './src/chuc_nang/ProfileScreen';
import ChatListScreen from './src/chuc_nang/ChatListScreen';
import AppGrid from './src/Grid/AppGrid';
import FeedbackListingScreen from './src/chuc_nang/FeedbackListingScreen';
import ChangedProfileScreen from './src/chuc_nang/ChangedProfileScreen';
import ResetPasswordScreen from './src/chuc_nang/ResetPasswordScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <AppContextProvider>
      
      <NavigatorWithAuth />
    </AppContextProvider>
    
  );
};

export default App;

const styles = StyleSheet.create({});

const NavigatorWithAuth = () => {
  const {isLogin} = useContext(AppContext);
  console.log('isLogin:>> ', isLogin);

  if (isLogin) {
    return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Lich_kham" component={Lich_kham} />
          <Tab.Screen name="Ds_Lich_kham" component={Lichsukham} />
          {/* <Tab.Screen name="Listbenhan" component={Listbenhan} /> */}
          <Tab.Screen name="Listdonthuoc" component={Don_thuoc} />
          {/* <Tab.Screen name="Infomation" component={Infomation} /> */}
          <Tab.Screen name="ChatListScreen" component={ChatListScreen} />
          <Tab.Screen name="ChatScreen" component={ChatScreen} />
          {/* <Tab.Screen name="FeedbackListingScreen" component={FeedbackListingScreen} /> */}
          {/* <Tab.Screen name="SocialScreen" component={SocialScreen} /> */}
          {/* <Tab.Screen name="BmiCalculatorScreen" component={BmiCalculatorScreen} /> */}
          {/* <Tab.Screen name="FeedbackScreen" component={FeedbackScreen} /> */}
          <Tab.Screen name="ChangedProfileScreen" component={ChangedProfileScreen} />
          <Tab.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
          <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
          <Tab.Screen name="Register" component={Register} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Register" component={Register} />
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Lich_kham" component={Lich_kham} />
        <Tab.Screen name="ChatScreen" component={ChatScreen} />
        <Tab.Screen name="Ds_Lich_kham" component={Lichsukham} />
        {/* <Tab.Screen name="ChatListScreen" component={ChatListScreen} /> */}
        {/* <Tab.Screen name="Listbenhan" component={Listbenhan} /> */}
        {/* <Tab.Screen name="SocialScreem" component={SocialScreen} /> */}
        <Tab.Screen name="FeedbackScreen" component={FeedbackScreen} />
        {/* <Tab.Screen name="BmiCalculatorScreen" component={BmiCalculatorScreen} /> */}
        {/* <Tab.Screen name="Listdonthuoc" component={Don_thuoc} /> */}
        <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
        <Tab.Screen name="ChangedProfileScreen" component={ChangedProfileScreen} />
        <Tab.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
        {/* <Tab.Screen name="FeedbackListingScreen" component={FeedbackListingScreen} /> */}
        {/* <Tab.Screen name="infomation" component={infomation} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};
