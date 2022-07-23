import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, PetDB, PetView, MPetReq, ACO, PetEntry, Camera } from './screens';

const Stack = createStackNavigator();

const AppStack = () => {
 return (
  <Stack.Navigator
   screenOptions={{
    headerShown: false,
   }}
   initialRouteName="Animal Control Officer"
  >
   <Stack.Screen name="Home" component={Home} />
   <Stack.Screen name="Animal Control Officer" component={ACO} />
   <Stack.Screen name="Pet Database" component={PetDB} />
   <Stack.Screen name="Make Pet Request" component={MPetReq} />
   <Stack.Screen name="Pet View" component={PetView} />
   <Stack.Screen name="Pet Entry" component={PetEntry} />
   <Stack.Screen name="Camera" component={Camera} />
  </Stack.Navigator>
 );
};

export default AppStack;

const styles = StyleSheet.create({});
