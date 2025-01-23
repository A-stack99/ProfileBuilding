import React, { useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Button } from 'react-native-paper';

const TodoApp = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);

  // Handle Add Todo
  const handleAddTodo = () => {
    if (todo === "") return;
    setTodoList([...todoList, { id: Date.now().toString(), title: todo }]);
    setTodo("");
  };

  // Handle Delete Todo
  const handleDeleteTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  // Handle Edit Todo
  const handleEditTodo = (todo) => {
    setEditingTodo(todo);
    setTodo(todo.title);
  };

  // Handle Update Todo
  const handleUpdateTodo = () => {
    const updatedTodos = todoList.map((item) =>
      item.id === editingTodo.id ? { ...item, title: todo } : item
    );
    setTodoList(updatedTodos);
    setEditingTodo(null);
    setTodo("");
  };

  // Render Todo Items
  const renderTodos = ({ item }) => (
    <View style={styles.todoItem}>
      <Text style={styles.todoText}>{item.title}</Text>
      <View style={styles.actionButtons}>
        <Button mode="contained" compact onPress={() => handleEditTodo(item)}>
          Edit
        </Button>
        <Button mode="contained" compact onPress={() => handleDeleteTodo(item.id)}>
          Delete
        </Button>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>To-Do App</Text>
      <TextInput
        style={styles.input}
        placeholder="Add a New Task"
        value={todo}
        onChangeText={(text) => setTodo(text)}
      />
      {editingTodo ? (
        <TouchableOpacity style={styles.button} onPress={handleUpdateTodo}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleAddTodo}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      )}
      <FlatList
        data={todoList}
        keyExtractor={(item) => item.id}
        renderItem={renderTodos}
      />
    </View>
  );
};

export default TodoApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#007BFF',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007BFF',
    borderRadius: 8,
    paddingVertical: 12,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  todoItem: {
    backgroundColor: '#007BFF',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  todoText: {
    color: '#fff',
    fontSize: 18,
    flex: 1,
    fontWeight: '500',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 8,
  },
});