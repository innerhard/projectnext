import React, { FC } from 'react'
import { createNotesStore } from './Store'
import { useLocalObservable } from 'mobx-react'

const NotesContext = React.createContext(null)

export const NotesProvider: FC<React.ReactElement> | null = ({ children }) => {
    const notesStore = useLocalObservable(createNotesStore)

    return <NotesContext.Provider value={notesStore}>{children}</NotesContext.Provider>
}

export const useNotesStore = () => React.useContext(NotesContext)
