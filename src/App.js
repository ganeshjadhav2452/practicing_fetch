import React,{useState,useEffect} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import Loader from './components/Loader';


function App() {

  const [movies, setMovies]= useState([])
  const [loading,setLoading] = useState(false)


  const fetchMoviesHandler = async()=>{
    try{

      setLoading(true)
      const rawData = await fetch('https://swapi.dev/api/films/')

      const data = await rawData.json();
      setMovies(data.results);
     
    }catch (err){
      console.log(err)
    }

    setLoading(false)
  } 

  return (
   
    <React.Fragment>
     {loading?  <Loader />: <div>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
      </div>}
    
    </React.Fragment>
    
  );
}

export default App;
