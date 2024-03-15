import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import Copyrights from '../../components/copyrights/Copyrights';
import { darkTheme } from '../../themes/Themes';
import { useLogin } from '../../hooks/queries/userHookes';
import { LoginData } from './types';
import { useNavigate } from 'react-router-dom';
import { Axios, AxiosError } from 'axios';



export default function Login() {
    const navigate = useNavigate();

    const { mutate, isLoading, isError } = useLogin();
  
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);

      const data: LoginData = {
          email: formData.get('email') as string,
          password: formData.get('password') as string,
         
      };
  
        mutate(data,{
          onSuccess: (data:LoginData): void =>{
            navigate('/adminDashboard')
          },
          onError: (error: AxiosError): void => {
            alert("Incorrect email or password");
          }
        });
    };

  return (
    <ThemeProvider theme={darkTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        <Copyrights sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}