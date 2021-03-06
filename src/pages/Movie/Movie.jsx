import "./style.css"
import { useEffect, useState } from "react"
import axios from "axios"
import MovieInfo from "../../components/MovieInfo/MovieInfo"

const Movie = () => {
  const [movie, setMovie] = useState([]);
  const [id, setId] = useState([])


  //foi utilizado o id para pegar as informações do site
  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=34b76e64f9db349fc75dc436aa43505a&language=pt-BR`);

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