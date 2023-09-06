import {Button} from "@mui/material";
import React from "react";

const customAddButton = ({handleAddTask}: { handleAddTask: any }) => {
    return (
        <Button variant='contained' onClick={handleAddTask}>ADD</Button>
    )
}

export default customAddButton;