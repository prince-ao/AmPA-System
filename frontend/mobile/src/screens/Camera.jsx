import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import ActionBar from 'react-native-action-bar';
import React, { useEffect, useRef, useState } from 'react';
import { Camera, CameraType } from 'expo-camera';

const CameraF = ({ navigation, route }) => {
 const [hasPermission, setHasPermission] = useState(false);
 const [type, setType] = useState(CameraType.back);
 let cameraComponent = useRef();

 const askCameraPermission = async () => {
  const { status } = await Camera.requestCameraPermissionsAsync();
  setHasPermission(status === 'granted');
 };

 useEffect(() => {
  askCameraPermission();
 }, []);

 if (hasPermission === null) {
  return <View />;
 }

 if (hasPermission === false) {
  return (
   <View>
    <Text>Permssion is needed</Text>
    <Button title="Grant Permission" onClick={askCameraPermission} />
   </View>
  );
 }
 return (
  <View>
   <ActionBar
    containerStyle={styles.bar}
    backgroundColor="#8b5400"
    leftIconName={'back'}
    onLeftPress={() => navigation.pop()}
    leftIconImageStyle={styles.icon}
    title={'Camera'}
    titleContainerStyle={{ alignItems: 'center', marginRight: 50 }}
   />
   <Camera ref={cameraComponent} style={styles.camera} type={type}>
    <View style={styles.buttonContainer}>
     <TouchableOpacity
      style={styles.button}
      onPress={() => {
       setType(type === CameraType.back ? CameraType.front : CameraType.back);
      }}
     >
      <Text style={styles.text}> Flip </Text>
     </TouchableOpacity>
     <TouchableOpacity
      onPress={async () => {
       const val = await cameraComponent.current.takePictureAsync();
       route.params.setPathOfImage(val.uri);
       navigation.pop();
      }}
     >
      <Image style={styles.image} source={require('../assets/photograph.png')} />
     </TouchableOpacity>
    </View>
   </Camera>
  </View>
 );
};

export default CameraF;

const styles = StyleSheet.create({
 camera: {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',
  height: '95%',
 },
 buttonContainer: {
  backgroundColor: 'transparent',
  marginBottom: 100,
  marginLeft: 40,
  display: 'flex',
  flexDirection: 'row',
 },
 button: {
  alignSelf: 'flex-end',
  alignItems: 'center',
 },
 text: {
  fontSize: 18,
  color: 'white',
 },
 image: {
  width: 40,
  height: 40,
  marginLeft: 120,
 },
});
