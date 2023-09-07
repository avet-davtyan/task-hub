import './App.css';
import Todos from "./components/mainTodoBoardList/Todos";
import {Button} from "@mui/material";
import {useRef} from "react";

const _boardConfigs = [
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
            {task_id: 300, name: 'third board 8'}
        ],
        droppableId: '3'
    }
]


function App() {

    const todoRef = useRef<any>();
    return (

        <>
            <Button variant='contained' onClick={() => {
                console.log(todoRef.current.getMyState());
            }}>info about state</Button>
            <Todos configs={_boardConfigs} ref={todoRef}/>
        </>
    );
}

export default App;
