import React,{useState} from 'react'
import DeleteMovieContext from './DeleteMovieContext'

function DeleteMovieContextProvider(props) {

    const [id,setId] = useState('');

    const updateTheId =(receivedId)=>{
        setId(receivedId)
    }
  return (
    <DeleteMovieContext.Provider value={{id,updateTheId}}>{props.children}</DeleteMovieContext.Provider>
  )
}

export default DeleteMovieContextProvider