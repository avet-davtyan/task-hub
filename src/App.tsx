import Todos from "./lib/Todos";
import {Stack} from "@mui/material";
import {Button} from "@mui/material";
import {useRef} from "react";
import CustomTaskRenderer from "./CustomTodos/CustomTaskRenderer";
import CustomAddRenderer from "./CustomTodos/CustomAddRenderer";
import CustomHeaderRenderer from "./CustomTodos/CustomHeaderRenderer";
import {task, todoBoard} from "./lib/types";
import {flushSync} from "react-dom";


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
    // {
    //     board_id: '3',
    //     tasks: [
    //         {task_id: 7, name: 'Book flights'},
    //         {task_id: 8, name: 'Learn a new chord on the guitar'},
    //         {task_id: 9, name: 'Take a 20-minute meditation break'}
    //     ]
    // },
    // {
    //     board_id: '4',
    //     tasks: [
    //         {task_id: 5, name: 'Research destination attractions'},
    //         {task_id: 6, name: 'Pay credit card bill'}
    //     ]
    // },
]

const styles = {
    '1': {
        border: '0px solid black',
    },
    '2': {
        border: '2px solid black',
    },
    '3': {
        border: '0px solid black',
    }
}

const renderers = {
    '1': {
        // taskRenderer: CustomTaskRenderer,
        addRenderer: CustomAddRenderer,
        headerRenderer: CustomHeaderRenderer,
    }
}


function App() {

    const todoRef = useRef<any>();


    return (
        <>
            <Stack sx={{position: 'absolute', height: '100%', width: '100%', backgroundColor: '#DADADA'}}
                   alignItems='center'>
                <Todos boards={boards}
                       styles={styles}
                       renderers={renderers}
                       ref={todoRef}
                       onTaskDrop={(result: any) => {
                           if (!result.destination || !result.source) return;

                           const todoBoards = todoRef.current.getState();

                           const source = {index: result.source.index, board_id: result.source.droppableId}
                           const destination = {
                               index: result.destination.index,
                               board_id: result.destination.droppableId
                           }

                           const sourceBoard: todoBoard | undefined = todoBoards.find((board: todoBoard) => board.board_id == source.board_id);
                           const destinationBoard: todoBoard | undefined = todoBoards.find(
                               (board: todoBoard) => board.board_id == destination.board_id
                           );

                           if (sourceBoard && destinationBoard) {

                               const updatedSourceBoard = {...sourceBoard};
                               const updatedDestinationBoard = {...destinationBoard};
                               const taskToMove: task = updatedSourceBoard.tasks.splice(source.index, 1)[0];
                               updatedDestinationBoard.tasks.splice(destination.index, 0, taskToMove);
                               const updatedBoards: todoBoard[] = todoBoards.map((board: any) =>
                                   board.board_id === source.board_id
                                       ? updatedSourceBoard
                                       : board.board_id === destination.board_id
                                           ? updatedDestinationBoard
                                           : board
                               );

                               flushSync(() => {
                                   todoRef.current.setState(updatedBoards);
                               });
                           }
                       }}/>
            </Stack>
        </>
    );
}

export default App;
