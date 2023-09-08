import './App.css';
import Todos from "./components/mainTodoBoardList/Todos";
import {Stack} from "@mui/material";
import {Button} from "@mui/material";
import {useRef} from "react";


const boards = [
    {
        board_id: '1',
        tasks: [
            {task_id: 1, name: 'firstBoard 1', course_id: 2},
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
            {task_id: 7, name: 'thirdBoard 1'},
            {task_id: 8, name: 'thirdBoard 2'},
            {task_id: 9, name: 'thirdBoard 2'}
        ]
    },
    {
        board_id: '4',
        tasks: [
            {task_id: 5, name: 'thirdBoard 1'},
            {task_id: 6, name: 'thirdBoard 2'}
        ]
    },
]

const styles = {
    '1': {
        border: '2px solid black',
    },
    '2': {
        border: '2px solid black',
    },


}

function App() {

    const todoRef = useRef<any>();
    return (
        <>
            <Stack sx={{position: 'absolute', height: '100%', width: '100%', backgroundColor: '#DADADA'}}
                   alignItems='center'>
                <Todos boards={boards} styles={styles} ref={todoRef}/>
            </Stack>
        </>
    );
}

export default App;
