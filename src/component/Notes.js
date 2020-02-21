import React from 'react'
import { Item } from 'semantic-ui-react'

export default function Notes(props) {
    return (
        <div class="ui equal width stretched grid">
            <div class="column">
                <div class="ui segment">
                    <div class="ui checkbox">
                        <input type="checkbox"/>
                        <label>{props.note.text_content}</label>
                    </div>
                </div>
            </div>
        </div>
    )
}




