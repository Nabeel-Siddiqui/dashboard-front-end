import './App.css';
import React, { Component } from 'react';
import MainContainer from './containers/MainContainer.js';
import Login from './containers/Login/Login.js'
import Signin from './containers/Login/SignIn.js'
import Welcome from './containers/Welcome.js'
import Preferences from './containers/Preferences.js'

export default class App extends Component {
  
  state = {
    reddit: [],
    news: [],
    weather: [],
    stock: [],
    spotify: [],
    twitter: [],
    sleep: [],
    calender: [],
    user: [],
    userPreferences: []

  }
  
  componentDidMount(){
    fetch(`https://www.reddit.com/r/popular.json`)
    .then(resp => resp.json())
    .then(redditArray => 
      this.setState({
        reddit: redditArray.data.children
      }))

      fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=de56040783e341c2a00c96ec8192bb81`)
      .then(resp => resp.json())
      .then(newsArray => 
        this.setState({
          news: newsArray.articles
        }))
    }

  render() {
    return (
      <div>
        <MainContainer reddit={this.state.reddit} news={this.state.news}/>
        <Login/>
        <Signin/>
        <Welcome/>
        <Preferences/>
      </div>
    )
  }
}

    //REDDIT API
    //NEWS API
    //WEATHER API
    //STOCK API
    //SPOTIFY API
    //TWITTER API