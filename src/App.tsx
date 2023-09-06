import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoBoard from "./components/todoBoard/TodoBoard";

function App() {
    return (
        <div style={{
            backgroundColor: '#DCDCDC',
            width: '100%',
            height: '100%',
            position: 'absolute'
        }}>
            <TodoBoard boardStyle={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                position: 'absolute',
                

            }}/>
        </div>
    );
}

export default App;
