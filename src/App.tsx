import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoBoard from "./components/todoBoard/TodoBoard";
import {Stack} from '@mui/material';
// @ts-ignore
import {DragDropContext} from 'react-beautiful-dnd';

const boardConfigs = [
    {
        // boardStyle: {position: 'absolute'},
        tasks: [
            {task_id: 1, name: 'first board 1'},
            {task_id: 2, name: 'first board 2'}
        ],
        droppableId: '1'
    },
    {
        boardStyle: {},
        tasks: [
            {task_id: 10, name: 'second board 5'},
            {task_id: 20, name: 'second board 7'}
        ],
        droppableId: '2'
    },
    {
        boardStyle: {position: 'absolute', right: '0px'},
        tasks: [
            {task_id: 100, name: 'second board 5'},
            {task_id: 200, name: 'second board 7'},
            {task_id: 300, name: 'ssssssss'}
        ],
        droppableId: '3'
    }
]

function App() {
    return (

        <Stack direction='row'>
            <DragDropContext>
                {boardConfigs.map(boardConfig => (
                    <TodoBoard key={boardConfig.droppableId}
                               boardStyle={boardConfig?.boardStyle}
                               initialTasks={boardConfig?.tasks}
                               droppableId={boardConfig?.droppableId}

                    />
                ))}
            </DragDropContext>
        </Stack>
    );
}

export default App;
