import { StyleSheet, Text, View, Button } from 'react-native';
import ActionBar from 'react-native-action-bar';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ACO = ({ navigation }) => {
 const [_, updateState] = useState({
  lastRefreshed: Date(Date.now()).toString(),
 });
 return (
  <View>
   <ActionBar
    containerStyle={styles.bar}
    backgroundColor="#8b5400"
    rightIcons={[
     {
      name: 'star',
      onPress: () => {
       AsyncStorage.removeItem('@chi-chi');
       updateState({
        lastRefreshed: Date(Date.now()).toString(),
       });
      },
     },
    ]}
   />
   <View>
    <Button title="Found a pet" onPress={() => navigation.push('Pet Entry')} />
   </View>
  </View>
 );
};

export default ACO;

const styles = StyleSheet.create({
 bar: {
  backgroundColor: '#8b5400',
  height: 100,
  elevation: 5,
 },
});
