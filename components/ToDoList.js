import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from "../styles/ToDoList.style"

function ToDoList({ todos, isDone, deleteToDo }) {
    return (
        <View>
            <TouchableOpacity
                style={todos.isDone ? styles.doneTodo : styles.todo}
                onPress={() => isDone(todos.id)}
                onLongPress={() => deleteTodo(todos.id)}>
                <Text style={todos.isDone ? styles.doneTodoText : styles.todoText}>
                    {todos.name}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default ToDoList