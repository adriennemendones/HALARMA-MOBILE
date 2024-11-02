// Settings.js
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';  // For navigation between screens
import Icon from 'react-native-vector-icons/FontAwesome5';  // For the icons
import styles from '../assets/styles/SettingsStyles'; // Import the styles

const Settings = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Logo and Heading */}
      <View style={styles.logoContainer}>
        <Image source={require('../assets/bell_halarmaS23.png')} style={styles.logo} />
      </View>

      {/* Settings Heading */}
      <Text style={styles.headerText}>Settings</Text>

      {/* Settings List */}
      <View style={styles.settingsList}>
        <TouchableOpacity style={styles.settingsItem} onPress={() => navigation.navigate('Help')}>
          <Icon name="question-circle" size={20} color="#800000" style={styles.settingsIcon} />
          <Text style={styles.settingsText}>Help</Text>
          <Icon name="chevron-right" size={20} color="#800000" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingsItem} onPress={() => navigation.navigate('NotificationPreference')}>
          <Icon name="bell" size={20} color="#800000" style={styles.settingsIcon} />
          <Text style={styles.settingsText}>Notification Preference</Text>
          <Icon name="chevron-right" size={20} color="#800000" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingsItem} onPress={() => navigation.navigate('Privacy&Security')}>
          <Icon name="user-shield" size={20} color="#800000" style={styles.settingsIcon} />
          <Text style={styles.settingsText}>Privacy & Security</Text>
          <Icon name="chevron-right" size={20} color="#800000" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingsItem} onPress={() => navigation.navigate('ChangePassword')}>
          <Icon name="lock" size={20} color="#800000" style={styles.settingsIcon} />
          <Text style={styles.settingsText}>Change Password</Text>
          <Icon name="chevron-right" size={20} color="#800000" />
        </TouchableOpacity>
      </View>

      {/* Logout and Sign-out Buttons */}
      <View style={styles.buttonContainer}>
      <TouchableOpacity 
        style={styles.logoutButton} 
        onPress={() => navigation.navigate('Login')} 
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>

        <TouchableOpacity style={styles.signOutButton}>
          <Text style={styles.buttonText}>Sign-out</Text>
        </TouchableOpacity>
      </View>

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

export default Settings;
