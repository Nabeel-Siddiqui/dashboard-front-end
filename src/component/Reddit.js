import React from 'react';
import '../styling/reddit.css';
import { Item } from 'semantic-ui-react'

export default function Reddit(props) {
    return (
        <div className="ui raised segments">
            <div className="ui segment">
                <Item.Group>
                    <Item>
                        {props.reddit.thumbnail.includes("http") &&
                        <img className="ui avatar image" alt="reddit" src={ props.reddit.thumbnail } height="175" width="175"></img> }
                            <br/>
                                <Item.Content>
                                    <a href={props.reddit.url}>
                                        <Item.Header as='a'>{props.reddit.title} </Item.Header> 
                                    </a>
                                        <Item.Meta>Subreddit - r/{props.reddit.subreddit}</Item.Meta>
                                        <Item.Description>
                                        Posted By - u/{props.reddit.author} <br/>
                                        Comments - {props.reddit.num_comments} <br/>
                                        <div className="upvote">Upvotes - {props.reddit.score}</div>
                                        </Item.Description>
                                </Item.Content>
                    </Item>
                </Item.Group>
            </div>
        </div>

    )
}

//subreddit, author, title, score, comments, url, preview
