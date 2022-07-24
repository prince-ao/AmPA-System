import { StyleSheet, Text, View, Image } from 'react-native';
import ActionBar from 'react-native-action-bar';
import React, { useEffect } from 'react';

const PetView = ({ navigation, route }) => {
 return (
  <View>
   <ActionBar
    containerStyle={styles.bar}
    backgroundColor="#8b5400"
    leftIconName={'back'}
    onLeftPress={() => navigation.pop()}
    leftIconImageStyle={styles.icon}
    title={'Pet View'}
    titleContainerStyle={{ alignItems: 'center', marginRight: 50 }}
   />
   <Text>{route.params.obj.species}</Text>
   <Image source={{ uri: route.params.obj.image }} />
   <Text>Species: {route.params.obj.species}</Text>
   <Text>Breed: {route.params.obj.primary_breed}</Text>
   <Text>Age: {route.params.obj.age_at_intake}</Text>
   <Text>Furr Color: {route.params.obj.furr_color}</Text>
   <Text>Eye Color: {route.params.obj.eye_color}</Text>
  </View>
 );
};

export default PetView;

const styles = StyleSheet.create({});
