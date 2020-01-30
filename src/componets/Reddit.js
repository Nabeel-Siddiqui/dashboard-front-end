import React from 'react';
import '../styling/reddit.css';
import { Item } from 'semantic-ui-react'

export default function Reddit(props) {
    return (
        <Item.Group>
        <Item>
        <Item.Content>
        <a href={props.reddit.url}>
            <Item.Header as='a'>{props.reddit.title} </Item.Header>
            </a>
            <Item.Meta>Subreddit - r/{props.reddit.subreddit}</Item.Meta>
            <Item.Description>
                Posted by - u/{props.reddit.author} <br/>
                Comments - {props.reddit.num_comments} <br/>
                Votes - {props.reddit.score}
            </Item.Description>
        </Item.Content>
        </Item>
    </Item.Group>

    )
}

  //subreddit, author, title, score, comments, url, preview

