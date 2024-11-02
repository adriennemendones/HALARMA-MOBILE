import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook
import styles from '../assets/styles/indexStyles'; // Import the separated styles

const FirstPage = () => {
  const navigation = useNavigation(); // Use navigation hook

  return (
    <View style={styles.container}>
      {/* Centered Logo */}
      <View style={styles.logoContainer}>
        <Image source={require('../assets/bell_halarmaS23.png')} style={styles.bellImage} />
      </View>

      {/* Description */}
      <View style={styles.textContainer}>
        <Text style={styles.description}>
          HALA!RMA is an application designed for the health and safety office, facilitating prompt information dissemination during critical events or unforeseen emergencies. It offers real-time updates to the university community, ensuring timely responses and enhanced safety measures. HALA!RMA optimizes communication channels, strengthening safety and promoting a prepared campus environment.
        </Text>
      </View>

      {/* Button at the bottom */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('NextScreen')}  // Navigate to the next screen
        >
          <Text style={styles.buttonText}>START HERE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FirstPage;
