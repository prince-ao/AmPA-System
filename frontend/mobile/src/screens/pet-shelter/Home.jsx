import { StyleSheet, Text, View, TouchableOpacity, Image, Button, ScrollView } from 'react-native';
import { LatLng, LeafletView } from 'react-native-leaflet-view';
import React, { useState, useRef, useEffect, useContext } from 'react';
import ActionBar from 'react-native-action-bar';
import { petsDB } from '../../data/pets';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../../AppStack';

const ShelterHome = ({ navigation }) => {
 const [pets, setPets] = useState(petsDB);

 useEffect(() => {
  //AsyncStorage.removeItem('@chi-chi');
 }, []);

 const { signOut } = useContext(AuthContext);
 return (
  <View>
   <ActionBar
    containerStyle={styles.bar}
    backgroundColor="#8b5400"
    rightIcon={[
     {
      source: require('../../assets/logout.png'),
      onPress: () => signOut(),
     },
    ]}
   />
   <ScrollView style={styles.container}>
    {pets.map((vals, index) => {
     return (
      <View style={styles.mainContainer} key={index}>
       <View>
        <Image source={{ uri: vals.image }} style={styles.bigImage} />
       </View>
       <View>
        <Text>Species: {vals.species}</Text>
        <Text>Primary Breed: {vals.primary_breed}</Text>
        <Text>Eye Color: {vals.eye_color}</Text>
        <Text>Fur Color: {vals.furr_color}</Text>
        <Text>Age at Intake: {vals.age_at_intake}</Text>
       </View>
       <View style={styles.buttonContainer}>
        <TouchableOpacity
         onPress={() => {
          navigation.push('Update Pet', { vals });
         }}
        >
         <Image style={styles.image} source={require('../../assets/edit.png')} />
        </TouchableOpacity>
        <TouchableOpacity
         onPress={() => {
          const val = pets.filter((val) => {
           return val.pet_id != vals.pet_id;
          });
          setPets(val);
         }}
        >
         <Image style={styles.image} source={require('../../assets/delete.png')} />
        </TouchableOpacity>
       </View>
      </View>
     );
    })}
    <Button title="Add New Pet" onPress={() => navigation.push('Add New Pet')} />
   </ScrollView>
  </View>
 );
};
const styles = StyleSheet.create({
 container: {
  // flex: 1,
  // backgroundColor: '#fff',
  // alignItems: 'center',
  // justifyContent: 'center',
  marginBottom: 150,
 },
 bar: {
  backgroundColor: '#8b5400',
  height: 100,
  elevation: 5,
 },
 image: {
  height: 20,
  width: 20,
 },
 bigImage: {
  height: 75,
  width: 75,
 },
 mainContainer: {
  marginTop: 20,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
 },
 buttonContainer: {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  width: 60,
 },
});
export default ShelterHome;
