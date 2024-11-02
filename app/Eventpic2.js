import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../assets/styles/Eventpic2Styles';  // Assuming styles are imported from a separate file

const Eventspic1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Image source={require('../assets/bell_halarmaS23.png')} style={styles.logo} />
      </View>

      {/* Event Image and Title */}
      <Image source={require('../assets/images/event2.png')} style={styles.eventImage} />

      {/* Event Title */}
      <Text style={styles.eventTitle}>Basta Envergan, Ligtas sa Kapahamakan</Text>
      <View style={styles.separator} />
      {/* Event Description */}
      <View style={styles.eventDescriptionContainer}>
        <Text style={styles.eventDescription}>
          Basic Life Support (BLS) training plays a critical role in ensuring the well-being of individuals within a workplace or community setting. Basic Life Support training is an integral component of a comprehensive health and safety program within an organization. It empowers employees to respond promptly and effectively to medical emergencies, aligning with the overarching goals of maintaining a safe and healthy work environment. Health and Safety Officers play a key role in implementing and overseeing BLS training initiatives.
        </Text>
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

export default Eventspic1;
