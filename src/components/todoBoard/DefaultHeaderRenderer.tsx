import {todoBoard} from "../types/types";
import {Stack, Typography} from '@mui/material';

const DefaultHeaderRenderer = () => {

    return (

        <Stack sx={{
            width: '100%',
            paddingLeft: '10px'
        }} justifyContent='center'>
            <Typography color='text.secondary'>Board Title</Typography>
        </Stack>

    )
}

export default DefaultHeaderRenderer;