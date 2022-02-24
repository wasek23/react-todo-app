import { useRef, useCallback, Dispatch, FunctionComponent } from 'react';
import { Paper } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

import { ActionType } from '../container';

interface ComponentProps {
    dispatch: Dispatch<ActionType>
}

const AddTodoForm: FunctionComponent<ComponentProps> = ({ dispatch }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const errorRef = useRef<HTMLParagraphElement>(null);

    const addTodo = useCallback(e => {
        e.preventDefault();

        if (inputRef.current && errorRef.current) {
            if ('' === inputRef.current.value) {
                errorRef.current.classList.add('active');
                return null;
            }
            errorRef.current.classList.remove('active');

            dispatch({ type: 'ADD', text: inputRef.current.value });
            inputRef.current.value = '';
        }
    }, [dispatch]);

    return <Paper> <form onSubmit={addTodo} style={{ display: 'flex' }}>
        <Input
            placeholder='Todo text'
            inputRef={inputRef}
            className='addTodoInput'
        />

        <Button
            type='submit'
            variant='contained'
            color='primary'
            className='addTodoSubmit'
        >Add</Button>
    </form>

        <p ref={errorRef} className='error'>
            Error, must enter a value!
        </p>
    </Paper>
}

export default AddTodoForm;
