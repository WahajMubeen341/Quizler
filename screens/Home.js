import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Title from './Title';

const Home = ({navigation})  => {
  return (

<View style ={styles.container}>

  <Title/>
<View style={styles.bannerContainer}>
<Image source = {require('../assets/img.png')}
  style={styles.banner}
  />
</View>


<TouchableOpacity style= {styles.button} onPress={()=> navigation.navigate("Quiz")}>
  <Text style={styles.buttonText}>Start</Text>
</TouchableOpacity>
</View>
  )
}

export default Home;



const styles = StyleSheet.create({
container: {
paddingTop: 40,
paddingHorizontal: 40,
height: '100%'
},
bannerContainer: {
  justifyContent: 'center',
  alignContent: 'center',
  flex:1
}
,
banner:{
height:300,
width: 300,
},

button:{
  width: '100%',
  backgroundColor: '#1A759F',
  padding: 20,
  borderRadius: 16,
  alignItems: 'center',
  marginBottom: 30
},
buttonText: {
  fontSize: 24,
  fontWeight: '600',
  color: 'white'
}
});
