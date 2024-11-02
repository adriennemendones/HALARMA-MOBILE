import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { supabase } from './lib/supabase';// Ensure you have initialized Supabase correctly
import { useNavigation } from '@react-navigation/native'; // For navigation

const Homepages = () => {
  const [session, setSession] = useState(null);
  const navigation = useNavigation(); // If you need to navigate

  useEffect(() => {
    const fetchSession = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) {
        console.error('Error fetching session:', error.message);
      } else {
        setSession(session); // Save session if available
      }
    };

    fetchSession(); // Fetch session on component mount

    // Optional: listen for session changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    // Cleanup on component unmount
    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  // If no session, show a message or navigate to the login screen
  if (!session) {
    return (
      <View>
        <Text>No active session found. Please log in.</Text>
        <Button title="Go to Login" onPress={() => navigation.navigate('Auth')} />
      </View>
    );
  }

  return (
    <View>
      <Text>Welcome, {session.user.email}</Text>
      {/* Add more account-related info */}
      <Button title="Logout" onPress={async () => await supabase.auth.signOut()} />
    </View>
  );
};

export default Homepages;
