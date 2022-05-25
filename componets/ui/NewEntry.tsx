import React, { useState, ChangeEvent, useContext} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import AddIcon from '@mui/icons-material/Add';
import { TextareaAutosize, TextField } from '@mui/material';

import { EntriesContext } from '../../contex/entries/EntriesContext';
import { UIContext } from '../../contex/ui';

 
const Transition = React.forwardRef(function Transition(

  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface Props {
  wall: string
}

export default function NewEntry<Props>({ wall = '' }) {
  const [open, setOpen] = useState(false);

  const { addNewEntry } = useContext( EntriesContext )
  
  // const { isAddingEntry ,setIsAddingEntry } = useContext( UIContext )


  const [inputValue, setInputValue] = useState('')
  const [description, setDescription] = useState('')

  const [touched, setTouched] = useState(false)
  const [desctouched, setDescTouched] = useState(false)


  const onTextFieldChanges = ( event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
    setInputValue( event.target.value )
  }
  const onDescriptionFieldChanges = ( event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
    setDescription( event.target.value )
  }

  const onSave = () => {

    if (inputValue.length === 0 || description.length === 0 ) return;

    console.log({ inputValue, description })

    addNewEntry( inputValue, description )
    
    setOpen(false);
    setDescription('')
    setInputValue('')
    setTouched( false )
    setDescTouched( false )
  }



  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);

    setDescription('')
    setInputValue('')
    setTouched( false )
    setDescTouched( false )
  };

  return (
    <div>
      <Button onClick={handleClickOpen} sx={{ width:"100%", height:"3rem", backgroundColor: "#3B3B44", borderTop:"#1C1C24 solid", borderRadius:" 0 0 1.3rem 1.3rem"}}>
        <AddIcon fontSize='large' />
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              { wall }
            </Typography>
            <Button autoFocus variant="contained" color="primary" onClick={ onSave }>
              save
            </Button>
          </Toolbar>
        </AppBar>

        <List sx={{ display: "flex", flexDirection:"column", margin: "0 auto", alignItems: "center", justifyContent: "center" }} >
        <ListItem >
          <TextField
            fullWidth
            sx={{ m: 1, maxWidth:"800px", width:{ sm: "600px", xs:"400px" } }}
            
            id="filled-basic" label="Title"
            helperText={ inputValue.length <= 0 && touched && 'Set a title'}
            variant="filled"
            autoComplete='off'

            value={ inputValue }
            onChange={ onTextFieldChanges }
            error={ inputValue.length <= 0 && touched }
            onBlur={ () => setTouched( true ) }
            />
        </ListItem >
        <ListItem >
          <TextField
            sx={{ m: 1, maxWidth:"600px" }}
            fullWidth
            id="filled-multiline-static"
            label="Description"
            multiline
            helperText= { description.length <= 0 && desctouched && 'Insert a description to save'}
            minRows={ 5 }
            variant="filled"

            value={ description }
            onChange={ onDescriptionFieldChanges }
            error={ description.length <= 0 && desctouched }
            onBlur={ () => setDescTouched( true ) }
          />
        </ListItem>
        </List>

      </Dialog>
    </div>
  );
}