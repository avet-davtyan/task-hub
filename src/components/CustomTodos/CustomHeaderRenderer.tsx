import {todoBoard} from "../types/types";
import {Stack, Typography} from '@mui/material';

const CustomHeaderRenderer = () => {

    return (

        <Stack sx={{
            width: '100%',
            paddingLeft: '10px',
            mb: 3
        }} justifyContent='center'>
            <Typography color='text.secondary'>
                Custom Header Renderer
            </Typography>
        </Stack>

    )
}

export default CustomHeaderRenderer;