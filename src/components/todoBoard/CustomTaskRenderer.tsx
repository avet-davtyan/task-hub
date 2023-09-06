import {Button, Card, Divider, Stack, TextField, Typography} from '@mui/material'
import React, {ChangeEvent, useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {CSSObject} from '@emotion/react';
import {useTheme} from "@mui/material";

const CustomTaskRenderer = ({task, handleDelete}: { task: any, handleDelete: any }) => {
    const theme = useTheme();
    const [showEditDel, setShowEditDel] = useState<boolean>(false);

    return (
        <Card sx={{
            height: '100%',
            backgroundColor: '#FCFCFC',

        }} variant='outlined'
              onMouseEnter={() => {
                  setShowEditDel(true);
              }}
              onMouseLeave={() => {
                  setShowEditDel(false);
              }}
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
                    <Button style={{width: '50%', minWidth: 0}}>
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
    )
}

export default CustomTaskRenderer;