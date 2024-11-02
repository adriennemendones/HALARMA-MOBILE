// ResetSubmit.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../assets/styles/resetSubmit';
import Icon from 'react-native-vector-icons/Feather';
import { supabase } from './lib/supabase';

const ResetSubmit = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  const handleSubmitPress = async () => {
    if (newPassword !== confirmPassword) {
      Alert.alert('Password Mismatch', 'Please ensure both passwords match.');
      return;
    }

    // Retrieve the email used for password reset
    const email = await AsyncStorage.getItem('resetEmail');
    if (!email) {
      Alert.alert('Error', 'Could not find the email associated with this reset request.');
      return;
    }

    try {
      // Simulate an OTP-based login using an existing session
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password: 'temporary_password_for_otp_verified_users' // Adjust this to your use case
      });

      if (signInError) {
        Alert.alert('Error', 'Unable to authenticate. Please try again.');
        return;
      }

      // Once signed in, update the password
      const { error } = await supabase.auth.updateUser({ password: newPassword });
      if (error) {
        Alert.alert('Error', error.message);
      } else {
        Alert.alert('Success', 'Your password has been updated.');
        navigation.navigate('Login');
        await AsyncStorage.removeItem('generatedOtp');
        await AsyncStorage.removeItem('resetEmail');
      }
    } catch (error) {
      console.error('Error during password reset:', error);
      Alert.alert('Error', 'An error occurred while updating your password.');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={24} color="#000" />
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/bell_halarmaS23.png')} style={styles.logo} />
      </View>
      <Text style={styles.title}>Password Reset</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter New Password:"
          secureTextEntry
          value={newPassword}
          onChangeText={setNewPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password:"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmitPress}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResetSubmit;
