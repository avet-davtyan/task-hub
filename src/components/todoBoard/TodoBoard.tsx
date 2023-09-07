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
                       TaskRenderer = CustomTaskRenderer,
                       AddButton = CustomAddButton,
                       TaskTextField = CustomTextField,
                       boardId = 'defaultId',
                       initialTasks = [{task_id: 1, name: 'task'}]
                   }) => {

    const [tasks, setTasks] = useState<any[]>(initialTasks)

    const [text, setText] = useState<string>('');
    const [showDelEdit, setShowDelEdit] = useState<boolean>(false);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }
    const addTask = () => {
        if (text) setTasks([...tasks, {name: text, task_id: Math.random()}]);
        console.log('add')
        setText('');
    }
    const handleDelete = (task: any) => {
        setTasks(tasks.filter(_task => _task.task_id !== task.task_id));
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
                    <AddButton handleAddTask={addTask}/>
                </Stack>


                <Droppable droppableId={boardId}>
                    {(provided: any, snapshot: any) => (
                        <Stack
                            {...provided.droppableProps}
                            ref={provided.innerRef}

                        >
                            {tasks.map((task, index) => (
                                <Draggable key={task.task_id} draggableId={task.task_id.toString()} index={index}>
                                    {(provided: any, snapshot: any) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <Stack sx={{
                                                height: '50px',
                                                position: 'relative',

                                            }}>
                                                <TaskRenderer task={task} handleDelete={handleDelete}/>
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