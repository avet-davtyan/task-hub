import {Button, Card, Divider, Stack, TextField, Typography} from '@mui/material'
import React, {ChangeEvent, useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {CSSObject} from '@emotion/react';
import {useTheme} from "@mui/material";
import CustomTaskRenderer from "./CustomTaskRenderer";
import CustomAddButton from "./CustomAddButton";
import CustomTextField from "./CustomTextField";
// @ts-ignore
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import {task, todoBoard, TodoBoardType} from "../types/types";

const TodoBoard = ({
                       boardStyle,
                       todoBoards,
                       setTodoBoards,
                       TaskRenderer = CustomTaskRenderer,
                       AddButton = CustomAddButton,
                       TaskTextField = CustomTextField,
                       boardId,
                       tasks
                   }: TodoBoardType) => {


    const [text, setText] = useState<string>('');
    const [showDelEdit, setShowDelEdit] = useState<boolean>(false);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const AddTask = () => {

        const addTask: task = {task_id: Math.random(), name: text};
        const boardIndex: number = todoBoards.findIndex((board: todoBoard) => board.board_id === boardId);

        if (boardIndex !== -1) {
            const updatedBoard: todoBoard = {...todoBoards[boardIndex]};
            updatedBoard.tasks.push(addTask);
            const updatedBoards: todoBoard[] = [...todoBoards];
            updatedBoards[boardIndex] = updatedBoard;
            setTodoBoards(updatedBoards);
        }
    }

    const DeleteTask = (taskToDelete: any) => {
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


    return (

        <Card sx={{
            width: '400px',
            padding: '30px 20px 30px 20px',
            margin: '10px',
            ...boardStyle,
        }}>
            <Stack sx={{
                width: '100%',
                height: '100%'
            }} spacing={3}>
                <Stack direction='row' spacing={1}>
                    <TaskTextField handleChange={handleChange}/>
                    <AddButton handleAddTask={AddTask}/>
                </Stack>


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
                                                <TaskRenderer task={task} handleDelete={DeleteTask}/>
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
        </Card>

    )
}

export default TodoBoard;