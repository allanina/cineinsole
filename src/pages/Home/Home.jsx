import axios from "axios"
import "./style.css"
import { useEffect, useState } from "react"
import MovieCard from "../../components/MovieCard/MovieCard";
import MoviesPagination from "../../components/MoviesPagination/MoviesPagination";

const Home = () => {
  const [movie, setMovie] = useState([]);
  const [pages, setPages] = useState([1]);

  //fetch das informações a partir da API
  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=34b76e64f9db349fc75dc436aa43505a&language=pt-BR&page=${pages}`);

      setMovie(data.results)
  };

  useEffect(()=>{
      fetchMovies()
      // eslint-disable-next-line
  },[pages])

  return(
    <>
      {/* card dos filmes é criado com o metodo array.map e repetido conforme limite da API (20 itens por página) */}
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