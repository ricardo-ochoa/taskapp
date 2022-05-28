import React, { FC, useReducer } from 'react'
import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';
import { v4 as uuidv4 } from 'uuid';
import NewEntry from '../../componets/ui/NewEntry';

type Props = {
  children?: React.ReactNode | undefined
 }
export interface EntriesState {
   entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
   entries: []
}

export const EntriesProvider:FC<Props> = ({ children }) => {

  const [ state, dispatch ] = useReducer( entriesReducer, Entries_INITIAL_STATE );

  const addNewEntry = ( title: string, description: string ) => {

    const newEntry: Entry = {
      _id: uuidv4(),
      title,
      description,
      createdAt: Date.now(),
      status: 'pennding'
    }

    dispatch({ type: "[Entry]  Add-Entry", payload: newEntry })
  }

  const updateEntry = ( entry: Entry ) => {
    
    dispatch({ type: '[Entry]  Entry-Updated', payload: entry})

  }

  return (
   <EntriesContext.Provider value={{
       ...state,

      //Methods
       addNewEntry,
       updateEntry
   }}>
     { children }
   </EntriesContext.Provider>
  )
};