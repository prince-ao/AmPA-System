import { StyleSheet, Text, View, TextInput, Platform, Pressable, Button } from 'react-native';
import ActionBar from 'react-native-action-bar';
import React, { useState, useEffect, useContext } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../AppStack';

const Login = ({ navigation }) => {
 const [form, setForm] = useState({
  username: '',
  password: '',
 });

 const { signIn } = useContext(AuthContext);

 return (
  <View>
   <ActionBar
    containerStyle={styles.bar}
    backgroundColor="#8b5400"
    title={'Login'}
    titleStyle={{ fontSize: 20, color: 'white', textAlign: 'left' }}
    titleContainerStyle={{ alignItems: 'center', marginRight: 30, marginTop: 30 }}
   />
   <ScrollView>
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
     <Text style={{ fontSize: 15 }}>{"Don't have an account? "}</Text>
     <Pressable onPress={() => navigation.navigate('Signup')}>
      <Text style={{ fontSize: 15, color: '#039be5' }}>{'Signup'}</Text>
     </Pressable>
    </View>
    <Pressable
     style={styles.button}
     onPress={() => signIn({ username: form.username, password: form.password })}
    >
     <Text style={{ fontSize: 16, lineHeight: 21, fontWeight: 'bold', letterSpacing: 0.25, color: 'white' }}>
      Login
     </Text>
    </Pressable>
   </ScrollView>
  </View>
 );
};

export default Login;

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
