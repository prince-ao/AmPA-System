import { StyleSheet, Text, View, TextInput, Platform, Pressable, Button } from 'react-native';
import ActionBar from 'react-native-action-bar';
import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

const MPetReq = ({ navigation }) => {
 const [form, setForm] = useState({
  breed: '',
  age: 0,
  fur_color: '',
  eye_color: '',
  altered: false,
 });
 // TODO: If we have time implement form submit action
 return (
  <View>
   <ActionBar
    containerStyle={styles.bar}
    backgroundColor="#8b5400"
    leftIconName={'back'}
    onLeftPress={() => navigation.pop()}
    leftIconImageStyle={styles.icon}
    title={'Make a Lost Pet Request'}
    titleStyle={{ fontSize: 20, color: 'white', textAlign: 'left' }}
    titleContainerStyle={{ alignItems: 'center', marginRight: 30, marginTop: 30 }}
   />
   <ScrollView>
    <Text style={styles.inputText}>Breed:</Text>
    <TextInput style={styles.input} value={form.breed} onChangeText={(e) => setForm({ ...form, breed: e })} />
    <Text style={styles.inputText}>Age:</Text>
    <TextInput
     style={styles.input}
     value={`${form.age}`}
     onChangeText={(e) => setForm({ ...form, age: Number(e) })}
     keyboardType={Platform.OS === 'android' ? 'numeric' : 'number-pad'}
    />
    <Text style={styles.inputText}>Fur Color:</Text>
    <TextInput
     value={form.fur_color}
     onChangeText={(e) => setForm({ ...form, fur_color: e })}
     style={styles.input}
    />
    <Text style={styles.inputText}>Eye Color:</Text>
    <TextInput
     value={form.eye_color}
     onChangeText={(e) => setForm({ ...form, eye_color: e })}
     style={styles.input}
    />
    <Text style={{ marginStart: 12 }}>Altered(has any body modifications):</Text>
    <View style={{ marginStart: 12 }}>
     <Pressable onPress={() => setForm({ ...form, altered: true })}>
      <Text>Yes</Text>
     </Pressable>
     <Pressable onPress={() => setForm({ ...form, altered: false })}>
      <Text>No</Text>
     </Pressable>
    </View>
    <Pressable
     style={{
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: '#03a9f4',
      marginHorizontal: 12,
      marginBottom: 12,
     }}
    >
     <Text>Add image</Text>
    </Pressable>
    <Pressable
     style={styles.button}
     onPress={() => {
      setForm({
       breed: '',
       age: 0,
       fur_color: '',
       eye_color: '',
       altered: false,
      });
     }}
    >
     <Text>Submit</Text>
    </Pressable>
   </ScrollView>
  </View>
 );
};

export default MPetReq;

const styles = StyleSheet.create({
 input: {
  height: 40,
  marginTop: 5,
  marginBottom: 12,
  marginLeft: 12,
  marginRight: 12,
  borderWidth: 1,
  padding: 10,
 },
 inputText: {
  fontSize: 17,
  marginLeft: 10,
  marginTop: 12,
  textAlign: 'left',
  color: 'black',
 },
 button: {
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 12,
  paddingHorizontal: 32,
  borderRadius: 4,
  elevation: 3,
  backgroundColor: '#00c04b',
  marginHorizontal: 12,
 },
 bar: {
  height: 70,
  backgroundColor: '#8b5400',
  elevation: 0,
 },
});
