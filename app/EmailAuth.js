import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';  // For route and navigation
import styles from '../assets/styles/LoginStyles';  // Import your styles

const EmailAuth = () => {
  const route = useRoute();  // Hook to get route params safely
  const navigation = useNavigation();

  // Safely get the email and otp from the route params
  const { email, otp } = route?.params || {};  // Default to empty object if params are undefined

  const [enteredOtp, setEnteredOtp] = useState('');

  const handleVerifyOtp = () => {
    if (enteredOtp === otp) {
      Alert.alert('Success', 'OTP verified successfully!');
      navigation.navigate('Accounts');  // Navigate to Auth screen after successful OTP verification
    } else {
      Alert.alert('Error', 'Invalid OTP. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify Your Email</Text>
      <Text style={styles.subtitle}>We sent a verification code to {email}</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter OTP"
        value={enteredOtp}
        onChangeText={setEnteredOtp}
        keyboardType="numeric"
      />
      
      <TouchableOpacity style={styles.verifyButton} onPress={handleVerifyOtp}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmailAuth;
