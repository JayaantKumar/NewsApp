import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router, Routes, Route} from "react-router";
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {

  
  render() {
    const App = ()=> {
      const pageSize = 5;
      const apiKey = process.env.REACT_APP_NEWS_API
      const [progress, setProgress] = useState(0)
    return (
      <div>
        <NavBar/>
        <News/>
      </div>
    )
  }
}

