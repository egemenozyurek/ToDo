import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ToDoList from './components/ToDoList';
import Input from './components/Input'

export default function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const activeTodos = todos.filter(todo => !todo.isDone);

  const renderTodo = ({ item }) => (
    <ToDoList todos={item} isDone={isDone} deleteTodo={deleteTodo} />
  );

  const addTodo = () => {
    console.log('addTodo : ' + text);

    setTodos([...todos, {
      id: Date.now() + Math.random(),
      name: text,
      isDone: false
    }]);

    setText('');
  };

  const isDone = id => {
    const newTodoList = todos.map(todo => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setTodos(newTodoList);
  };

  const deleteTodo = id => {
    const newTodoList = todos.filter(todo => todo.id !== id);
    setTodos(newTodoList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.title}>Yapılacaklar</Text>
        <Text style={styles.title}>{activeTodos.length}</Text>
      </View>
      <View style={styles.innerContainer}>
        <FlatList data={todos} renderItem={renderTodo} />
      </View>
      <Input text={text} setText={setText} addTodo={addTodo} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102027',
    padding: 20,
    justifyContent: 'space-between',
  },
  innerContainer: {
    flex: 1,
    marginTop: 10,
  },
  header_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 30,
    color: '#ffa500',
  },
});
