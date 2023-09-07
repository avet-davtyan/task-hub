import './App.css';
import Todos from "./components/mainTodoBoardList/Todos";
import {Button} from "@mui/material";
import {useRef} from "react";

const _boardConfigs = [
    {
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
            {task_id: 300, name: 'third board 8'}
        ],
        droppableId: '3'
    }
]

const boards = [
    {
        board_id: '1',
        tasks: [
            {task_id: 1, name: 'firstBoard 1'},
            {task_id: 2, name: 'firstBoard 2'}
        ]
    },
    {
        board_id: '2',
        tasks: [
            {task_id: 3, name: 'secondBoard 1'},
            {task_id: 4, name: 'secondBoard 2'}
        ]
    },
    {
        board_id: '3',
        tasks: [
            {task_id: 5, name: 'thirdBoard 1'},
            {task_id: 6, name: 'thirdBoard 2'}
        ]
    }
]

const styles = {
    '1': {
        border: '0px solid black'
    },
    '2': {
        border: '0px solid red'
    }
}

function App() {

    const todoRef = useRef<any>();
    return (
        <>
            <Todos boards={boards} styles={styles} ref={todoRef}/>
        </>
    );
}

export default App;
