import './App.css';
import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Movies from './components/movies';
import MovieForm from './components/movieForm';
import Customers from './components/customers';
import Rentals from './components/rentals'
import NotFound from './components/notFound';
import NavBar from './components/navbar';

function App() {
  return (
    <React.Fragment>
    <NavBar/>
    <main className="container m-2">
      <Switch>
      <Route path="/customers" component={Customers}/>
      <Route path='/rentals' component={Rentals}/>
      <Route path='/movies/:id' component={MovieForm}/>
      <Route path="/movies" component={Movies}/>
      <Redirect from="/" exact to="/movies"/>
      <Redirect to="" component={NotFound}/>
      </Switch>
    </main>
    </React.Fragment>
  );
}

export default App;
