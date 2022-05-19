import React from 'react'

import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import DragHandleTwoToneIcon from '@mui/icons-material/DragHandleTwoTone';
import MyApp from '../../pages/_app';


export const Navbar = () => {
  return (
    <AppBar position='sticky' className='navbar' >
        <Toolbar>
            <IconButton size='large' edge='start'>
                <DragHandleTwoToneIcon />
            </IconButton>
        <Typography variant='h6' color={"primary"} marginLeft="0.5rem"> TaskApp</Typography>
        </Toolbar>
    </AppBar>
  )
}
