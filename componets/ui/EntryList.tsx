import React, { FC, useContext, useMemo, DragEvent } from 'react';
import { List, Paper } from '@mui/material'

import { Status } from '../../interfaces'

import { EntryCard } from './';
import { EntriesContext } from '../../contex/entries';
import { UIContext } from '../../contex/ui';

import styles from './EntryList.module.css';

interface Props {
  status: Status;
}

export const EntryList:FC<Props> = ({ status }) => {

  const { entries, updateEntry  } = useContext( EntriesContext );
  const { isDragging, endDragging } = useContext( UIContext );

  const entriesByStatus = useMemo(() => entries.filter( entry => entry.status === status ) ,[ entries ]);

  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    
    const id = event.dataTransfer.getData('text');

    const entry = entries.find( e => e._id === id )!;
    entry.status = status;
    updateEntry( entry );
    endDragging();
  }

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  }
  
  

  return (
    <div
    onDrop={ onDropEntry }
    onDragOver={ allowDrop }
    className={`${ isDragging ? styles.dragging : "card-container"}`} 
    >
      {/* height: 'calc(100vh - 250px)' */}
        <Paper className='card-container' sx={{ overflowX: 'hidden', overflowY: 'auto', background: "transparent", padding: '5px 10px' }}>
            <List sx={{ opacity: isDragging ? 0.3 : 1}}>           
                {
                  entriesByStatus.map( entry => (
                    <EntryCard key={ entry._id } entry={ entry } />
                  ))
                }
            </List>
        </Paper>
    </div>
  )
}
