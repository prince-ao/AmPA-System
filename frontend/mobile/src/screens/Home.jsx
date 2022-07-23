import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LatLng, LeafletView } from 'react-native-leaflet-view';
import React, { useState, useRef, useEffect } from 'react';
import ActionBar from 'react-native-action-bar';
import DrawerLayout from 'react-native-drawer-layout';

import Menu from '../components/Menu';

const Home = () => {
 const [drawerOpen, setDrawerOpen] = useState(false);
 const drawer = useRef(null);

 useEffect(() => {});

 const toggleDrawer = () => {
  setDrawerOpen(!drawerOpen);

  if (drawerOpen) {
   drawer.current.closeDrawer();
  } else {
   drawer.current.openDrawer();
  }
 };
 return (
  <DrawerLayout
   drawerWidth={250}
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
   //  not sure why this menu is not working
   renderNavigationView={() => <Menu />}
   drawerBackgroundColor="#33cc33"
  >
   <ActionBar
    containerStyle={styles.bar}
    backgroundColor="#33cc33"
    leftIconName={'menu'}
    leftIconImageStyle={styles.icon}
    onLeftPress={toggleDrawer}
   />
   <View style={styles.container}>
    {/* doesnt work for android */}
    <LeafletView />
   </View>
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
  backgroundColor: '#33cc33',
  height: 100,
  elevation: 5,
 },
 icon: {
  width: 30,
  height: 30,
  tintColor: 'white',
 },
});
