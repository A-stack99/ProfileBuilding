import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Items = [
  { title: 'Overview', icon: 'pencil' },
  { title: 'My Patients', icon: 'heart' },
  { title: 'Work Schedule', icon: 'calendar-check-o' },
  { title: 'Prescriptions', icon: 'clipboard' },
  { title: 'Reviews', icon: 'star' },
  { title: 'Blog', icon: 'comment' },
  { title: 'Library', icon: 'book' },
  { title: 'Emergency No.', icon: 'phone' },
  { title: 'Chats', icon: 'comments-o' },
  { title: 'Settings', icon: 'gear' },
  { title: 'Logout', icon: 'sign-out' }, 

];

export const OverView = () => {
  return (

    <View style={styles.bgContainer}>
      <View style={styles.viewItem}>
        {['Wallet', 'Invoice'].map((title, index) => (
          <TouchableOpacity key={index} style={styles.box}>
            <View style={styles.boxImage}>
            <FontAwesome
              name={title === 'Wallet' ? 'credit-card' : 'file-text-o'}
              size={24}
              style={styles.boxIcons}
            /></View>
            <Text style={styles.boxText}>{title}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        style={{ marginTop: -70, flex: 0, backgroundColor: 'lightgray'}}
        data={Items}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.listItem}>
            <FontAwesome name={item.icon} size={20} />
            <Text style={styles.listText}>{item.title}</Text>
            <FontAwesome name='angle-right' size={20} />
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  bgContainer: {
    flex: 0,
    backgroundColor: "lightgray",
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    padding: 10,
  },
  viewItem: {
    flexDirection: 'row',
    padding: 20,

  },
  box: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    marginHorizontal: 5,
    alignItems: 'center',
    borderRadius: 5,
    elevation: 5,
    top: -65,
  },
  boxImage: {
   width: 50,
   height: 50,
   justifyContent: 'center',
   alignItems: 'center',
   paddingTop: 10,
    backgroundColor: '#27334E',
    borderRadius: 50,
    margin: 10,
    marginBottom: 5,
  },
  boxIcons: {
    marginBottom: 5,
    color: '#fff',
    backgroundColor: 'black',
  },
  boxText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  listItem: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderRadius: 10,
    marginBottom: 8,
    borderBottomColor: '#ddd',
    backgroundColor: "white",
  },
  listText: {
    fontSize: 16,
    flex: 1,
    color: '#333',
    marginLeft: 20,

  },
  listArrow: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  icon: {
    marginLeft: 'auto'
  },
});

export default OverView;