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
        console.log(result);
    }

    return (

        <Stack direction='row'>
            <DragDropContext onDragEnd={handleDragDrop}>
                {todoBoards.map((todoBoard: any) => (
                    <TodoBoard key={todoBoard.droppableId}
                               boardStyle={styles[todoBoard?.board_id]}
                               initialTasks={todoBoard?.tasks}
                               boardId={todoBoard?.board_id}
                               todoBoards={todoBoards}

                    />
                ))}
            </DragDropContext>
        </Stack>
    );
});

export default Todos;
