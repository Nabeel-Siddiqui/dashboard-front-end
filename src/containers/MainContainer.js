import React, { Component } from 'react';
import Reddit from '../componets/Reddit.js'
import News from '../componets/News.js'
import SleepCycle from '../componets/SleepCycle.js'
import Spotify from '../componets/Spotify.js'
import Stock from '../componets/Stock.js'
import Weather from '../componets/Weather.js'
import Twitter from '../componets/Twitter.js'
import Notes from '../componets/Notes.js'
import Calender from '../componets/Calender.js'
import NotePad from '../containers/NotePad.js'


import '../styling/main.css';

export default class MainContainer extends Component {

    //REDDIT API
    renderReddit = () => {
        return this.props.reddit.map(reddit => <Reddit reddit={reddit.data}/>)
    }

    //NEWS API
    renderNews = () => {
        return this.props.news.map(news => <News news={news}/>)
    }
    

    //WEATHER API

    //STOCK API

    //SPOTIFY API

    //TWITTER API

    //NOTES API

    renderNote = () => {
        return this.props.notes.map(note => <Notes note={note}/>)
    }
    render() {
        return (

            <div className= "main">

            <div className = "reddit">
                {this.renderReddit()}
            </div>

             <div className = "news">
                {this.renderNews()}
            </div> 

            <div>
                <Weather/>
            </div>

            {/* <div className= "note">
                {this.renderNote()}
            </div> */}

            <div>
                <Calender/>
            </div>

            <div>
                <NotePad/>
            </div>

            </div>


        )
    }
}
