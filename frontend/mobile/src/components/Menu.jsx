import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { MENU_LIST } from '../utils/constants';

const Menu = () => {
 return (
  <View style={styles.container}>
   <ScrollView>
    <TouchableOpacity
     onPress={() => {
      console.log('clicked');
     }}
    >
     <Text style={styles.text}>{'HELLO'}</Text>
    </TouchableOpacity>
   </ScrollView>
  </View>
 );
};

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#33cc33',
  alignItems: 'center',
  justifyContent: 'center',
 },
 text: {
  color: 'white',
  fontSize: 16,
  paddingLeft: 20,
  paddingTop: 16,
 },
});

export default Menu;
