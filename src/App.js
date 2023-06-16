import React, { useState, useEffect } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import Loader from './components/Loader';


function App() {

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  

  const fetchMoviesHandler = async () => {
    try {
      setError(false)

      setLoading(true)
      const response = await fetch('https://swapi.dev/api/films/')
      console.log(response)
      if (!response.ok) {
        setError(true)
        throw new Error('Something went wrong ....Retrying')
      }
      const data = await response.json();
      setMovies(data.results);
    
    } catch (err) {
      setLoading(false)
      console.log(err)
     

    }

    setLoading(false)
  }

  

  return (

    <React.Fragment>
      <div>
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
