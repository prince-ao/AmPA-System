import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ActionBar from 'react-native-action-bar';
import React, { useEffect, useState } from 'react';
import { petsDB } from '../data/pets';
import { ScrollView } from 'react-native-gesture-handler';

const petDB = ({ navigation }) => {
 const [pets, setPets] = useState([]);
 useEffect(() => {
  setPets(petsDB);
 }, []);
 return (
  <View>
   <ActionBar
    containerStyle={styles.bar}
    backgroundColor="#8b5400"
    leftIconName={'back'}
    leftIconImageStyle={styles.icon}
    onLeftPress={() => navigation.pop()}
    title={'Pet Database'}
    titleContainerStyle={{ alignItems: 'center', marginRight: 50 }}
   />
   <View>
    <TouchableOpacity>
     <Text>Filter</Text>
    </TouchableOpacity>
   </View>
   <ScrollView style={styles.screenScroll}>
    {pets.map((obj, i) => {
     return (
      <TouchableOpacity
       onPress={() => navigation.push('Pet View', { navigation, obj })}
       style={styles.petItem}
      >
       <Text>Species: {obj.species}</Text>
       <Text>Breed: {obj.primary_breed}</Text>
       <Text>Age: {obj.age_at_intake}</Text>
       <Text>Furr Color: {obj.furr_color}</Text>
       <Text>Eye Color: {obj.eye_color}</Text>
      </TouchableOpacity>
     );
    })}
   </ScrollView>
  </View>
 );
};

export default petDB;

const styles = StyleSheet.create({
 icon: {
  width: 30,
  height: 30,
  tintColor: 'white',
 },
 bar: {
  backgroundColor: '#8b5400',
  height: 70,
  elevation: 5,
 },
 petItem: {
  marginBottom: 30,
  paddingLeft: 5,
  marginTop: 30,
  borderBottomColor: 'black',
  borderBottomStyle: 'solid',
  borderWidth: 5,
 },
 screenScroll: {
  marginBottom: 80,
 },
});
