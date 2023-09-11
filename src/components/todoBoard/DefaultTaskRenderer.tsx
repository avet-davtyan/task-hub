import {Button, Card, Divider, Stack, TextField, Typography} from '@mui/material'
import React, {ChangeEvent, useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {CSSObject} from '@emotion/react';
import {useTheme} from "@mui/material";
import {task} from "../types/types";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const DefaultTaskRenderer = ({task, handleDelete, handleUpdate}: {
    task: task, handleDelete: (taskToDelete: task) => void,
    handleUpdate: (taskToUpdate: task, updatedTask: task) => void
}) => {
    const theme = useTheme();
    const [openDialog, setOpenDialog] = useState<boolean>(false);

    const [textName, setTextName] = useState<string>(task?.name);

    const handleClose = () => {
        setOpenDialog(false);
    }

    const handleOpen = () => {
        setOpenDialog(true);
    }

    return (
        <>
            <Dialog open={openDialog} onClose={handleClose}>
                <Stack sx={{width: '400px'}}>
                    <DialogTitle>Edit</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            fullWidth
                            variant="standard"
                            value={textName}
                            onChange={(e) => {
                                setTextName(e.target.value);
                            }}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={() => {
                            handleClose();
                            handleUpdate(task, {...task, name: textName});
                        }}>Edit</Button>
                    </DialogActions>
                </Stack>
            </Dialog>

            <Card sx={{
                height: '50px',
                position: 'relative',
                m: 0.3,
                backgroundColor: '#FCFCFC',
            }}
                  variant='outlined'
            >
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
                        right: '0px',
                        width: '100px',
                        height: '100%',

                    }} direction='row'>
                        <Button style={{width: '50%', minWidth: 0}} onClick={() => {
                            handleOpen();
                        }}>
                            <EditIcon style={{color: theme.palette.primary.main}}/>
                        </Button>
                        <Button style={{width: '50%', minWidth: 0}}
                                onClick={() => {
                                    handleDelete(task);
                                }}>
                            <DeleteIcon style={{color: theme.palette.error.main}}/>
                        </Button>
                    </Stack>
                </Stack>
            </Card>
        </>
    )
}

export default DefaultTaskRenderer;