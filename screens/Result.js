import { View, Text, Image, StyleSheet, TouchableOpacity} from "react-native"

export default function Result({navigation}) {
  return (
    <View style={styles.container}>
      <View>
        <Text>This is Result</Text>
      </View>

      <View>
      <Image source = {require('../assets/img.png')}
        style={styles.banner}
        />
      </View>

      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
  paddingTop: 40,
  paddingHorizontal: 15
  },

  banner:{
  height:300,
  width: 300,
  marginLeft: 30
  },
  bannerContainer:{

  }
  });