import {Button, Card, Divider, Stack, TextField, Typography} from '@mui/material'
import React, {ChangeEvent, useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import {CSSObject} from '@emotion/react';

type BoardStyle = CSSObject;

interface task {
    name: string,
    id: number
}


const customTaskRenderer = ({task, handleDelete}: { task: any, handleDelete: any }) => {
    return (
        <Card sx={{
            height: '100%',
            backgroundColor: '#FCFCFC',

        }} variant='outlined'>
            <Stack sx={{
                width: '100%',
                height: '100%',
                paddingLeft: '10px'
            }} justifyContent='center'>
                <Typography color='text.secondary'>
                    {task?.name}
                </Typography>

                <Stack sx={{
                    position: 'absolute',
                    right: 0,
                    width: '100px',
                    height: '100%',
                }} direction='row'>
                </Stack>
            </Stack>
        </Card>
    )
}

const TodoBoard = ({
                       boardStyle = {} as BoardStyle,
                       Outtasks = [],
                       TaskRenderer = customTaskRenderer,
                   }) => {

    const [tasks, setTasks] = useState<task[]>([
        {name: 'task #1', id: Math.random()},
        {name: 'task #2', id: Math.random()},
    ])

    const [text, setText] = useState<string>('');

    const [showDelEdit, setShowDelEdit] = useState<boolean>(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const addTask = () => {
        if (text) setTasks([...tasks, {name: text, id: Math.random()}]);
    }

    const handleDelete = (task: any) => {
        console.log(task.id);
    }


    return (
        <Card sx={{
            width: '400px',
            padding: '20px',
            ...boardStyle,
        }}>
            <Stack sx={{
                width: '100%',
                height: '100%'
            }} spacing={3}>
                <Stack direction='row' spacing={1}>
                    <TextField sx={{width: '100%'}} id="outlined-basic" label="Add task" variant="outlined"
                               onChange={handleChange}
                    />
                    <Button variant='contained' onClick={addTask}>ADD</Button>
                </Stack>
                <Divider/>
                <Stack spacing={1.5}>
                    {tasks.map(task =>
                        <Stack draggable sx={{
                            height: '60px',
                            position: 'relative'
                        }} key={task.id}>
                            <TaskRenderer task={task} handleDelete={handleDelete}/>
                        </Stack>
                    )}
                </Stack>
            </Stack>
        </Card>
    )
}

export default TodoBoard;