import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {LoginPage, SignupPage, ListPage, SplashScreen} from './pages'


const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName= "Splash" >
        <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false, gestureEnabled:false}}/>
        <Stack.Screen name="Login" component={LoginPage} options={{headerShown: false, gestureEnabled: false}} />
        <Stack.Screen name="Signup" component={SignupPage} />
        <Stack.Screen name="ListPage" component={ListPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;