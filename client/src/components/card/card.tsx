import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { darkTheme } from "../../themes/Themes";
import User from '../../types/userType';

const theme = createTheme();

interface CardProps {
  user: User;
}

function CardComponent({ user }: CardProps) {
    return (
        <ThemeProvider theme={darkTheme}>
            <Card sx={{ maxWidth: 200 }}>
                <CardMedia
                    sx={{ height: 100 }}
                    image={user.avatar} 
                    title={user.username} 
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {user.username}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {user.email}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </ThemeProvider>
    );
}

export default CardComponent;
