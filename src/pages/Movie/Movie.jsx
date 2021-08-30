import "./style.css"
import { useEffect, useState } from "react"
import axios from "axios"
import MovieInfo from "../../components/MovieInfo/MovieInfo"

const Movie = () => {
  const [movie, setMovie] = useState([]);
  const [id, setId] = useState([])



  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR`);

      setMovie(data.results)
      setId(data.id)
  };

  useEffect(()=>{
    fetchMovies()
    // eslint-disable-next-line
},[id])

  return(
    <>
    <div className="movie-detail__container">
      {
        movie && movie.map((movieInfo)=>(
        <MovieInfo
          key={movieInfo.id}
          id={movieInfo.id}
          title={movieInfo.title}
          overview={movieInfo.overview}
          rating={movieInfo.vote_average}
          poster={movieInfo.poster_path}/>
          ))
        }
        
    </div>

  </>
  );
}

export default Movie