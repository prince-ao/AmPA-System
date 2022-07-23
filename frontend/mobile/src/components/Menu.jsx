import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { MENU_LIST } from '../utils/constants';

const Menu = ({ navigation }) => {
 return (
  <View style={styles.container}>
   <ScrollView>
    <View style={styles.TitleWrapper}>
     <Text style={styles.text}>{'AmPA System'}</Text>
    </View>
    <TouchableOpacity onPress={() => navigation.push('Pet Database')} style={styles.clickOption}>
     <View style={styles.petDatabaseWrapper}>
      <Text style={styles.petDatabase}>Pet Database</Text>
     </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.push('Make Pet Request')} style={styles.clickOption}>
     <View style={styles.petDatabaseWrapper}>
      <Text style={styles.petDatabase}>Send Missing Pet Request</Text>
     </View>
    </TouchableOpacity>
   </ScrollView>
  </View>
 );
};

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#8b5400',
  alignItems: 'center',
  justifyContent: 'center',
 },
 text: {
  color: 'white',
  fontSize: 30,
  paddingLeft: 20,
  paddingTop: 16,
 },
 TitleWrapper: {
  marginTop: 20,
  marginBottom: 20,
 },
 petDatabaseWrapper: {
  width: 300,
  height: 70,
  backgroundColor: 'white',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 30,
 },
 petDatabase: {
  fontSize: 20,
 },
 clickOption: {
  width: '100%',
  marginBottom: 30,
 },
});

export default Menu;
