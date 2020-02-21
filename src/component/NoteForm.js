import React, { Component } from 'react'
import shortid from 'shortid';

export default class NoteForm extends Component {

    state = {
        text_content: ""
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(`http://localhost:3000/notes`, {
            method:'POST',
            headers: { 
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
            text_content: this.state.text_content
        })
            })
            .then(resp => resp.json())
            .then(note => {
                this.setState({
                    text_content: note.text_content})
        })
    }
    
    

    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)} >
                <input name = "text_content" value={this.state.text_content} onChange={(event) => this.handleChange(event)} placeholder="notes...."/>
                <button>Create Note</button>
            </form>
        )
    }
}
