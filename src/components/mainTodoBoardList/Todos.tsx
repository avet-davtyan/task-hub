import React, {useImperativeHandle, useState} from 'react';
import TodoBoard from "../todoBoard/TodoBoard";
import {Stack} from '@mui/material';
import {forwardRef} from "react";
// @ts-ignore
import {DragDropContext} from 'react-beautiful-dnd';
import {Button} from "@mui/material";

import {flushSync} from "react-dom";
import {task, todoBoard, TodosType} from "../types/types";

const Todos = forwardRef(({boards, styles, renderers}: TodosType, ref) => {

    const [todoBoards, setTodoBoards] = useState<todoBoard[]>(boards);

    useImperativeHandle(ref, () => ({
        getMyState: () => {
            return todoBoards
        }
    }), [todoBoards]);

    const handleDragDrop = (result: any) => {

        if (!result.destination || !result.source) return;

        const source = {index: result.source.index, board_id: result.source.droppableId}
        const destination = {index: result.destination.index, board_id: result.destination.droppableId}

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
                setTodoBoards(updatedBoards);
            });
        }
    }

    return (

        <Stack direction='row' alignItems="flex-start">
            <DragDropContext onDragEnd={handleDragDrop}>
                {todoBoards.map((todoBoard: todoBoard) => (
                    <TodoBoard key={todoBoard.board_id}
                               boardStyle={styles && styles[todoBoard?.board_id]}
                               TaskRenderer={renderers && renderers[todoBoard?.board_id]?.taskRenderer}
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
