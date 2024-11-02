import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../assets/styles/ProfileEditStyle';

const ProfileEdit = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { userInfo, setUserInfo } = route.params; // Receive userInfo and setUserInfo from Profile

  // Local state to hold form data
  const [formData, setFormData] = useState(userInfo);

  // Sync formData with userInfo when userInfo changes
  useEffect(() => {
    setFormData(userInfo);
  }, [userInfo]);

  // Function to handle input changes
  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  // Function to handle Save button press
  const handleSavePress = () => {
    // Update userInfo in Profile.js
    setUserInfo(formData);  // Pass the updated form data back
    navigation.navigate('Profile'); // Navigate back to Profile screen
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.profileImageContainer}>
            <Icon name="user-circle" size={100} color="#800000" />
          </View>
        </View>

        {/* Personal Information Edit Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Personal Information:</Text>

          {[
            { label: 'Full Name', field: 'fullName' },
            { label: 'Date of Birth', field: 'dateOfBirth' },
            { label: 'Age', field: 'age' },
            { label: 'Sex', field: 'sex' },
            { label: 'Contact Number', field: 'contactNumber' },
            { label: 'Blood Type', field: 'bloodType' },
            { label: 'Address', field: 'address' },
            { label: 'Department', field: 'department' },
            { label: 'Year & Course', field: 'yearCourse' },
          ].map(({ label, field }, index) => (
            <View key={index} style={styles.inputContainer}>
              <Text style={styles.label}>{label}:</Text>
              <TextInput
                style={styles.input}
                placeholder={`Enter ${label}`}
                value={formData[field]}
                onChangeText={(value) => handleInputChange(field, value)}
              />
            </View>
          ))}
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSavePress}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Homepage')}>
          <Icon name="home" size={25} color="#333" style={styles.navIcon} />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Notification')}>
          <Icon name="bell" size={25} color="#333" style={styles.navIcon} />
          <Text style={styles.navText}>Notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('History')}>
          <Icon name="history" size={25} color="#333" style={styles.navIcon} />
          <Text style={styles.navText}>History</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
          <Icon name="user" size={25} color="#333" style={styles.navIcon} />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileEdit;
