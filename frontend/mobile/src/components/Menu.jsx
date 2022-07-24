import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { MENU_LIST } from '../utils/constants';

const Menu = ({ navigation, username }) => {
 console.log(username);
 return (
  <View style={styles.container}>
   <View style={styles.TitleWrapper}>
    <Text style={styles.text}>
     {'Hello '}
     {'👋,'}
    </Text>
   </View>
   <ScrollView>
    <View style={{ alignItems: 'center' }}>
     {MENU_LIST.map((val, i) => (
      <TouchableOpacity key={val.index} onPress={() => navigation.push(val.route)} style={styles.clickOption}>
       <View style={styles.petDatabaseWrapper}>
        <Text style={styles.petDatabase}>{val.name}</Text>
       </View>
      </TouchableOpacity>
     ))}
    </View>
   </ScrollView>
  </View>
 );
};

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#8b5400',
 },
 text: {
  color: 'white',
  fontSize: 25,
  paddingLeft: 20,
  paddingTop: 16,
 },
 TitleWrapper: {
  marginTop: 20,
  marginBottom: 20,
 },
 petDatabaseWrapper: {
  height: 50,
  backgroundColor: 'white',
  alignItems: 'flex-start',
  justifyContent: 'center',
  paddingLeft: 20,
  borderRadius: 5,
  marginHorizontal: 15,
 },
 petDatabase: {
  fontSize: 20,
 },
 clickOption: {
  width: '100%',
  marginBottom: 15,
 },
});

export default Menu;
