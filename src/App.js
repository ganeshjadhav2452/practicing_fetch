import React,{useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';


const dummyMovies = [
  {
    id: 1,
    title: 'Some Dummy Movie',
    openingText: 'This is the opening text of the movie',
    releaseDate: '2021-05-18',
  },
  {
    id: 2,
    title: 'Some Dummy Movie 2',
    openingText: 'This is the second opening text of the movie',
    releaseDate: '2021-05-19',
  },
];
function App() {

  const [movies, setMovies]= useState([])

  const fetchMoviesHandler = async()=>{
    try{
      const rawData = await fetch('https://swapi.dev/api/films/')

      const data = await rawData.json();
      setMovies(data.results);
      console.log(data.results)
    }catch (err){
      console.log(err)
    }
  } 

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
