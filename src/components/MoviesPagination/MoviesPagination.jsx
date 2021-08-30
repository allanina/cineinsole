import { createTheme, ThemeProvider } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import "./style.css"

const darkThemePagination=createTheme({
  palette:{
    type: "light",
  }
})

const MoviesPagination = ({setPages, numberOfPages = 10}) =>{

    const pageChange = (pages) =>{
      setPages(pages);
      window.scroll(0,0)
    };

  return(
    <div className="pagination"
    style={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      marginTop: 10,
      color: "#fff",
    }}
    >
      <ThemeProvider theme={darkThemePagination}>
        <Pagination 
          variant="outlined"
          color="primary"
          size="large"
          count={numberOfPages} 
          onChange={(pag) => pageChange(pag.target.textContent)} 
        />
      </ThemeProvider>
    </div>
  )
}

export default MoviesPagination;