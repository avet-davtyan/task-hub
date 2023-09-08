import './App.css';
import Todos from "./components/mainTodoBoardList/Todos";
import {Stack} from "@mui/material";
import {Button} from "@mui/material";
import {useRef} from "react";
import CustomTaskRenderer from "./components/CustomTodos/CustomTaskRenderer";


const boards = [
    {
        board_id: '1',
        tasks: [
            {task_id: 1, name: 'Buy paint and supplies', course_id: 2},
        ]
    },
    {
        board_id: '2',
        tasks: [
            {task_id: 3, name: 'Prepare a presentation for the client'},
            {task_id: 4, name: 'Visit the supermarket'}
        ]
    },
    {
        board_id: '3',
        tasks: [
            {task_id: 7, name: 'Book flights'},
            {task_id: 8, name: 'Learn a new chord on the guitar'},
            {task_id: 9, name: 'Take a 20-minute meditation break'}
        ]
    },
    {
        board_id: '4',
        tasks: [
            {task_id: 5, name: 'Research destination attractions'},
            {task_id: 6, name: 'Pay credit card bill'}
        ]
    },
]

const styles = {
    '1': {
        border: '0px solid black',
    },
    '2': {
        border: '0px solid black',
    },
    '3': {
        border: '0px solid black',
    }
}

const renderers = {
    '1': {
        taskRenderer: CustomTaskRenderer
    }
}

function App() {

    const todoRef = useRef<any>();
    return (
        <>
            <Stack sx={{position: 'absolute', height: '100%', width: '100%', backgroundColor: '#DADADA'}}
                   alignItems='center'>
                <Todos boards={boards} styles={styles} renderers={renderers} ref={todoRef}/>
            </Stack>
        </>
    );
}

export default App;
