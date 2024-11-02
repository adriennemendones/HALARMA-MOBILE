import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../assets/styles/NextScreenStyles';
import { useNavigation } from '@react-navigation/native';

const NextScreen = () => {
  const navigation = useNavigation(); // Use the navigation hook

  return (
    <View style={styles.container}>
      {/* Logo and Subtitle */}
      <View style={styles.logoContainer}>
        <Image source={require('../assets/bell_halarmaS23.png')} style={styles.image} />
        <Text style={styles.subtitle}>
          Simplify, Inform, Empower: Your Information Solution.
        </Text>
      </View>

      {/* Buttons for Login and Signup */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Login')}  // Navigate to login screen
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Signup')}  // Navigate to signup screen
        >
          <Text style={styles.buttonText}>Sign-up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NextScreen;
