import React, {useImperativeHandle, useState} from 'react';
import TodoBoard from "../todoBoard/TodoBoard";
import {Stack} from '@mui/material';
import {forwardRef} from "react";
// @ts-ignore
import {DragDropContext} from 'react-beautiful-dnd';
import {Button} from "@mui/material";

const Todos = forwardRef(({configs = []}: { configs: any }, ref) => {

    const [boardConfigs, setBoardConfigs] = useState(configs);
    useImperativeHandle(ref, () => ({
        getMyState: () => {
            return boardConfigs
        }
    }), [boardConfigs]);

    const handleDragDrop = (result: any) => {
        console.log(result);
    }

    return (

        <Stack direction='row'>
            <Button onClick={() => {
                setBoardConfigs([...boardConfigs.slice(2)])
            }}>delete</Button>
            <DragDropContext onDragEnd={handleDragDrop}>
                {boardConfigs.map((boardConfig: any) => (
                    <TodoBoard key={boardConfig.droppableId}
                               boardStyle={boardConfig?.boardStyle}
                               initialTasks={boardConfig?.tasks}
                               droppableId={boardConfig?.droppableId}
                    />
                ))}
            </DragDropContext>
        </Stack>
    );
});

export default Todos;
