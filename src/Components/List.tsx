import { FunctionComponent } from 'react';
import { Grid } from '@material-ui/core';

import EditTodo from './EditTodo';
import Todo from './Todo';
import { TodoInterface } from '../container';

interface ComponentProps {
    todos: TodoInterface[],
    editTodo: Function,
    saveTodo: Function,
    closeTodo: Function,
    deleteTodo: Function
}

const List: FunctionComponent<ComponentProps> = ({ todos, editTodo, saveTodo, closeTodo, deleteTodo }) => {
    return <Grid container>
        {todos.map(todo => {
            if ('editing' === todo.status) {
                return <EditTodo key={todo.id} todo={todo} saveTodo={saveTodo} />
            }
            return <Todo key={todo.id} todo={todo} editTodo={editTodo} closeTodo={closeTodo} deleteTodo={deleteTodo} />
        })}
    </Grid>;
}
export default List;