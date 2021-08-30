/* import Movie from "../pages/Movie/Movie" */
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/Home'
import SearchMovies from '../pages/SearchMovies/SearchMovies'

function Routes() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/"  component={Home} />
          <Route exact path="/search"  component={SearchMovies} />  
          {/* <Route exact path="/movie/:id" component={Movie}/> */}
        </Switch>
        
    </BrowserRouter>
  );
}

export default Routes;
