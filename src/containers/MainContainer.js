import React, { Component } from 'react';
import Reddit from '../componets/Reddit.js'
import News from '../componets/News.js'
import SleepCycle from '../componets/SleepCycle.js'
import Spotify from '../componets/Spotify.js'
import Stock from '../componets/Stock.js'
import Weather from '../componets/Weather.js'
import Twitter from '../componets/Twitter.js'
import Notes from '../containers/Notes.js'


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
                <SleepCycle/>
            </div>

            <div>
                <Spotify/>
            </div>

            <div>
                <Stock/>
            </div>

            <div>
                <Twitter/>
            </div>

            <div>
                <Weather/>
            </div>

            <div><Notes/></div>

            </div>


        )
    }
}
