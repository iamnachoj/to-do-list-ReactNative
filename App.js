import React from 'react';
import { StyleSheet, FlatList, Text, View, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useState } from 'react';

// Components
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

export default function App() {
  const [todos, setTodos] = useState([
    {text:"buy coffee", key: "1"},
    {text:"create app", key: "2"},
    {text:"play Nintendo", key: "3"}
  ]);
  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key) 
    })
  }
  const submitHandler = (text) => {

    if(text.length > 1){
      setTodos((prevTodos) => {
        return [
          {text: text, key: Math.random().toString()},
          ...prevTodos
        ]
      })
    } else {
      Alert.alert('oops!', `You must write something.`, [
        {text: 'Understood', onPress: () => console.log('alert closed')}
      ])
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
      <View style={styles.container}>
        <Header/>
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList 
            data={todos}
            renderItem={({item}) => (
              <TodoItem item={item} pressHandler={pressHandler}/>
            )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex:1,
    padding: 40
  },
  list:{
    flex: 1,
    marginTop: 10
  }
});
