// ChangePassword.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';  // For navigation
import Icon from 'react-native-vector-icons/Feather';  // Back arrow icon
import styles from '../assets/styles/ChangePasswordStyles'; // Import the styles

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  const handleSave = () => {
    // Logic to handle password save
    if (newPassword === confirmPassword) {
      alert('Password changed successfully');
      navigation.goBack(); // Navigate back after successful save
    } else {
      alert('New passwords do not match');
    }
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={24} color="#000" />
      </TouchableOpacity>
      <Image source={require('../assets/bell_halarmaS23.png')} style={styles.logo} />
     

      {/* Heading */}
      
      <Text style={styles.headerText}>Change Password</Text>

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Enter Old Password:"
        secureTextEntry
        value={oldPassword}
        onChangeText={setOldPassword}
      />

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

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChangePassword;