import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, PetDB, PetView, MPetReq } from './screens';

const Stack = createStackNavigator();

const AppStack = () => {
 return (
  <Stack.Navigator
   screenOptions={{
    headerShown: false,
   }}
  >
   <Stack.Screen name="Home" component={Home} />
   <Stack.Screen name="Pet Database" component={PetDB} />
   <Stack.Screen name="Make Pet Request" component={MPetReq} />
   <Stack.Screen name="Pet View" component={PetView} />
  </Stack.Navigator>
 );
};

export default AppStack;

const styles = StyleSheet.create({});
