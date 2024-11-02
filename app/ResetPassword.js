// ResetPassword.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../assets/styles/ResetPasswordStyles';
import Icon from 'react-native-vector-icons/Feather';

const ResetPassword = () => {
  const [enteredOtp, setEnteredOtp] = useState('');
  const navigation = useNavigation();

  const handleSubmitPress = async () => {
    const storedOtp = await AsyncStorage.getItem('generatedOtp');

    if (enteredOtp === storedOtp) {
      Alert.alert('OTP Verified', 'You can now reset your password.');
      navigation.navigate('ResetSubmit');
    } else {
      Alert.alert('Invalid OTP', 'The code you entered is incorrect.');
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
      <Text style={styles.subtitle}>A verification code has been sent to your email.</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Code:"
          keyboardType="numeric"
          value={enteredOtp}
          onChangeText={setEnteredOtp}
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmitPress}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResetPassword;
