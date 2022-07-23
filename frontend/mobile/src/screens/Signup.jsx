import { StyleSheet, Text, View, TextInput, Pressable, Button } from 'react-native';
import ActionBar from 'react-native-action-bar';
import React, { useState, useEffect, createContext, useContext } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../AppStack';

const Signup = ({ navigation }) => {
 const [form, setForm] = useState({
  username: '',
  password: '',
 });
 const [open, setOpen] = useState(false);
 const [value, setValue] = useState(null);
 const [items, setItems] = useState([
  { label: 'Pet Owner', value: 'pet-owner' },
  { label: 'Pet Shelter', value: 'pet-shelter' },
  { label: 'Pet Officer', value: 'pet-officer' },
 ]);

 const { signUp } = useContext(AuthContext);

 return (
  <View>
   <ActionBar
    containerStyle={styles.bar}
    backgroundColor="#8b5400"
    title={'Signup'}
    titleContainerStyle={{ alignItems: 'center', marginRight: 50 }}
   />
   <Text>Role:</Text>
   <DropDownPicker
    open={open}
    items={items}
    setOpen={setOpen}
    setValue={setValue}
    value={value}
    setItems={setItems}
    containerStyle={styles.dropDown}
   />
   <Text>Username:</Text>
   <TextInput
    style={styles.input}
    value={form.username}
    onChangeText={(e) => setForm({ ...form, username: e })}
   />
   <Text>password:</Text>
   <TextInput
    style={styles.input}
    value={`${form.password}`}
    onChangeText={(e) => setForm({ ...form, password: e })}
   />
   <View style={{ flexDirection: 'row' }}>
    <Text>{'Already have an account? '}</Text>
    <Pressable onPress={() => navigation.navigate('Login')}>
     <Text>{'Login'}</Text>
    </Pressable>
   </View>
   <Button
    title="Signup"
    color="blue"
    onPress={() => signUp({ username: form.username, password: form.password, role: value })}
   />
  </View>
 );
};

export default Signup;

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
 dropDown: {
  marginTop: 10,
  width: '95%',
  alignSelf: 'center',
 },
});
