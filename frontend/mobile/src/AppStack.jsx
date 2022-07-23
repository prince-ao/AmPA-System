import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useReducer, useState, useMemo, createContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';

import { Home, PetDB, PetView, MPetReq } from './screens/pet-owner';
import { ShelterHome } from './screens/pet-shelter';
import { OfficerHome } from './screens/animal-rescue-officer';
import Login from './screens/Login.jsx';
import Signup from './screens/Signup.jsx';
// move to officer dir
import { ACO, PetEntry, Camera } from './screens';


const Stack = createStackNavigator();
const AuthContext = createContext();
export default AuthContext;

export const AppStack = ({ navigation }) => {
 const [user, setUser] = useState(null);

 const [state, dispatch] = useReducer(
  (prevState, action) => {
   switch (action.type) {
    case 'RESTORE_TOKEN':
     return {
      ...prevState,
      userToken: action.token,
      isLoading: false,
     };
    case 'SIGN_IN':
     return {
      ...prevState,
      isSignout: false,
      userToken: action.token,
     };
    case 'SIGN_OUT':
     return {
      ...prevState,
      isSignout: true,
      userToken: null,
     };
   }
  },
  {
   isLoading: true,
   isSignout: false,
   userToken: null,
  }
 );

 useEffect(() => {
  getData().then((user) => {
   setUser(user);
   dispatch({ type: 'RESTORE_TOKEN', token: user });
  });
 }, []);

 const authContext = useMemo(
  () => ({
   signIn: async (data) => {
    getData().then((user) => {
     if (user) {
      if (user.username === data['username'] && user.password === data['password']) {
       setUser(user);
       dispatch({ type: 'SIGN_IN', token: user });
      } else {
       Toast.showWithGravity('Invalid username or password', Toast.SHORT, Toast.CENTER);
      }
     } else {
      Toast.showWithGravity('Please sign up first', Toast.SHORT, Toast.CENTER);
     }
    });
   },
   signOut: () => dispatch({ type: 'SIGN_OUT', token: null }),
   signUp: async (data) => {
    // set user to local storage
    if (data['username'] && data['password'] && data['role']) {
     AsyncStorage.getItem('@chi-chi').then((user) => {
      if (user) {
       Toast.showWithGravity('You already have an account with the same username', Toast.SHORT, Toast.CENTER);
      } else {
       setData({ username: data['username'], password: data['password'], role: data['role'] }).then(() => {
        navigation.navigate('Login');
       });
      }
     });
    } else {
     Toast.showWithGravity('Please fill out all fields', Toast.SHORT, Toast.CENTER);
    }
    //dispatch({ type: 'SIGN_IN', token: null });
   },
  }),
  []
 );

 const setData = async (data) => {
  const jsonVal = JSON.stringify(data);
  await AsyncStorage.setItem('@chi-chi', jsonVal);
 };

 /**
  * Object to store the user's pet data. will look like:
  * {
  *  role: 'pet-owner', //or pet-shelter, or pet-officer
  *  username: '',
  *  password: '',
  * }
  *
  */
 const getData = async () => {
  try {
   const jsonValue = await AsyncStorage.getItem('@chi-chi');
   return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
   // error reading value
  }
 };

 return (
  <AuthContext.Provider value={authContext}>
   <Stack.Navigator
    screenOptions={{
     headerShown: false,
    }}
   >
    {state.userToken === null ? (
     <>
      <Stack.Screen
       name="Login"
       component={Login}
       options={{
        title: 'Sign in',
        // When logging out, a pop animation feels intuitive
        // You can remove this if you want the default 'push' animation
        animationTypeForReplace: state.isSignout ? 'pop' : 'push',
       }}
      />
      <Stack.Screen name="Signup" component={Signup} />
     </>
    ) : state.userToken.role === 'pet-owner' ? (
     <>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Pet Database" component={PetDB} />
      <Stack.Screen name="Make Pet Request" component={MPetReq} />
      <Stack.Screen name="Pet View" component={PetView} />
     </>
    ) : state.userToken.role === 'pet-shelter' ? (
     <>
      <Stack.Screen name="Shelter Home" component={ShelterHome} />
     </>
    ) : state.userToken.role === 'pet-officer' ? (
     <>
     {/*need to import them */}
      <Stack.Screen name="Pet Entry" component={PetEntry} />
      <Stack.Screen name="Camera" component={Camera} />
      <Stack.Screen name="Animal Control Officer" component={ACO} />
      <Stack.Screen name="Officer Home" component={OfficerHome} />
     </>
    ) : null}
   </Stack.Navigator>
  </AuthContext.Provider>
 );
};

const styles = StyleSheet.create({});
