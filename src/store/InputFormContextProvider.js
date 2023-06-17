import React,{useState} from 'react'
import InputFormContext from './InputFormContext'

function InputFormContextProvider(props) {
    const [inputData,setInputData] = useState([])

    const updateInputData = (data)=>{
         setInputData((prevData)=>{
            return [...prevData,data]
         })
    }
  return (
    <InputFormContext.Provider value={{inputData,updateInputData}}>{props.children}</InputFormContext.Provider>
  )
}

export default InputFormContextProvider