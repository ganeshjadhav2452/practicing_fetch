import React,{useContext} from 'react';
import DeleteMovieContext from '../store/DeleteMovieContext/DeleteMovieContext';

import classes from './Movie.module.css';

const Movie = (props) => {
  const {updateTheId} = useContext(DeleteMovieContext)

  const deleteMovieHandler = ()=>{
    updateTheId(props.title)
    console.log(props.title)
  }
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button onClick={deleteMovieHandler}>Delete</button>
    </li>
  );
};

export default Movie;
