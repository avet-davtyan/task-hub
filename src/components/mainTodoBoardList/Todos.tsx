import React, {useImperativeHandle, useState} from 'react';
import TodoBoard from "../todoBoard/TodoBoard";
import {Stack} from '@mui/material';
import {forwardRef} from "react";
// @ts-ignore
import {DragDropContext} from 'react-beautiful-dnd';
import {Button} from "@mui/material";

const Todos = forwardRef(({boards = [], styles = []}: { boards: any, styles: any }, ref) => {

    const [todoBoards, setTodoBoards] = useState(boards);

    useImperativeHandle(ref, () => ({
        getMyState: () => {
            return todoBoards
        }
    }), [todoBoards]);

    const handleDragDrop = (result: any) => {

        if (!result.destination) return;

        const source = {index: result.source.index, board_id: result.source.droppableId}
        const destination = {index: result.destination.index, board_id: result.destination.droppableId}

        const sourceBoard = todoBoards.find((board: any) => board.board_id == source.board_id);
        const destinationBoard = todoBoards.find(
            (board: any) => board.board_id == destination.board_id
        );

        if (sourceBoard && destinationBoard) {
            // Clone the source and destination boards to avoid directly modifying the state
            const updatedSourceBoard = {...sourceBoard};
            const updatedDestinationBoard = {...destinationBoard};

            // Get the task from the source board
            const taskToMove = updatedSourceBoard.tasks.splice(source.index, 1)[0];

            // Insert the task into the destination board at the specified index
            updatedDestinationBoard.tasks.splice(destination.index, 0, taskToMove);

            // Update the state with the modified boards
            const updatedBoards = todoBoards.map((board: any) =>
                board.board_id === source.board_id
                    ? updatedSourceBoard
                    : board.board_id === destination.board_id
                        ? updatedDestinationBoard
                        : board
            );

            // Set the state with the updated data
            setTodoBoards(updatedBoards);
        }
    }

    return (

        <Stack direction='row'>
            <DragDropContext onDragEnd={handleDragDrop}>
                {todoBoards.map((todoBoard: any) => (
                    <TodoBoard key={todoBoard.board_id}
                               boardStyle={styles[todoBoard?.board_id]}
                               tasks={todoBoard?.tasks}
                               boardId={todoBoard?.board_id}
                               todoBoards={todoBoards}
                               setTodoBoards={setTodoBoards}

                    />
                ))}
            </DragDropContext>
        </Stack>
    );
});

export default Todos;
