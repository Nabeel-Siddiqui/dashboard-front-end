import React from 'react'
import { Link } from 'react-router-dom';

export default function Notes(props) {
    return (
        
        <div>
            <ol>
                {props.note.title}
            </ol>
        </div>
    )
}

