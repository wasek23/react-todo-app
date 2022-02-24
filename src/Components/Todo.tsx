import { FunctionComponent, useState } from 'react';
import { Edit, Close, Delete } from '@material-ui/icons';
import { Grid, Paper } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';

import { TodoInterface } from '../container';

interface ComponentProps {
    todo: TodoInterface,
    editTodo: Function,
    closeTodo: Function,
    deleteTodo: Function
}

const Todo: FunctionComponent<ComponentProps> = ({ todo, editTodo, closeTodo, deleteTodo }) => {
    const [fade, setFade] = useState(false);

    const deleteTo = (id: number) => {
        setFade(true);

        setTimeout(() => {
            deleteTodo(id)
        }, 500);
    };

    return <Grid
        xs={12}
        className={fade ? 'fade-out' : ''}
        item
    >
        <Paper elevation={2} className='todoPaper'>
            <span style={{ textDecoration: 'closed' === todo.status ? 'line-through' : 'none' }}>{todo.text}</span>

            <IconButton
                color='primary'
                aria-label='Edit'
                style={{ marginLeft: 'auto' }}
                onClick={() => editTodo(todo.id)}
            >
                <Edit fontSize='small' />
            </IconButton>
            <IconButton
                color='primary'
                aria-label='Close'
                onClick={() => closeTodo(todo.id)}
            >
                <Close fontSize='small' />
            </IconButton>
            <IconButton
                color='secondary'
                aria-label='Delete'
                onClick={() => deleteTo(todo.id)}
            >
                <Delete fontSize='small' />
            </IconButton>
        </Paper>
    </Grid>;
}
export default Todo;