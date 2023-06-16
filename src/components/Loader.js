import React from 'react'
import './Loader.css'
import gif from '../assets/6os.gif'
function Loader() {
  return (
    <div className='loader'>
        <img src={gif} />
    </div>
  )
}

export default Loader