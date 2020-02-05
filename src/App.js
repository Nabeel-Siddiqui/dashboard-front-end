import './App.css';
import React, { Component } from 'react';
import MainContainer from './containers/MainContainer.js';
import Preferences from './containers/Preferences.js'
import TopBar from './componets/TopBar.js'
import NavBar from './componets/NavBar.js'
import NotePad from './containers/NotePad';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";





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
    sleepCycle:[],

    notes: [],
    user: [],
    preferences: [],

    currentUser: {},
    currentUserNotes: {},
    currentUserPreferences: {},

    isClickedReddit: false,
    isClickedNews: false,

    isClickedSpotify: false,
    isClickedStock: false,
    isClickedTwitter: false,
    isClickedWeather: false,
    
    isClickedCalender: false,
    isClickedNotes: false

  }
  
  componentDidMount(){

    // External APIs
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

    fetch(`https://api.darksky.net/forecast/1b07348caf716bd7ef9f42013be677c0/42.3601,-71.0589`)
    .then(resp => resp.json())
    .then(json_resp => 
      console.log(json_resp))
        
      // Local APIs
    fetch(`http://localhost:3000/users`)
    .then(resp => resp.json())
    .then(usersArray => 
      this.setState({
        user: usersArray
      }))
      
    fetch(`http://localhost:3000/notes`)
    .then(resp => resp.json())
    .then(notesArray => 
      this.setState({
        notes: notesArray
      }))
    
    fetch(`http://localhost:3000/preferences`)
    .then(resp => resp.json())
    .then(preferencesArray => 
      this.setState({
        preferences: preferencesArray
      }))
    
    }

    handleCreateUser = (e, userObj) => {
      e.preventDefault()
      if(!this.state.user.includes(userObj)) {
        this.setState({
        user: [userObj, ...this.state.user]
        })
      }
    }


  render() {
    return (
      <Router>
        <div>
          <TopBar/>
          {/* <NavBar/>  */}
          {/* <Route path="/" component={Signup}/> */}
          {/* <Route path="/main" component={MainContainer} /> */}
          <Route path="/notepad" component={NotePad}/>

          <Signup handleCreateUser={this.handleCreateUser}/>


          {/* <Login userInfo={this.state.user} userName={this.state.currentUser}/> */}
          <br/>
          {/* <MainContainer reddit={this.state.reddit} news={this.state.news} notes={this.state.notes}/> */}
          </div>
      </Router>
    )
  }
}
