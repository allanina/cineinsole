import React from 'react';
import "./style.css"
import { useEffect, useState } from "react"
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import axios from 'axios';
import { img_300 } from '../../config/config';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: "80%",
    height: "70%",
    backgroundColor: "#573fa7",
    borderRadius: 10,
    color: "white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1,1,3),
  },
}));

export default function MovieModal({children, id}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [movie, setMovie] = useState([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchMovieInfos = async () => {
      const {data} = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR`
        );
        console.log(data)
        setMovie(data);
  };
      useEffect(()=>{
        fetchMovieInfos()
    },[])

  return (
    <>
      <div type="button" className="movie-container" onClick={handleOpen}>
        {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className="movie-modal__container">
              <div className="movie-modal">
                <img className="movie-modal__poster" src={`${img_300}/${movie.poster_path}`} alt={movie.title}/>
              </div>

              <div className="movie-modal__about">
                <h1 className="movie-modal__title">{movie.title}</h1>
                <span className="movie-modal__overview">{movie.overview}</span>
                <span className="movie-modal__rating">Nota média: {movie.vote_average}</span>
                <div></div>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
}
