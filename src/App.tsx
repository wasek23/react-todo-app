import { useEffect, useReducer } from 'react';
import { Grid } from '@material-ui/core';
import './App.css';

import AddTodoForm from './Components/AddTodoForm';
import List from './Components/List';
import { TodoInterface, ActionType, updateTodoValue, saveTodoValue } from './container';

function App() {
  const savedTodos = localStorage.getItem('todos');
  const initialTodos = savedTodos ? JSON.parse(savedTodos) : [];

  const reducer = (todos: TodoInterface[], action: ActionType) => {
    switch (action.type) {
      case 'ADD':
        return [...todos, {
          id: Date.now(),
          text: action.text,
          status: 'active'
        }];

      case 'EDIT':
        return updateTodoValue(todos, action.id, 'status', 'editing');

      case 'SAVE':
        return saveTodoValue(todos, action.id, action.text, 'active');

      case 'CLOSE':
        return updateTodoValue(todos, action.id, 'status', 'closed');

      case 'DELETE':
        return todos.filter(({ id }) => id !== action.id);
    }
  }

  const [todos, dispatch] = useReducer(reducer, initialTodos);

  // Set in local storage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Todo actions
  const editTodo = (id: number) => {
    dispatch({ type: 'EDIT', id });
  }
  const saveTodo = (id: number, text: string) => {
    dispatch({ type: 'SAVE', id, text });
  }
  const closeTodo = (id: number, text: string) => {
    dispatch({ type: 'CLOSE', id });
  }
  const deleteTodo = (id: number) => {
    dispatch({ type: 'DELETE', id })
  }

  return <div className='todoApp'>
    <Grid container spacing={0} className='todoContainer'>
      <Grid className='todoGrid'>
        <AddTodoForm dispatch={dispatch} />
      </Grid>

      <Grid className='todoGrid'>
        <List
          todos={todos}
          editTodo={editTodo}
          saveTodo={saveTodo}
          closeTodo={closeTodo}
          deleteTodo={deleteTodo}
        />
      </Grid>
    </Grid>
  </div>;
}

export default App;
