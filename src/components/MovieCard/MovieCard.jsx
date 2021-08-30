import "./style.css"
import { img_300 } from "../../config/config"
import MovieModal from "../MovieModal/MovieModal";
//import { Link } from 'react-router-dom'


const MovieCard = ({ 
  id,
  overview, 
  rating, 
  title, 
  poster
}) => {
  
  return (
    <MovieModal id={id}>
      
      <div className="container-card">

        <div className="movie-rating__container">
          <p className="movie-rating">{rating}</p>
        </div>

        <div className="image-poster__container">
          {/* <Link className="image-poster" to={`/movie/${id}`}> */}
          <img src={`${img_300}/${poster}`} alt={title}></img>
          {/* </Link> */}
        </div>

        <div className="movie-title__container">
          <p className="movie-title">{title}</p>
        </div>

      </div>

    </MovieModal>
  )
};

export default MovieCard