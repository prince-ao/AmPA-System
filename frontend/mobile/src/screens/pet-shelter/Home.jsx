import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';
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
   <ActionBar containerStyle={styles.bar} backgroundColor="#8b5400" title={'Pet Shelter'} />
   <View style={styles.container}>
    {/* {pets.map((vals, index) => {
     return (
      <View>
       <View>
        <Image source={{ uri: vals.image }} />
       </View>
       <View>
        <Text>{vals.species}</Text>
        <Text>{vals.primary_breed}</Text>
        <Text>{vals.eye_color}</Text>
        <Text>{vals.furr_color}</Text>
        <Text>{vals.age_at_intake}</Text>
       </View>
       <View>
        <TouchableOpacity
         onPress={() => {
          navigation.push('Update Pet');
         }}
        >
         <Image source={{ uri: require('../../assets/edit.png') }} />
        </TouchableOpacity>
        <TouchableOpacity
         onPress={() => {
          const val = pets.filter((val) => {
           return val.pet_id != vals.pet_id;
          });
          setPets(val);
         }}
        >
         <Image source={{ uri: require('../../assets/delete.png') }} />
        </TouchableOpacity>
       </View>
      </View>
     );
    })} */}
    <Button title="Add New Pet" onPress={() => navigation.push('Add New Pet')} />
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
 bar: {
  backgroundColor: '#8b5400',
  height: 100,
  elevation: 5,
 },
});
export default ShelterHome;
