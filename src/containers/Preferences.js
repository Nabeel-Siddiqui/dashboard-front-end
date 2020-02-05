import React, { Component } from 'react'

export default class Preferences extends Component {
    render() {
        return (
            <div>
                <strong>Choose Preferences:</strong>
                <br/>
                <label>
                    <input type="radio" value="Reddit" checked={null} onChange={null}/>
                    Reddit
                </label>
                
                <label>
                    <input type="radio" value="News" checked={null} onChange={null}/>
                    News
                </label>

                <br/>

                <label>
                    <input type="radio" value="Weather" checked={null} onChange={null}/>
                    Weather
                </label>
                <br/>
                <label>
                    <input type="radio" value="Stocks" checked={null} onChange={null}/>
                    Stocks
                </label>
                <br/>
                <label>
                    <input type="radio" value="Spotify" checked={null} onChange={null}/>
                    Spotify
                </label>
                <br/>
                <label>
                    <input type="radio" value="Twitter" checked={null} onChange={null}/>
                    Twitter
                </label>
                <br/>
                <label>
                    <input type="radio" value="Notes" checked={null} onChange={null}/>
                    Notes
                </label>
                <br/>
                <label>
                    <input type="radio" value="Calender" checked={null} onChange={null}/>
                    Calender
                </label>
            </div>
        )
    }
}
