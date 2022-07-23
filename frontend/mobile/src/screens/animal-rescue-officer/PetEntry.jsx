import { StyleSheet, Text, View, Pressable, TextInput, Button } from 'react-native';
import ActionBar from 'react-native-action-bar';
import React, { useState } from 'react';
import Toast from 'react-native-toast-message';

const PetEntry = ({ navigation }) => {
 const [pathOfImage, setPathOfImage] = useState('');
 const [form, setForm] = useState({
  breed: '',
  fur_color: '',
  eye_color: '',
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
    title={'Found a Pet'}
    titleContainerStyle={{ alignItems: 'center', marginRight: 50 }}
   />
   <View>
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
       breed: '',
       fur_color: '',
       eye_color: '',
       altered: false,
      });
      setPathOfImage('');
      showToast();
     }}
    />
   </View>
   <Toast position="bottom" />
  </View>
 );
};

export default PetEntry;

const styles = StyleSheet.create({
 input: {
  height: 40,
  margin: 12,
  borderWidth: 1,
  padding: 10,
 },
});
