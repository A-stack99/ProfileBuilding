import React, { useState } from "react";
import {
  SafeAreaView, View, Text, Image, StyleSheet,
  TouchableOpacity, StatusBar, Dimensions, 
} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { launchImageLibrary } from 'react-native-image-picker';
import { OverView } from "./OverView";
import styles from "./style";

// const { width, height } = Dimensions.get('window').width; 

const ProfilePage = () => {
  const [imageUri, setImageUri] = useState(null);


  const openImagePicker = () => {
    launchImageLibrary({ mediaType: 'photo', maxWidth: 800, maxHeight: 800 }, 
      (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('Image Picker Error: ', response.errorMessage);
      } else {
        setImageUri(response.assets[0].uri);
      }
    });
  };


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={'#27334E'} barStyle={"light-content"} />

      <View style={styles.bg}>
        <View style={styles.profileInfo}>
            <View style={styles.getPic}>
              <TouchableOpacity onPress={openImagePicker}>
                <FontAwesome name="camera" size={18} style={styles.camera} />
                
              </TouchableOpacity>
            </View>
          <Image 
            source={imageUri ? { uri: imageUri } :require('../Images/ProfilePic.jpg')}
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.userName}> Dr. Floyd Miles</Text>
            <Text style={styles.userEmail}>License No. 1225466652</Text>
          </View>

        </View>
        <OverView />

      </View>
    </SafeAreaView>
  );
};


export default ProfilePage;