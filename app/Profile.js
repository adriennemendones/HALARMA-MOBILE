import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../assets/styles/ProfileStyles';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Profile = () => {
  const navigation = useNavigation();

  // State to hold user information
  const [userInfo, setUserInfo] = useState({
    fullName: "Gai Uy",
    dateOfBirth: "09/01/1997",
    age: "26",
    sex: "M",
    contactNumber: "09902317654",
    bloodType: "B+",
    address: "Brgy. Cotta Lucena City",
    department: "CCMS",
    yearCourse: "3rd Year - BSIT",
  });

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image source={require('../assets/icons/PROF.png')} style={styles.profileImage} />
        <View style={styles.profileDetails}>
          <Text style={styles.profileName}>{userInfo.fullName}</Text>
          <TouchableOpacity 
            style={styles.editIcon}
            onPress={() => navigation.navigate('ProfileEdit', { userInfo, setUserInfo })} // Pass userInfo and setUserInfo to ProfileEdit
          >
            <Icon name="edit" size={20} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Personal Information Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Personal Information:</Text>
        <Text style={styles.infoText}>Full Name: {userInfo.fullName}</Text>
        <Text style={styles.infoText}>Date of Birth: {userInfo.dateOfBirth}</Text>
        <Text style={styles.infoText}>Age: {userInfo.age}</Text>
        <Text style={styles.infoText}>Sex: {userInfo.sex}</Text>
        <Text style={styles.infoText}>Contact Information: {userInfo.contactNumber}</Text>
        <Text style={styles.infoText}>Blood Type: {userInfo.bloodType}</Text>
        <Text style={styles.infoText}>Address: {userInfo.address}</Text>
        <Text style={styles.infoText}>Department: {userInfo.department}</Text>
        <Text style={styles.infoText}>Year & Course: {userInfo.yearCourse}</Text>
      </View>

      {/* Emergency Contact Information Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Emergency Contact Information</Text>
        <Text style={styles.infoText}>Full Name: J Hope</Text>
        <Text style={styles.infoText}>Relationship: Father</Text>
        <Text style={styles.infoText}>Contact Information: 09125697609</Text>
        <Text style={styles.infoText}>Address: Brgy. Cotta Lucena City</Text>
      </View>

      {/* View Report History Link */}
      <TouchableOpacity style={styles.reportLink}>
        <Text style={styles.reportLinkText}>View Report History</Text>
      </TouchableOpacity>

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

export default Profile;
