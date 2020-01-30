import React from 'react'

export default function News(props) {
    console.log(props.news)
    return (
        <div>
            <a href={props.news.url}>
            {props.news.title} <br/>
            </a>
            {props.news.description}<br/>
            Source - {props.news.source.name}
        </div>
    )
}
