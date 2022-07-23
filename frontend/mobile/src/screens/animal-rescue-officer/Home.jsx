import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LatLng, LeafletView } from 'react-native-leaflet-view';
import React, { useState, useRef, useEffect } from 'react';
import ActionBar from 'react-native-action-bar';
import DrawerLayout from 'react-native-drawer-layout';
import Menu from '../../components/Menu';
import Back from '../../assets/arrow.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OfficerHome = ({ navigation }) => {
 return (
  <View>
   <ActionBar title="Officer Home" />
   <View style={styles.container}>
    <Text>Officer Home</Text>
   </View>
  </View>
 );
};
const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
 },
});
export default OfficerHome;
