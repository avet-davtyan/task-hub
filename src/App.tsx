import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoBoard from "./components/todoBoard/TodoBoard";
import {Stack} from '@mui/material';

function App() {
    return (
        <Stack style={{
            backgroundColor: '#DCDCDC',
            width: '100%',
            height: '100%',
            position: 'absolute'
        }} justifyContent='center' alignItems='center'>
            <TodoBoard boardStyle={{

                // transform: 'translate(-50%, -50%)',


            }}/>
        </Stack>
    );
}

export default App;
