import React, { useState , useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
  ActivityIndicator,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState({ title: '', description: '' });
  const [editingTask, setEditingTask] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
   
    loadTasks();

    const hide = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

return () => clearTimeout(hide);
  }, []);

  const loadTasks = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem('tasks');
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    } catch (error) {
      console.error('Error loading tasks:', error);
    }
  };
  const saveTasksToStorage = async (updatedTasks) => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
    } catch (error) {
      console.error('Error saving tasks:', error);
    }
  };

  const handleInputChange = (field, value) => {
    setTaskInput({ ...taskInput, [field]: value });
  };

  const handleTaskSave = () => {
    if (!taskInput.title.trim()) {
      Alert.alert('Error', 'Task title cannot be empty!');
      return;
    }
    let updatedTasks;
    if (editingTask) {
      updatedTasks = tasks.map((task) =>
        task.id === editingTask.id
          ? { ...task, title: taskInput.title, description: taskInput.description || 'No description' }
          : task
      );
      setEditingTask(null);
    }
    else {
      updatedTasks = [...tasks, {
        id: Date.now().toString(),
        title: taskInput.title,
        description: taskInput.description || 'No description',
      }];
    }

    setTasks(updatedTasks);
    saveTasksToStorage(updatedTasks);
    setTaskInput({ title: '', description: '' });

  };

  const handleTaskDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    saveTasksToStorage(updatedTasks);

  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setTaskInput({ title: task.title, description: task.description });
  };

  const renderTask = ({ item }) => (
    <View style={styles.taskContainer}>
      <View>
        <Text style={styles.taskText}>{item.title}</Text>
        <Text style={styles.taskDesc}>{item.description}</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={() => handleEditTask(item)}
          style={styles.editButton}>
          <Text style={styles.editText}>
            Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleTaskDelete(item.id)}
          style={styles.deleteButton}>
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loaderContainer}>
          {/* <ActivityIndicator size="large" color="#0000ff" /> */}
          <Image source={require('../assests/images/Home.jpg')} style={styles.loaderImage} />
        </View>
      ) : (
        <>
          <Text style={styles.header}>Todo List</Text>
          <TextInput
            style={styles.input}
            placeholder="Task Title"
            value={taskInput.title}
            onChangeText={(text) => handleInputChange('title', text)}
          />
          <TextInput
            style={[styles.input, styles.descInput]}
            placeholder="Task Description (optional)"
            value={taskInput.description}
            onChangeText={(text) => handleInputChange('description', text)}
          />
          <TouchableOpacity style={styles.addButton} onPress={handleTaskSave}>
            <Text style={styles.addButtonText}>{editingTask ? 'Update' : 'Add'}</Text>
          </TouchableOpacity>
          <FlatList
            data={tasks}
            keyExtractor={(item) => item.id}
            renderItem={renderTask}
            showsVerticalScrollIndicator={false} 
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'lightblue',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderImage:{
    height: 200,
    width: 200,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  descInput: {
    height: 80,
    textAlignVertical: 'top',
  },
  addButton: {
    backgroundColor: '#5f9ea0',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginBottom: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  taskText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  taskDesc: {
    fontSize: 14,
    color: '#757575',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editButton: {
    marginRight: 8,
  },
  editText: {
    color: '#fff',
    backgroundColor: '#4682b4',
    padding: 8,
    borderRadius: 4,
  },
  deleteButton: {},
  deleteText: {
    color: '#fff',
    backgroundColor: '#008080',
    padding: 8,
    borderRadius: 4,
  },
});

export default TodoApp;