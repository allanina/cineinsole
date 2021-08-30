import axios from "axios"
import "./style.css"
import { useEffect, useState } from "react"
import MovieCard from "../../components/MovieCard/MovieCard";
import MoviesPagination from "../../components/MoviesPagination/MoviesPagination";

const Home = () => {
  const [movie, setMovie] = useState([]);
  const [pages, setPages] = useState([1]);


  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR&page=${pages}`);

      setMovie(data.results)
  };

  useEffect(()=>{
      fetchMovies()
      // eslint-disable-next-line
  },[pages])

  return(
    <>

      <div className="movies-now__playing">
        {
          movie && movie.map((movieInfo)=>(
            <MovieCard 
            key={movieInfo.id} 
            id={movieInfo.id} 
            overview={movieInfo.overview} 
            rating={movieInfo.vote_average} 
            title={movieInfo.title} 
            poster={movieInfo.poster_path} />
          ))
        }
        
      </div>
      <MoviesPagination setPages={setPages}/>
    </>
  );
}

export default Home;