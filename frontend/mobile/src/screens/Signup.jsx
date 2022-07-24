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
    titleStyle={{ fontSize: 20, color: 'white', textAlign: 'left' }}
    titleContainerStyle={{ alignItems: 'center', marginRight: 30, marginTop: 30 }}
   />
   <Text style={styles.inputText}>Role:</Text>
   <DropDownPicker
    open={open}
    items={items}
    setOpen={setOpen}
    setValue={setValue}
    value={value}
    setItems={setItems}
    containerStyle={styles.dropDown}
   />
   <Text style={styles.inputText}>Username:</Text>
   <TextInput
    style={styles.input}
    value={form.username}
    onChangeText={(e) => setForm({ ...form, username: e })}
   />
   <Text style={styles.inputText}>password:</Text>
   <TextInput
    style={styles.input}
    value={`${form.password}`}
    onChangeText={(e) => setForm({ ...form, password: e })}
   />
   <View style={{ marginLeft: 12, flexDirection: 'row', marginBottom: 10 }}>
    <Text style={{ fontSize: 15 }}>{'Already have an account? '}</Text>
    <Pressable onPress={() => navigation.navigate('Login')}>
     <Text style={{ fontSize: 15, color: '#039be5' }}>{'Login'}</Text>
    </Pressable>
   </View>
   <Pressable
    style={styles.button}
    onPress={() =>
     signUp({ username: form.username, password: form.password, role: value }).then((res) => {
      if (res) navigation.navigate('Login');
     })
    }
   >
    <Text style={{ fontSize: 16, lineHeight: 21, fontWeight: 'bold', letterSpacing: 0.25, color: 'white' }}>
     Signup
    </Text>
   </Pressable>
  </View>
 );
};

export default Signup;

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
 dropDown: {
  marginTop: 5,
  width: '94%',
  alignSelf: 'center',
  marginBottom: 10,
  marginLeft: 12,
  marginRight: 12,
 },
 bar: {
  height: 70,
  backgroundColor: '#8b5400',
  elevation: 0,
  alignItems: 'center',
  width: '100%',
  justifyContent: 'center',
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
  backgroundColor: 'black',
  marginHorizontal: 12,
 },
});
