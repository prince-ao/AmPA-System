import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/AppStack';
import 'react-native-gesture-handler';

export default function App() {
 return (
  <NavigationContainer>
   <AppStack />
  </NavigationContainer>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
 },
});
