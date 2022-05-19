import React, { useContext } from 'react'

import { InboxTwoTone, MailOutlineTwoTone } from '@mui/icons-material'
import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, menuItemClasses, Typography } from '@mui/material'
import { UIContext } from '../../contex/ui';

const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts']

export const Sidebar = () => {

  const { sidemenuOpen, closeSideMenu } = useContext( UIContext );

  return (
    <Drawer
        anchor="left"
        open={ sidemenuOpen }
        onClose={ closeSideMenu }
    >
        <Box sx={{ width: 250 }}>
          <List>
            {
              menuItems.map( (text, index) => (
                <ListItem button key={ text }>
                  <ListItemIcon>
                    { index % 2 ? <InboxTwoTone/> : <MailOutlineTwoTone />}
                  </ListItemIcon>
                  <ListItemText primary = { text }/>
                </ListItem>
              ))
            }
          </List>

          <Divider />

          <List>
            {
              menuItems.map( (text, index) => (
                <ListItem button key={ text }>
                  <ListItemIcon>
                    { index % 2 ? <InboxTwoTone/> : <MailOutlineTwoTone />}
                  </ListItemIcon>
                  <ListItemText primary = { text }/>
                </ListItem>
              ))
            }
          </List>

          
        </Box>


    </Drawer>
  )
}
