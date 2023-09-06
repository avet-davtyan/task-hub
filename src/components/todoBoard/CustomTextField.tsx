import {TextField} from "@mui/material";
import React from "react";

const CustomTextField = ({handleChange}: { handleChange: any }) => {
    return (
        <TextField sx={{width: '100%'}} id="outlined-basic" label="Add task" variant="outlined"
                   onChange={handleChange}
        />
    )
}

export default CustomTextField;