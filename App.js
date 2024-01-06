import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import Register from './src/login/Register';
import Forgot_Password from './src/login/Forgot_Password';
import Lichsukham from './src/chuc_nang/Lichsukham';
import ChatScreen from './src/chuc_nang/ChatScreen';
import Listbenhan from './src/chuc_nang/ListBenhan';
import Don_thuoc from './src/chuc_nang/Don_thuoc';
import Lich_kham from './src/chuc_nang/Lich_kham';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/login/Login';
import {AppContext, AppContextProvider} from './src/ultil/AppContext';
import Home from './src/chuc_nang/home';
import FeedbackScreen from './src/chuc_nang/FeedbackScreen';
import SocialScreen from './src/chuc_nang/SocialScreem';
import BmiCalculatorScreen from './src/chuc_nang/BmiCalculatorScreen';
import ProfileScreen from './src/chuc_nang/ProfileScreen';
import ChatListScreen from './src/chuc_nang/ChatListScreen';
import AppGrid from './src/Grid/AppGrid';
import FeedbackListingScreen from './src/chuc_nang/FeedbackListingScreen';
import ChangedProfileScreen from './src/chuc_nang/ChangedProfileScreen';
import ResetPasswordScreen from './src/chuc_nang/ResetPasswordScreen';
import images from './src/ultil/images';
import { Colors } from './src/util/colors';

import TabIcon from './src/components/TabNav';

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
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={Home} 
        options={{
          tabBarIcon: ({focused}) => <TabIcon focused={focused} icon_ed={images.icon_home_ed} icon={images.icon_home} />,
        }}/>
        <Tab.Screen name="Lich_kham" component={Lich_kham} 
        options={{
          tabBarIcon: ({focused}) => <TabIcon focused={focused} icon_ed={images.icon_calendar} icon={images.icon_calendar} />,
        }}/>
        <Tab.Screen name="ChatScreen" component={ChatScreen} 
        options={{
          tabBarIcon: ({focused}) => <TabIcon focused={focused} icon_ed={images.icon_messenger} icon={images.icon_messenger}  />,
        }}/>
        <Tab.Screen name="Ds_Lich_kham" component={Lichsukham} 
        options={{
          tabBarIcon: ({focused}) => <TabIcon focused={focused} icon_ed={images.icon_options} icon={images.icon_options}  />,
        }}/>
        {/* <Tab.Screen name="ChatListScreen" component={ChatListScreen} /> */}
        {/* <Tab.Screen name="Listbenhan" component={Listbenhan} /> */}
        {/* <Tab.Screen name="SocialScreem" component={SocialScreen} /> */}
        <Tab.Screen name="FeedbackScreen" component={FeedbackScreen} 
        options={{
          tabBarIcon: ({focused}) => <TabIcon focused={focused} icon_ed={images.icon_bell_ed} icon={images.icon_bell}  />,
        }}/>
        {/* <Tab.Screen name="BmiCalculatorScreen" component={BmiCalculatorScreen} /> */}
        {/* <Tab.Screen name="Listdonthuoc" component={Don_thuoc} /> */}
        <Tab.Screen name="ProfileScreen" component={ProfileScreen} 
        options={{
          tabBarIcon: ({focused}) => <TabIcon focused={focused} icon_ed={images.icon_user_ed} icon={images.icon_user}  />,
        }}/>
        <Tab.Screen name="ChangedProfileScreen" component={ChangedProfileScreen} 
        options={{
          tabBarIcon: ({focused}) => <TabIcon focused={focused} icon_ed={images.Success_Email} icon={images.Success_Email} />,
        }}/>
        <Tab.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} 
        options={{
          tabBarIcon: ({focused}) => <TabIcon focused={focused} icon_ed={images.Forgot_Pass} icon={images.Forgot_Pass}  />,
        }}/>
        {/* <Tab.Screen name="FeedbackListingScreen" component={FeedbackListingScreen} /> */}
        {/* <Tab.Screen name="infomation" component={infomation} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};
