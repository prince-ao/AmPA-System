import { StyleSheet, Text, View, Pressable, TextInput, Button } from 'react-native';
import ActionBar from 'react-native-action-bar';
import React, { useState } from 'react';
import Toast from 'react-native-toast-message';

const AddNewPet = ({ navigation }) => {
 const [pathOfImage, setPathOfImage] = useState('');
 const [form, setForm] = useState({
  species: '',
  breed: '',
  fur_color: '',
  eye_color: '',
  age: 0,
  altered: false,
 });
 const showToast = () => {
  Toast.show({
   type: 'success',
   text1: 'Pet Sent',
   text2: "The pet's information has been sent to nearby pet owners",
  });
 };
 return (
  <View>
   <ActionBar
    containerStyle={styles.bar}
    backgroundColor="#8b5400"
    leftIconName={'back'}
    onLeftPress={() => navigation.pop()}
    leftIconImageStyle={styles.icon}
    title={'Add New Pet'}
    titleContainerStyle={{ alignItems: 'center', marginRight: 50 }}
   />
   <View>
    <Text>Species:</Text>
    <TextInput
     style={styles.input}
     value={form.species}
     onChangeText={(e) => setForm({ ...form, species: e })}
    />
    <Text>Breed:</Text>
    <TextInput style={styles.input} value={form.breed} onChangeText={(e) => setForm({ ...form, breed: e })} />
    <Text>Fur Color:</Text>
    <TextInput
     style={styles.input}
     value={form.fur_color}
     onChangeText={(e) => setForm({ ...form, fur_color: e })}
    />
    <Text>Eye Color:</Text>
    <TextInput
     style={styles.input}
     value={form.eye_color}
     onChangeText={(e) => setForm({ ...form, eye_color: e })}
    />
    <Text>Age at Intake:</Text>
    <TextInput
     style={styles.input}
     value={`${form.age}`}
     keyboardType={'numeric'}
     onChangeText={(e) => setForm({ ...form, age: Number(e) })}
    />
    <Text>Altered(has any body modifications):</Text>
    <View>
     <Pressable onPress={() => setForm({ ...form, altered: true })}>
      <Text>Yes</Text>
     </Pressable>
     <Pressable onPress={() => setForm({ ...form, altered: false })}>
      <Text>No</Text>
     </Pressable>
    </View>
    <Button title="Take a picture" onPress={() => navigation.push('Camera', { setPathOfImage })} />
    <Text>{pathOfImage}</Text>
    <Button
     title="Submit"
     color="green"
     onPress={() => {
      setForm({
       species: '',
       breed: '',
       fur_color: '',
       eye_color: '',
       age: 0,
       altered: false,
      });
      setPathOfImage('');
      showToast();
      navigation.pop();
     }}
    />
   </View>
   <Toast position="bottom" />
  </View>
 );
};

export default AddNewPet;

const styles = StyleSheet.create({
 input: {
  height: 40,
  margin: 12,
  borderWidth: 1,
  padding: 10,
 },
});
