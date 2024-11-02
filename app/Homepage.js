import React from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native'; // For navigation between screens
import Icon from 'react-native-vector-icons/FontAwesome5'; // Import FontAwesome5 icons
import styles from '../assets/styles/HomepageStyles';// Import the new style file

const Homepage = () => {
  const navigation = useNavigation(); // Get navigation object to navigate to other screens

  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Image source={require('../assets/bell_halarmaS23.png')} style={styles.logo} />
      </View>

      {/* Grid Section */}
      <View style={styles.gridContainer}>
        <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('Announcements')}>
          <Image source={require('../assets/icons/Announcements.png')} style={styles.icon} />
          <Text style={styles.iconLabel}>Announcements</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('Profile')}>
          <Image source={require('../assets/icons/Profile.png')} style={styles.icon} />
          <Text style={styles.iconLabel}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('Programs')}>
          <Image source={require('../assets/icons/Programs.png')} style={styles.icon} />
          <Text style={styles.iconLabel}>Programs</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('IncidentReport')}>
          <Image source={require('../assets/icons/Reports.png')} style={styles.icon} />
          <Text style={styles.iconLabel}>Incident Report</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('AlertWheelColor')}>
          <Image source={require('../assets/icons/Color Wheel.png')} style={styles.icon} />
          <Text style={styles.iconLabel}>Alerts Color Wheel Legend</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('Settings')}>
          <Image source={require('../assets/icons/Setting.png')} style={styles.icon} />
          <Text style={styles.iconLabel}>Settings</Text>
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

export default Homepage;
