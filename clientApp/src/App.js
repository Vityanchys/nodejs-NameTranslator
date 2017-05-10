import React, { Component } from 'react';
import { getMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import SearchPage from './containers/SearchPage'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>

      <Router>
      <div className="App">
      <SearchPage />

      </div>
      </Router>
  </MuiThemeProvider>
    );
  }
}

export default App;
