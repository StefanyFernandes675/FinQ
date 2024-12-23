import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-get-random-values';

import {Image} from 'react-native';

import SplashScreen from './screens/SplashScreen';
import OnBoarding from './screens/OnBoarding/OnBoarding';
import Login from './screens/Login/Login';
import ForgotPassword from './screens/ForgotPassword/ForgotPassword';
import Code from './screens/Code/Code';
import NewPassword from './screens/NewPassword/NewPassword';
import Welcome from './screens/Welcome/Welcome';
import Register from './screens/Register/Register';
import WelcomeRegister from './screens/WelcomeRegister/WelcomeRegister';
import Home from './screens/Home/Home';
import Quiz from './screens/Quiz/Quiz';
import Profile from './screens/Profile/Profile';
import Ranking from './screens/Ranking/Ranking';
import Questions from './screens/Questions/Questions';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        let iconSource;

        if (route.name === 'Home') {
          iconSource = focused
            ? require('./assets/icon-home-ativo.png')
            : require('./assets/icon-home-inativo.png');
        } else if (route.name === 'Practice') {
          iconSource = focused
            ? require('./assets/icon-practice-ativo.png')
            : require('./assets/icon-practice-inativo.png');
        } else if (route.name === 'Ranking') {
          iconSource = focused
            ? require('./assets/icon-ranking-ativo.png')
            : require('./assets/icon-ranking-inativo.png');
        } else if (route.name === 'Profile') {
          iconSource = focused
            ? require('./assets/icon-profile-ativo.png')
            : require('./assets/icon-profile-inativo.png');
        }

        return (
          <Image
            source={iconSource}
            style={{
              resizeMode: 'contain',
            }}
          />
        );
      }
    })}
  >
    <Tab.Screen name="Home" component={Home} options={{ headerShown: false }}/>
    <Tab.Screen name="Practice" component={Quiz} options={{ headerShown: false }}/>
    <Tab.Screen name="Ranking" component={Ranking} options={{ headerShown: false }}/>
    <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="OnBoarding" component={OnBoarding} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
        <Stack.Screen name="Code" component={Code} options={{ headerShown: false }}/>
        <Stack.Screen name="NewPassword" component={NewPassword} options={{ headerShown: false }}/>
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
        <Stack.Screen name="WelcomeRegister" component={WelcomeRegister} options={{ headerShown: false }}/>
        <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen name="Questions" component={Questions} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
