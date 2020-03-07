import React, { Component } from 'react';
import MainContainer from './containers/MainContainer.js';
import Preferences from './containers/Preferences.js'
import TopBar from './component/TopBar.js'
import NavBar from './component/NavBar.js'
import NotePad from './containers/NotePad';

import Login from './component/Login.js'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Header, Icon, Divider, Segment } from 'semantic-ui-react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


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

    quote: [],

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
    isClickedNotes: false,

    loggedInUserId: null,
    token: null

  }
  logOutClick = () => {
    localStorage.removeItem("loggedInUserId")
    localStorage.removeItem("token")
    this.setState({
      loggedInUserId: null,
      token: null
    })
  }

  loggedIn(){
    return !!this.state.token
  }


  setToken = (token, loggedInUserId) => {
    localStorage.token = token;
    localStorage.loggedInUserId = loggedInUserId;

    this.setState({
      token: token,
      loggedInUserId: loggedInUserId
    })
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

      this.setState({
        token: localStorage.token,
        loggedInUserId: localStorage.loggedInUserId
      })

    // fetch(`https://api.darksky.net/forecast/1b07348caf716bd7ef9f42013be677c0/42.3601,-71.0589`)
    // .then(resp => resp.json.blob())
    // .then(json_resp => 
    //   console.log(json_resp))

    // fetch(`https://api.tronalddump.io/random/meme`)
    // .then(resp => resp.json())
    // .then(json_resp => 
    //   console.log(json_resp))

    //10 fetch per hour - limited use
    fetch(`http://quotes.rest/qod.json`)
    .then(resp => resp.json())
    .then(quoteObj => 
      this.setState({
        quote: quoteObj.contents.quotes
      }))

      // fetch(`http://api.openweathermap.org/data/2.5/weather?q=newyork&units=imperial&APPID=8769a3625904e3f7eb61d9cfb35c4599`)
      // .then(resp => resp.json())
      // .then(json_resp => 
      //   console.log(json_resp))
        
      // Local APIs
    fetch(`http://localhost:3000/users`)
    .then(resp => resp.json())
    .then(usersArray => 
      this.setState({
        user: usersArray
      }))
      
    fetch(`http://localhost:3000/notes`)
    .then(resp => resp.json())
    .then(notes => 
      this.setState({
        notes: notes
      }))
    
    fetch(`http://localhost:3000/preferences`)
    .then(resp => resp.json())
    .then(preferencesArray => 
      this.setState({
        preferences: preferencesArray
      }))
    
    }

    handleLoginSubmit = (e, userObj) => {
      e.preventDefault()
        this.setState({
        user: [userObj, ...this.state.user]
        })
      }


  render() {
    return (
    <div>
      <br/>
      <div>
        <Header as='h1'>
          <Icon name='rocket' />
          <Header.Content>Mission Control</Header.Content>
          {this.loggedIn() ?  <button className="logout" onClick={ this.logOutClick }>Log Out</button> : "" }
          
        </Header>
        <Divider />
        { this.loggedIn() ? 
          <MainContainer reddit={this.state.reddit }news={this.state.news} quote={this.state.quote} note={this.state.notes}
          token={ this.state.token } />
          : <Login setToken={ this.setToken }  />
        }
        <Divider />
      </div>
    </div>
    )
  }
}
  
  // <Route exact path="/" render={props => <Login handleLoginSubmit={this.handleLoginSubmit}/>}/> 
  // <NavBar/> 
  {/* <Route path="/" component={Signup}/> */}
  // <Route exact path="/main" render={props => <MainContainer {...props} reddit={this.state.reddit} news={this.state.news} notes={this.state.notes} quote={this.state.quote} />} />
  // <Route path="/notepad" component={NotePad}/>


  // <Signup handleCreateUser={this.handleCreateUser}/>


  {/* <Login userInfo={this.state.user} userName={this.state.currentUser}/> */}
  {/* , <Calendar />  */}

  {/* <MainContainer reddit={this.state.reddit} news={this.state.news} notes={this.state.notes}/> */}



  {/* <span onClick={(e) => console.log("click")} role="img" aria-label="trump">💩</span> */}




  