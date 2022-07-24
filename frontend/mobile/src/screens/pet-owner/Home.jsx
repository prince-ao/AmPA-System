import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { LatLng, LeafletView } from 'react-native-leaflet-view';
import React, { useState, useRef, useEffect, useContext } from 'react';
import ActionBar from 'react-native-action-bar';
import DrawerLayout from 'react-native-drawer-layout';
import Menu from '../../components/Menu';
import Back from '../../assets/arrow.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../../AppStack';

const Home = ({ navigation, user }) => {
 const [drawerOpen, setDrawerOpen] = useState(false);
 const drawer = useRef(null);

 useEffect(() => {
  //AsyncStorage.removeItem('@chi-chi');
 });

 const toggleDrawer = () => {
  setDrawerOpen(!drawerOpen);

  if (drawerOpen) {
   drawer.current.closeDrawer();
  } else {
   drawer.current.openDrawer();
  }
 };

 const { signOut } = useContext(AuthContext);

 const mapMarkers = [
  {
   position: { lat: 30.266666, lng: -97.73333 },
   icon: '🐾',
   size: [32, 32],
  },
  {
   position: { lat: 30.54879049351828, lng: -97.67021656036378 },
   icon: '🐾',
   size: [32, 32],
  },
  {
   position: { lat: 30.42195846798623, lng: -97.55475282669069 },
   icon: '🐾',
   size: [32, 32],
  },
  {
   position: { lat: 30.455406829546412, lng: -97.77698993682863 },
   icon: '🐾',
   size: [32, 32],
  },
 ];
 return (
  <DrawerLayout
   drawerWidth={350}
   ref={(drawerElement) => {
    drawer.current = drawerElement;
   }}
   drawerPosition={DrawerLayout.positions.Left}
   onDrawerOpen={() => {
    setDrawerOpen(true);
   }}
   onDrawerClose={() => {
    setDrawerOpen(false);
   }}
   renderNavigationView={() => <Menu navigation={navigation} />}
   drawerBackgroundColor="#8b5400"
  >
   <ActionBar
    containerStyle={styles.bar}
    backgroundColor="#8b5400"
    leftIconName={'menu'}
    leftIconImageStyle={styles.icon}
    onLeftPress={toggleDrawer}
    title={'Home'}
    titleStyle={{ fontSize: 20, color: 'white', textAlign: 'left' }}
    titleContainerStyle={{ alignItems: 'center', marginRight: 40, marginTop: 30 }}
   />
   <View style={styles.container}>
    {/* doesnt work for android */}
    <LeafletView mapMarkers={mapMarkers} mapCenterPosition={{ lat: 30.266666, lng: -97.73333 }} zoom={7} />
   </View>
   <Button title="Sign Out" onPress={() => signOut()} />
  </DrawerLayout>
 );
};

export default Home;

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
 },
 bar: {
  backgroundColor: '#8b5400',
  height: 70,
  elevation: 5,
 },
 icon: {
  width: 30,
  height: 30,
  tintColor: 'white',
 },
});
