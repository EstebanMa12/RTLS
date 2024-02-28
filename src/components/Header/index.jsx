/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Typography, Box } from "@mui/material";


const Header = ({ title, subtitle }) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Typography variant="h3" >{title}</Typography>
            <Typography 
                marginBottom={2}
                variant="subtitle1"
                color="textSecondary"
                marginTop={1}
                 >{subtitle}
            </Typography>
    
        </Box>
    );
}

export default Header;