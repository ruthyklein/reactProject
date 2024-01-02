import React, { useState } from 'react';
import { observer } from "mobx-react"
import { TextField, Input, InputAdornment, Button, InputLabel, FormControl } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Visibility, VisibilityOff, Login } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Swal from 'sweetalert2'

import GlobalStore from '../../store/GlobalStore';
import './AdminLogin.css';

const AdminLogin = (observer(() => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () =>
    setShowPassword((show) => !show);

  const [formData, setFormData] = useState({
    name: '',
    password: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:8787/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.status===200) {
          localStorage.setItem("isLogin",true)
          GlobalStore.setIsLogin(true);
          console.log(GlobalStore.isLogin + "   adminLogin-200")
          Swal.fire({
            icon: "success",
            title: "Login successful!",
            text: "",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
        } else {
          console.log(GlobalStore.isLogin + "   adminLogin-400")
          Swal.fire({
            icon: "error",
            title: "Login failed!",
            text: "Please check your credentials and try again.",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
        }
      })
      .catch((error) => {
        console.log(GlobalStore.isLogin + "   adminLogin-error")
        console.error("Error:", error);
        Swal.fire({
          icon: "error",
          title: "Login failed!",
          text: "An error occurred while trying to login. Please try again later.",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      });
  };
  return (
    <>
      {console.log(GlobalStore.isLogin + "   adminLogin-show")}
        <div className="admin-form" >
          <form className="admin-login-form" onSubmit={handleSubmit}>
            <h1>Admin Login</h1>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <AccountCircle sx={{ color: 'action.active', marginRight: '10px' }} />
              <TextField
                id="input-with-sx"
                label="Username"
                variant="standard"
                name="name"
                onChange={handleChange}
              />
            </Box>
            <FormControl sx={{ marginBottom: '20px' }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
              <Input
                id="standard-adornment-password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                variant="standard"
                onChange={handleChange}
                endAdornment=
                {
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Button type="submit" variant="contained" endIcon={<Login />} >
              Login
            </Button>
          </form>
        </div>
   
    </>
  )
}))

export default AdminLogin;
