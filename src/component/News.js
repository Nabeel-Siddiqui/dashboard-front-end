import React from 'react'
import '../styling/news.css'

export default function News(props) {
    return (
    <div class="ui raised segments">
        <div class="ui segment">
            <a href={props.news.url}>
                {props.news.title} 
                <br/>
            </a>
            {props.news.description}
            <br/>
            <div className="source">Source - {props.news.source.name}</div>
            
        </div>
    </div>
    )
}
