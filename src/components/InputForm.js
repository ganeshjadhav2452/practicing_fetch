import React, { useState,useContext } from 'react'
import InputFormContext from '../store/InputFormContext'

function InputForm() {
    const {updateInputData} = useContext(InputFormContext)

    const [inputData, setInputData] = useState({
        title: '',
        text: '',
        date: new Date()
    })

    const titleInputHandler = (e) => {
        setInputData((prevState) => {
            return {
                ...prevState,
                title: e.target.value
            }
        })
    }

    const textInputHandler = (e) => {
        setInputData((prevState) => {
            return {
                ...prevState,
                text: e.target.value,
            }
        })
    }

    const dateInputHandler = (e) => {
        const dateStr = e.target.value
        const date = new Date(dateStr)
        const formattedDate = date.toISOString().split('T')[0]
    
       
        setInputData((prevState) => {
            return {
                ...prevState,
                date: formattedDate
            }
        })
    }

    const submitDataHandler = (e) => {
        e.preventDefault();
        const data = {
            title:inputData.title,
            opening_crawl:inputData.text,
            release_date:inputData.date
        }

        updateInputData(data)

        setInputData({
            title:'',
            text:'',
            date:new Date()
        })

    }

    return (
        <section>
            <form className='mb-3 d-flex flex-column' onSubmit={submitDataHandler}>
                <input value={inputData.title} className='mb-3 form-control' type='text' placeholder='Input Title' onChange={titleInputHandler} />

                <textarea value={inputData.text} placeholder='Opening text' className="form-control mb-3" id="exampleFormControlTextarea1" rows="4" onChange={textInputHandler}></textarea>

                <input value={inputData.date} type='date' className='mb-3 form-control' onChange={dateInputHandler} />

                <button type='submit'>Add Movie</button>
            </form>
        </section>
    )
}

export default InputForm