
import React,{useState,useEffect} from 'react';
import Movie from './Movie';
import classes from './MoviesList.module.css';

const MovieList = (props) => {
  const [moviesData, setMoviesData] = useState([]);
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await props.movies;
        setMoviesData(data);
       
      } catch (error) {
        console.log('Error fetching movie data:', error);
      }
    };

    fetchData();
  }, [props.movies]);
  
 

  if (!moviesData.length) {
    return <p>Loading movies...</p>;
  }


  return (
<ul className={classes['movies-list']}>
 
  {moviesData.map((movie) => (
    <Movie
      key={movie.title}
      title={movie.title}
      releaseDate={movie.release_date}
      openingText={movie.opening_crawl
      }
    />
    
  ))}
  
</ul>
  );
};

export default MovieList;
