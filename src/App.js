import React, { useState, useEffect, useContext } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import Loader from './components/Loader';
import InputForm from './components/InputForm';

import InputFormContext from './store/InputFormContext';

function App() {

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  
  const {inputData} = useContext(InputFormContext)

  useEffect(()=>{
    let newArray = []
setMovies((prevData)=>{

  for(let i = 0; i<inputData.length; i++){
    let spotted = false;
    for(let j = 0; j<prevData.length; j++){

      if(inputData[i].title === prevData[j].title){{
        spotted = true;
        break;
      }}  
    }
    if(spotted === false){
      newArray.push(inputData[i])
    }
  }

 return [...newArray,...prevData] 
})

    // setMovies([...inputData,...movies] )
    console.log(movies)
  
  },[inputData])

  const fetchMoviesHandler = async () => {
   
    try {
      setError(false)

      setLoading(true)
      const response = await fetch('https://swapi.dev/api/films/')
     
      if (!response.ok) {
        setError(true)
        throw new Error('Something went wrong ....Retrying')
      }
      const data = await response.json();
      setMovies(data.results);
      
   
    } catch (err) {
      setLoading(false)
    
     

    }

    setLoading(false)
  }

  useEffect(fetchMoviesHandler,[])

  return (

    <React.Fragment>
   
      <div>
        <InputForm/>
        <section>
          <button onClick={fetchMoviesHandler}>Fetch Movies</button>
        </section>
        <section>
          {error && <p className='err'>Something went wrong ....Retrying <span><button >cancel</button></span></p>}
          {loading && <Loader />}
          <MoviesList movies={movies} />
        </section>
      </div>
    
    </React.Fragment>

  );
}

export default App;
