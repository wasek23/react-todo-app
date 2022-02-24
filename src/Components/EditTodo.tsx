import { FunctionComponent, useRef } from 'react';
import { Save } from '@material-ui/icons';
import { Grid, Paper } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';

import { TodoInterface } from '../container';

interface ComponentProps {
    todo: TodoInterface,
    saveTodo: Function
}

const Todo: FunctionComponent<ComponentProps> = ({ todo, saveTodo }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return <Grid xs={12} item    >
        <Paper elevation={2} className='todoPaper'>
            <form
                onSubmit={() => inputRef.current && saveTodo(todo.id, inputRef.current.value)}
                style={{ display: 'flex', width: '100%' }}
            >
                <Input
                    style={{ width: 'calc(100% - 44px)' }}
                    defaultValue={todo.text}
                    inputRef={inputRef}
                />
                <IconButton
                    type='submit'
                    color='primary'
                    aria-label='Save'
                    style={{ marginLeft: 'auto', width: '44px' }}
                >
                    <Save fontSize='small' />
                </IconButton>
            </form>
        </Paper>
    </Grid>;
}
export default Todo;