import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useReducer, useState, useMemo, createContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

import { Home, PetDB, PetView, MPetReq } from './screens/pet-owner';
import { ShelterHome, UpdatePet, AddNewPet } from './screens/pet-shelter';
import { ACO, Camera, PetEntry } from './screens/animal-rescue-officer';
import Login from './screens/Login.jsx';
import Signup from './screens/Signup.jsx';

const Stack = createStackNavigator();
const AuthContext = createContext();
export default AuthContext;

export const AppStack = ({ navigation }) => {
 const [user, setUser] = useState({});
 const [_, updateState] = useState({
  lastRefreshed: Date(Date.now()).toString(),
 });

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
  getData().then((users) => {
   if (users) {
    for (let i = 0; i < users.length; i++) {
     if (users[i].username === user?.username && users[i].password === user?.password) {
      dispatch({ type: 'RESTORE_TOKEN', token: user });
     }
    }
   }
  });
 }, []);

 const authContext = useMemo(
  () => ({
   signIn: async (data) => {
    getData().then((users) => {
     if (users) {
      for (let i = 0; i < users.length; i++) {
       if (users[i].username === data['username'] && users[i].password === data['password']) {
        setUser({ username: data['username'], password: data['password'], role: users[i].role });
        dispatch({
         type: 'SIGN_IN',
         token: { username: data['username'], password: data['password'], role: users[i].role },
        });
        Toast.show({
         type: 'success',
         text1: `Hello ${users[i].username} 👋`,
         text2: 'You are logged in',
        });
        break;
       }
      }

      if (!user) {
       Toast.show({
        type: 'error',
        text1: 'Feilds',
        text2: 'Invalid username or password',
       });
      }
     } else {
      Toast.show({
       type: 'error',
       text1: 'Feilds',
       text2: 'Please sign up first',
      });
     }
    });
   },
   signOut: () => dispatch({ type: 'SIGN_OUT', token: null }),
   signUp: async (data) => {
    // set user to local storage
    if (data['username'] && data['password'] && data['role']) {
     getData().then((users) => {
      if (users) {
       for (let i = 0; i < users.length; i++) {
        if (users[i].username === data['username']) {
         Toast.show({
          type: 'error',
          text1: 'Feilds',
          text2: 'You already have an account with the same username',
         });
         return false;
        }
       }
      }
      setUser({ username: data['username'], password: data['password'], role: data['role'] });
      setData([{ username: data['username'], password: data['password'], role: data['role'] }], users);
      Toast.show({
       type: 'success',
       text1: 'New account',
       text2: 'Created a new account with the username: ' + data['username'],
      });
      return true;
     });
    } else {
     Toast.show({
      type: 'error',
      text1: 'Feilds',
      text2: 'Please fill out all fields',
     });
    }
    //dispatch({ type: 'SIGN_IN', token: null });
   },
  }),
  []
 );

 const setData = async (data, oldData) => {
  if (!oldData) oldData = [];
  const newData = [...oldData, ...data];
  await AsyncStorage.setItem('@chi-chi', JSON.stringify(newData));
 };

 /**
  * Object to store the user's pet data. will look like:
  * {
  *  role: 'pet-owner', //or pet-shelter, or pet-officer
  *  d  '',
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
      <Stack.Screen name="Pets Database" component={PetDB} />
      <Stack.Screen name="Make Pet Request" component={MPetReq} />
      <Stack.Screen name="Pet View" component={PetView} />
     </>
    ) : state.userToken.role === 'pet-shelter' ? (
     <>
      <Stack.Screen name="Shelter Home" component={ShelterHome} />
      <Stack.Screen name="Update Pet" component={UpdatePet} />
      <Stack.Screen name="Add New Pet" component={AddNewPet} />
     </>
    ) : state.userToken.role === 'pet-officer' ? (
     <>
      <Stack.Screen name="Animal Control Officer" component={ACO} />
      <Stack.Screen name="Pet Entry" component={PetEntry} />
      <Stack.Screen name="Camera" component={Camera} />
     </>
    ) : null}
   </Stack.Navigator>
   <Toast />
  </AuthContext.Provider>
 );
};
const styles = StyleSheet.create({});
