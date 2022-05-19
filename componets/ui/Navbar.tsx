import React, { useContext } from 'react'

import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import DragHandleTwoToneIcon from '@mui/icons-material/DragHandleTwoTone';
import MyApp from '../../pages/_app';
import { UIContext } from '../../contex/ui';


export const Navbar = () => {

  const { openSideMenu } = useContext(  UIContext )

  return (
    <AppBar position='sticky' className='navbar' >
        <Toolbar>
            <IconButton size='large' edge='start' onClick={ openSideMenu }>
                <DragHandleTwoToneIcon />
            </IconButton>
        <Typography variant='h6' color={"primary"} marginLeft="0.5rem"> TaskApp</Typography>
        </Toolbar>
    </AppBar>
  )
}
