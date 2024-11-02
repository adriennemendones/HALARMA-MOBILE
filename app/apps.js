import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Index from './index'; // Correct path for your index screen
import Login from './Login'; // Correct path for your Login screen
import TwoFactorAuth from './TwoFactorAuth'; // TwoFactorAuth screen
import Signup from './Signup'; // Signup screen
import NextScreen from './NextScreen';
import Profile from './Profile';
import ProfileEdit from './ProfileEdit';
// NextScreen
// EmailAuth screen (for OTP)


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index"> {/* Default first screen */}
        <Stack.Screen
          name="Index"
          component={Index}
          options={{ headerShown: false }}  // Hide header
        />
        <Stack.Screen
          name="NextScreen"
          component={NextScreen}
          options={{ headerShown: false }}  // Hide header
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}  // Hide header
        /> 
          <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}  // Hide header
        />
        <Stack.Screen
          name="TwoFactorAuth"
          component={TwoFactorAuth}
          options={{ headerShown: false }}  // Hide header for OTP verification
        />

<Stack.Screen
          name="ProfileEdit"  // Add the Information screen here
          component={Profile}
          options={{ headerShown: false }}  
        />

<Stack.Screen
          name="ProfileEdit"  // Add the Information screen here
          component={ProfileEdit}
          options={{ headerShown: false }}  
        />
     
     

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
