import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default class App extends Component {
  pageSize=15;
  state = {
    progress:0
  }

  setProgress = (progress) => {
    this.setState({
      progress: progress
    });
  }
  render() {
    return (
      <>
      <Router>
      <Navbar></Navbar>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
        // onLoaderFinished={() => setProgress(0)}
      />
        <Routes>
          <Route exact path='/' element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="General"></News>} />
          <Route exact path='/Business' element={<News setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="in" category="Business"></News>} />
          <Route exact path='/Entertainment' element={<News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="in" category="Entertainment"></News>} />
          <Route exact path='/General' element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="general" country="in" category="General"></News>} />
          <Route exact path='/Health' element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="health" country="in" category="Health"></News>} />
          <Route exact path='/Science' element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="science" country="in" category="Science"></News>} />
          <Route exact path='/Sports' element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="sports" country="in" category="sports"></News>} />
          <Route exact path='/Technology' element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="technology" country="in" category="Technology"></News>} />
        </Routes>
      </Router>
      </>
    )
  }
}

