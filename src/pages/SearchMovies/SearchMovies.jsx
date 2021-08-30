import { Button, createTheme, ThemeProvider } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import { TextField } from "@material-ui/core";
import axios from "axios"
import { useState, useEffect } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import MoviesPagination from "../../components/MoviesPagination/MoviesPagination";


const SearchMovies = () => {

  const [searchText, setSearchText] = useState("")
  const [movie, setMovie] = useState([]);
  const [pages, setPages] = useState([1]);

  //material ui Theme
  const darkTheme = createTheme ({
    palette:{
      type: "light",
      primary: {
        main: "#fff",
      },
    },
  })

  const fetchSearch = async () => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=34b76e64f9db349fc75dc436aa43505a&language=pt-BR&query=${searchText}&page=${pages}`)

    setMovie(data.results)
    setPages(data.total_pages)
  }

  useEffect(()=>{
    fetchSearch()
    // eslint-disable-next-line
    },[pages])

  return (
    <div className="search-movie__container">
      <ThemeProvider theme={darkTheme}>
        <div className="search-container" style={{display:"flex", margin: "8rem 20rem"}}>

        {/* barra de pesquisa material ui */}
        <TextField
          style={{ flex: 1}}
          className="search-input"
          label="Procurar filme"
          variant="filled"
/*           sempre que digitar na barra de busca vai mudar o texto de pesquisa */
          onChange={(e) => setSearchText(e.target.value)} 
        />

        {/* botão de pesquisa que ativa o fetch da API */}
        <Button variant="outlined" color="default" style={{marginLeft: 10}} onClick={fetchSearch}>
          <SearchIcon className="search-icon" />
        </Button>
        </div>
      
      </ThemeProvider>

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

        {searchText &&
          !movie &&
          (<h2>Não encontrado</h2>)}
        
      </div>
      <MoviesPagination setPages={setPages}/>

    </div>
  )
}

export default SearchMovies