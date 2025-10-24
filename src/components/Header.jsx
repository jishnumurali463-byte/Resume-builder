import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { Tooltip } from '@mui/material';



function Header() {
    const projectInfo = "This web application allows users to create professional resumes easily and quickly, without needing advanced design or formatting skills. The goal of this project is to simplify the resume creation process for students, job seekers, and professionals."

      
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'DarkSlateGray'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           <img width={'100px'} src="https://graphicdesignjunction.com/wp-content/uploads/2015/01/001_logo_design.jpg" alt="logo" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to={'/'} className='text-light-decoration-none'>   Resumebuilder</Link>
          </Typography>
          <Tooltip title={projectInfo}><Button color="inherit">Login</Button></Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header