import { StyleSheet } from 'react-native';

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