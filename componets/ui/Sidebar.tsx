import { InboxTwoTone, MailOutlineTwoTone } from '@mui/icons-material'
import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, menuItemClasses, Typography } from '@mui/material'
import React from 'react'

const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts']

export const Sidebar = () => {
  return (
    <Drawer
        anchor="left"
        open={ true }
        onClose={ () => console.log('cerrado') }
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
