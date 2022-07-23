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
    titleContainerStyle={{ alignItems: 'center', marginRight: 50 }}
   />
   <ScrollView>
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
     <Text>{"Don't have an account? "}</Text>
     <Pressable onPress={() => navigation.navigate('Signup')}>
      <Text>{'Signup'}</Text>
     </Pressable>
    </View>
    <Button
     title="Login"
     color="blue"
     onPress={() => signIn({ username: form.username, password: form.password })}
    />
   </ScrollView>
  </View>
 );
};

export default Login;

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
