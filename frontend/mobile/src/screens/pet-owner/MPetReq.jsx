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
    titleContainerStyle={{ alignItems: 'center', marginRight: 50 }}
   />
   <ScrollView>
    <Text>Breed:</Text>
    <TextInput style={styles.input} value={form.breed} onChangeText={(e) => setForm({ ...form, breed: e })} />
    <Text>Age:</Text>
    <TextInput
     style={styles.input}
     value={`${form.age}`}
     onChangeText={(e) => setForm({ ...form, age: Number(e) })}
     keyboardType={Platform.OS === 'android' ? 'numeric' : 'number-pad'}
    />
    <Text>Fur Color:</Text>
    <TextInput
     value={form.fur_color}
     onChangeText={(e) => setForm({ ...form, fur_color: e })}
     style={styles.input}
    />
    <Text>Eye Color:</Text>
    <TextInput
     value={form.eye_color}
     onChangeText={(e) => setForm({ ...form, eye_color: e })}
     style={styles.input}
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
    <Button title="Add image" />
    <Button title="Submit" color="green" />
   </ScrollView>
  </View>
 );
};

export default MPetReq;

const styles = StyleSheet.create({
 input: {
  height: 40,
  margin: 12,
  borderWidth: 1,
  padding: 10,
 },
 bar: {
  height: 70,
  backgroundColor: '#8b5400',
  elevation: 0,
 },
});
