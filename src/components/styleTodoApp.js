import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'lightblue',
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
    maxWidth: 'auto',
    overflow:'auto',
    resize:'horizontal',
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
  statusButton: {
    marginRight: 8,
  },
  statusText: {
    color: '#fff',
    backgroundColor: '#4caf50',
    padding: 8,
    borderRadius: 4,
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