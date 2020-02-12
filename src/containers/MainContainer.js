import React, { Component } from 'react';
import Reddit from '../component/Reddit.js'
import News from '../component/News.js'
import SleepCycle from '../component/SleepCycle.js'
import Spotify from '../component/Spotify.js'
import Stock from '../component/Stock.js'
import Twitter from '../component/Twitter.js'
import Notes from '../component/Notes.js'
import NotePad from '../containers/NotePad.js'
import Calendar from 'react-calendar'
import Quote from '../component/Quote.js'
import Submit from '../component/Submit.js'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import '../styling/main.css';

import { Grid, Segment,Icon } from 'semantic-ui-react'

export default class MainContainer extends Component {

    componentDidMount(){
        const { loggedInUserId, token } = this.props

        console.log(token)
    }


    //REDDIT API
    renderReddit = () => {
        return this.props.reddit.map(reddit => <Reddit reddit={reddit.data}/>)
    }
    //NEWS API
    renderNews = () => {
        return this.props.news.map(news => <News news={news}/>)
    } 
    // QUOTE API
    renderQuote = () => {
        return this.props.quote.map(quote => <Quote quote={quote}/>)
    }
    //NOTES API
    renderNote = () => {
        return this.props.notes.map(note => <Notes note={note}/>)
    }
    //WEATHER API

    //STOCK API

    //SPOTIFY API

    //TWITTER API

    render() {
        return (
        <div>
            <Grid celled='internally'>
                <Grid.Row>
                    <Grid.Column width={3}>
                    <h2>CALENDAR <Icon name='calendar alternate'/></h2>
                        <Calendar/>
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <h2>NEWS <Icon name='newspaper' /></h2>
                        <div className = "news">
                            {this.renderNews()}
                        </div> 
                    </Grid.Column>
                    <Grid.Column width={3}>
                    <h2>NOTES <Icon name='sticky note' /></h2>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={3}>
                    <h2>QOTD <Icon name='quote left icon'/></h2>
                        <div className = "quote">
                            {this.renderQuote()}
                        </div> 
                    </Grid.Column>
                    <Grid.Column width={7}>
                    <h2>REDDIT <Icon name='reddit'/></h2>
                        <div className = "reddit">
                            {this.renderReddit()}
                        </div> 
                    </Grid.Column>
                    <Grid.Column width={3}>
                    <h2>WEATHER <Icon name='sun icon' /></h2>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
        )
    }
}
            // <div className= "main">


            // <div className = "quote">
            //     {this.renderQuote()}
            // </div> 
            
            //     <Calendar onChange={null}/>
            //     <h2 className="ui header">
            //     <img className="ui image"src="https://logos-download.com/wp-content/uploads/2016/06/Reddit_logo_full_1.png" width="100" height="77"/>
            //     </h2> 

            
            // <div className = "reddit">
            //     {this.renderReddit()}
            // </div> 

            //     <br/>
            // <div className = "news">
            //     {this.renderNews()}
            // </div> 

            // <div>
            //     <Weather/>
            // </div>

            // <div className= "note">
            //     {this.renderNote()}
            // </div> 


            // <div>
            //     <NotePad/>
            // </div>

            // </div>
