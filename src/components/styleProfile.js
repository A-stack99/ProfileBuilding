import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "#27334E",
    flex: 0, 
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 25,
    backgroundColor: "#27334E",
  },

  getPic: {
    marginBottom:20,
    zIndex:1,
  },

  camera: {
    position: 'absolute', 
    top: 10, 
    left: 22, 
    zIndex: 1, 
    padding: 5, 
    borderRadius: 50, 
    backgroundColor:'#27334E',
    borderColor:'gray',
    borderWidth:2,
    color:'Gray',
   
  },

  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
   marginLeft: -30,
    marginBottom: 18,
  },

  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: "white",
    marginBottom: 5,
    marginLeft: 7,
  },

  userEmail: {
    fontSize: 16,
    color: "white",
    marginLeft: 15,
    top: -8,
    
  },
});

export default styles;



 
  
 