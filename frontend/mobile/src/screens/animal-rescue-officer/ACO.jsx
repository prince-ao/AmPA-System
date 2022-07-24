import { StyleSheet, Text, View, Button } from 'react-native';
import ActionBar from 'react-native-action-bar';
import React from 'react';

const ACO = ({ navigation }) => {
 return (
  <View>
   <ActionBar
    containerStyle={styles.bar}
    backgroundColor="#8b5400"
    rightIcons={[
     {
      source: '../../assets/user.png',
      onPress: () => console.log('pressed'),
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
