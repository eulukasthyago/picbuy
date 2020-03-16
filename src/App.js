import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Container, Grid } from '@material-ui/core';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import Home from './pages/Home';


export default function app() {

  return (
    <>
      <Header/>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={3}>
            <Sidebar/>
          </Grid>
          <Grid item xs={9}>
            <Router>
              <Switch>
                <Route exact path='/'>
                  <Home/>
                </Route>
                <Route exact path='/pic'>
                  All Images
                </Route>
              </Switch>
            </Router>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}