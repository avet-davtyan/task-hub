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
        <div style={{
            height: '50px',
            margin: '5px',
            position: 'relative',
            backgroundColor: '#E4E4E4',
            color: '#5a5a5a',
            borderRadius: '3px',
            // boxShadow: 'rgba(0, 0, 0, 0.04) 0px 3px 5px'

        }}

             onMouseEnter={() => {
                 setShowEditDel(true);
             }}
             onMouseLeave={() => {
                 setShowEditDel(false);
             }}
        >
            <div style={{
                position: 'absolute',

                width: showEditDel ? '120px' : '0px',
                height: '50px',
                right: '0',
                transition: 'all 0.2s',
                borderRadius: '3px',
                overflow: 'hidden'
            }}>
                <Stack direction='row' sx={{backgroundColor: 'red', overflow: 'hidden', height: '100%'}}>
                    <Stack sx={{backgroundColor: '#1976d2', width: '100%'}}>
                        edit
                    </Stack>
                    <Stack sx={{backgroundColor: '#ef5350', width: '100%'}}>
                        delete
                    </Stack>
                </Stack>
            </div>
            <p style={{
                marginLeft: '20px',
                fontFamily: "sans-serif",
                fontWeight: 'bold'
            }}>{task?.name}</p>

        </div>
    )
}

export default CustomTaskRenderer;