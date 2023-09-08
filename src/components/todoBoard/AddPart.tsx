import {Button, Stack, TextField} from "@mui/material";
import {useTheme} from "@mui/material";
import {useState} from "react";
import {task} from "../types/types";

const AddPart = ({handleAddTask}: { handleAddTask: (task: task) => void }) => {

    const theme = useTheme();

    const [taskName, setTaskName] = useState<string>('');

    return (
        <>
            <Stack direction='column' spacing={1}>
                <TextField size='small' sx={{width: 1}} onChange={(e) => {
                    setTaskName(e.target.value);
                }}></TextField>
                <Button variant='contained' onClick={() => {
                    const task = {task_id: Math.random(), name: taskName}
                    handleAddTask(task);
                }}>Add</Button>
            </Stack>
        </>
    )
}


export default AddPart;