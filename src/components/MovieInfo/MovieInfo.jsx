import "./style.css"
import { img_500 } from "../../config/config"


const MovieInfo = ({
  title,
  overview,
  rating,
  poster
}) => {

  return (
    <>
    <div className="movie-info__container">

        <div className="movie-info-title__container">
            <p className="movie-info-title">{title}</p>
        </div>

        <div className="image-poster__container">
          <img src={`${img_500}/${poster}`} alt={title}></img>
        </div>

    </div>
    </>
  )
}

export default MovieInfo