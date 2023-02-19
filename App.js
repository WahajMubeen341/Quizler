import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Navigation from './Navigation.js';
import Home from './screens/Home.js';
import Quiz from './screens/Quiz.js';
import Result from './screens/Result.js';

import Title from './screens/Title.js';
export default function App() {
  return (
    // <View style = {styles.container}>


     <NavigationContainer >
      <Navigation/>
     </NavigationContainer>
    //  </View>
  )
}

const styles = StyleSheet.create({
container: {
    paddingTop: 40,
    paddingHorizontal: 15
},

});
