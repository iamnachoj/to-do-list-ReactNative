import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity  } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

export default function TodoItem({item, pressHandler}) {
  return (
    <TouchableOpacity >
     <View style={styles.item}>
      <MaterialIcons onPress={() => pressHandler(item.key)} name="delete" size={20} color="#666" />
      <Text style={styles.itemText}>{item.text}</Text>
     </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
   item:{
     flexDirection: 'row',
     padding: 16,
     marginTop: 16,
     borderColor: '#bbb',
     borderWidth: 1,
     borderStyle: 'dashed',
     borderRadius: 8
   },
   itemText: {
     marginLeft: 15
   }
  })