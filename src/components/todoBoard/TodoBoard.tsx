import {Button, Card, Divider, Stack, TextField, Typography} from '@mui/material'
import React, {ChangeEvent, useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {CSSObject} from '@emotion/react';
import {useTheme} from "@mui/material";
import DefaultTaskRenderer from "./DefaultTaskRenderer";
// @ts-ignore
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import {task, todoBoard, TodoBoardType} from "../types/types";
import DefaultAddRenderer from "./DefaultAddRenderer";
import DefaultHeaderRenderer from "./DefaultHeaderRenderer";

const TodoBoard = ({
                       boardStyle,
                       todoBoards,
                       setTodoBoards,
                       HeaderRenderer,
                       TaskRenderer = DefaultTaskRenderer,
                       AddRenderer = DefaultAddRenderer,
                       boardId,
                       tasks
                   }: TodoBoardType) => {
    

    const AddTask = (task: task) => {

        const addTask: task = task;
        const boardIndex: number = todoBoards.findIndex((board: todoBoard) => board.board_id === boardId);

        if (boardIndex !== -1) {
            const updatedBoard: todoBoard = {...todoBoards[boardIndex]};
            updatedBoard.tasks.push(addTask);
            const updatedBoards: todoBoard[] = [...todoBoards];
            updatedBoards[boardIndex] = updatedBoard;
            setTodoBoards(updatedBoards);
        }
    }

    const DeleteTask = (taskToDelete: task) => {
        const boardIndex: number = todoBoards.findIndex((board: todoBoard) => board.board_id === boardId);

        if (boardIndex !== -1) {
            const updatedBoard: todoBoard = {...todoBoards[boardIndex]};
            const taskIndex: number = updatedBoard.tasks.findIndex(
                (task: task) => task.task_id === taskToDelete.task_id
            );
            if (taskIndex !== -1) {
                updatedBoard.tasks.splice(taskIndex, 1);
                const updatedBoards: todoBoard[] = [...todoBoards];
                updatedBoards[boardIndex] = updatedBoard;
                setTodoBoards(updatedBoards);
            }
        }
    }

    const UpdateTask = (taskToUpdate: task, updatedTask: task) => {
        const boardIndex: number = todoBoards.findIndex((board: todoBoard) => board.board_id === boardId);

        if (boardIndex !== -1) {
            const updatedBoard: todoBoard = {...todoBoards[boardIndex]};
            const taskToUpdateIndex: number = updatedBoard.tasks.findIndex(
                (task: task) => task.task_id === taskToUpdate.task_id
            );

            if (taskToUpdateIndex !== -1) {
                updatedBoard.tasks[taskToUpdateIndex] = updatedTask;
                const updatedBoards = [...todoBoards];
                updatedBoards[boardIndex] = updatedBoard;
                setTodoBoards(updatedBoards);
            }
        }
    }


    return (
        <div style={{
            width: '400px',
            padding: '30px 20px 30px 20px',
            margin: '10px',
            backgroundColor: 'white',
            borderRadius: '4px',
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
            ...boardStyle,
        }}>
            <Stack sx={{
                width: '100%',
                height: '100%'
            }} spacing={0}>

                {HeaderRenderer && <HeaderRenderer/>}
                <AddRenderer handleAddTask={AddTask}/>
                <Droppable droppableId={boardId}>
                    {(provided: any, snapshot: any) => (
                        <Stack
                            {...provided.droppableProps}
                            ref={provided.innerRef}

                        >
                            {tasks && tasks.map((task, index) => (
                                <Draggable key={task.task_id} draggableId={task?.task_id.toString()} index={index}>
                                    {(provided: any, snapshot: any) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <Stack sx={{
                                                position: 'relative',
                                            }}>
                                                <TaskRenderer task={task} handleDelete={DeleteTask}
                                                              handleUpdate={UpdateTask}/>
                                            </Stack>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </Stack>
                    )}
                </Droppable>

            </Stack>
        </div>

    )
}

export default TodoBoard;