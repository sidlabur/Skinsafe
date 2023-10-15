import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import CameraPrompt from './CameraPrompt';
import Camera from './Camera'
import Crop from './Crop'
import CropConfirm from './CropConfirm'
import Form from './Form'
import LoadingPage from './LoadingPage'
import Results from './Results'
import About from './About'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false, // Hide the header for all screens
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CameraPrompt" component={CameraPrompt} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="Crop" component={Crop} />
        <Stack.Screen name="CropConfirm" component={CropConfirm} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="LoadingPage" component={LoadingPage} />
        <Stack.Screen name="Results" component={Results} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require('./mainicon.png')} style={styles.image} />
      <Text style={styles.title}>
        skin<Text style={styles.boldText}>safe</Text>
      </Text>
      <Text style={styles.subTitle}>Snap. Detect. Protect.</Text>

      <TouchableHighlight
        style={[styles.button, styles.loginButton]}
        underlayColor="#F0D0CC"
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={[styles.button, styles.aboutButton]}
        underlayColor="#667799"
        onPress={() => navigation.navigate('About')}
      >
        <Text style={[styles.buttonText, { color: '#17364b' }]}>About</Text>
      </TouchableHighlight>

    </View>
  );
}

const styles = StyleSheet.create({
  image:{
    width: 200, // Set the width of the image
    height: 200,
  },
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8', // Cream background
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 70,
    color: '#17364B', // Dark blue color
    textAlign: 'center',
    marginTop: '0%', // Move the title to the top half
  },
  boldText: {
    fontWeight: 'bold',
  },
  subTitle: {
    color: '#17364B',
    textAlign: 'right',
    fontSize: 15,
    marginLeft: 100, // Adjust to your preference
    marginBottom: '25%',
  },
  button: {
    fontSize: 28,
    borderRadius: 30,
    width: 260,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10, // Slightly move the buttons up
  },
  loginButton: {
    backgroundColor: '#667799', // Opaque color
    marginBottom: 20,
  },
  aboutButton: {
    fontSize: 70,
    backgroundColor: '#F0D0CC', // Opaque color
    color: '#17364b',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white' // Text color
  },
});
