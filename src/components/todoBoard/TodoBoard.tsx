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

type BoardStyle = CSSObject;

interface task {
    name: string,
    task_id: number
}


const TodoBoard = ({
                       boardStyle = {} as any,
                       todoBoards = [{
                           board_id: '1',
                           tasks: [
                               {task_id: 1, name: 'firstBoard 1'},
                               {task_id: 2, name: 'firstBoard 2'}
                           ]
                       }],
                       setTodoBoards = '' as any,
                       TaskRenderer = CustomTaskRenderer,
                       AddButton = CustomAddButton,
                       TaskTextField = CustomTextField,
                       boardId = 'defaultId',
                       tasks = [{task_id: 1, name: 'task'}]
                   }) => {


    const [text, setText] = useState<string>('');
    const [showDelEdit, setShowDelEdit] = useState<boolean>(false);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const AddTask = () => {

        const addTask = {task_id: Math.random(), name: text};
        const boardIndex = todoBoards.findIndex((board) => board.board_id === boardId);

        if (boardIndex !== -1) {
            const updatedBoard = {...todoBoards[boardIndex]};
            updatedBoard.tasks.push(addTask);
            const updatedBoards = [...todoBoards];
            updatedBoards[boardIndex] = updatedBoard;
            setTodoBoards(updatedBoards);
        }
    }

    const DeleteTask = (taskToDelete: any) => {
        const boardIndex = todoBoards.findIndex((board) => board.board_id === boardId);

        if (boardIndex !== -1) {
            // Clone the board to avoid directly modifying the state
            const updatedBoard = {...todoBoards[boardIndex]};

            // Find the index of the task to delete in the tasks array
            const taskIndex = updatedBoard.tasks.findIndex(
                (task) => task.task_id === taskToDelete.task_id
            );

            if (taskIndex !== -1) {
                // Remove the task from the tasks array
                updatedBoard.tasks.splice(taskIndex, 1);

                // Update the state with the modified board
                const updatedBoards = [...todoBoards];
                updatedBoards[boardIndex] = updatedBoard;

                // Set the state with the updated data
                setTodoBoards(updatedBoards);
            }
        }
    }


    return (

        <Card sx={{
            width: '400px',
            padding: '30px 20px 30px 20px',
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
                            {tasks.map((task, index) => (
                                <Draggable key={task.task_id} draggableId={task?.task_id.toString()} index={index}>
                                    {(provided: any, snapshot: any) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <Stack sx={{
                                                height: '50px',
                                                position: 'relative',
                                                m: 0.3
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