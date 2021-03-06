import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My To-do List</Text>
    </View>
  )
}

const styles = StyleSheet.create({
   header: {
     height: 80,
     paddingTop: 65,
     paddingBottom: 50,
     backgroundColor: 'coral',
   },
   title:{
     textAlign: 'center',
     color: '#fff',
     fontSize:24,
     fontWeight: 'bold'
   }
})