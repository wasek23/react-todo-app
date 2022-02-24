export interface TodoInterface {
    id: number,
    text: string,
    status: string
}

export type ActionType = { type: 'ADD', text: string } | { type: 'EDIT', id: number } | { type: 'SAVE', id: number, text: string } | { type: 'CLOSE', id: number } | { type: 'DELETE', id: number };


export const updateTodoValue = (
    todos: TodoInterface[],
    id: number,
    type: string,
    value: number | string) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex(x => x.id === id);

    newTodos[index] = { ...newTodos[index], [type]: value }

    return newTodos;
}

export const saveTodoValue = (
    todos: TodoInterface[],
    id: number,
    text: string,
    status: string) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex(x => x.id === id);

    newTodos[index] = { ...newTodos[index], text, status }

    return newTodos;
}