import React, { useState, useEffect, useContext, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import Loader from './components/Loader';
import InputForm from './components/InputForm';


import InputFormContext from './store/InputFormContext';
import DeleteMovieContext from './store/DeleteMovieContext/DeleteMovieContext';

function App() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  
  const { inputData } = useContext(InputFormContext)
  const {id} = useContext(DeleteMovieContext)
  
  useEffect(()=>{
   
    const deleteItem = async(id)=>{
      console.log('my use effect getting called',id)
    
    
    }
 
    setMovies((prevMovies) => {
      const delArray = prevMovies.filter((movie) =>{
       if(movie.title === id){
         fetch(`https://crudcrud.com/api/31b3dca92103447dae7f9f400ba65ed2/films/${movie._id}`,{
        method:'DELETE'
      })}

       return  movie.title !== id
        })


       
       return delArray
     });
    
    
  },[id])
 

  useEffect(() => {

    const fetchData = async (prevData) => {
      let newArray = []
      for (let i = 0; i < inputData.length; i++) {
        let spotted = false;
        for (let j = 0; j < movies.length; j++) {

          if (inputData[i].title === movies[j].title) {
            {
              spotted = true;
              break;
            }
          }
        }
        if (spotted === false) {


          const fetchResponse = await fetch('https://crudcrud.com/api/31b3dca92103447dae7f9f400ba65ed2/films', {
            method: 'POST',
            body: JSON.stringify(inputData[i]),
            headers: {
              'Content-Type': 'application/json'
            }
          })

          const data = await fetchResponse.json()

          newArray.push(data)
        }
      }

      setMovies((prevData) => {
     
        return [...newArray, ...prevData]
      })
    }

    // setMovies([...inputData,...movies] )

    fetchData()
  }, [inputData])

  const fetchMoviesHandler = useCallback(async () => {

    try {
      setError(false)

      setLoading(true)
      const response = await fetch('https://crudcrud.com/api/31b3dca92103447dae7f9f400ba65ed2/films', {
        method: "GET"
      })

      if (!response.ok) {
        setError(true)
        throw new Error('Something went wrong ....Retrying')
      }
      const data = await response.json();
      setMovies(data);



    } catch (err) {
      setLoading(false)



    }

    setLoading(false)
  }, [])

  useEffect(() => [
    fetchMoviesHandler()
  ], [])

  return (

    <React.Fragment>
   
      <div>
        <InputForm />
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
