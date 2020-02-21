import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import NoteForm from './component/NoteForm.js';
import Notes from './component/Notes.js'

export default class NoteList extends Component {

    state ={
        notes: []
    };

    addNote = (note) => {
        this.setState({
            notes: [note, ...this.state.notes]
        })
    }

    toggleComplete = (id) => {
        this.setState({
            notes: this.state.notes.map(note => {
                if (note.id === id) {
                    return {
                        ...note,
                        // id: note.id,
                        // text: note.text,
                        complete: !note.complete
                    }
                    
                } else {
                    return note;
                }
            })
        })
    }
    
    

    render() {
        return (
            <div>
                <NoteForm onSubmit={this.addNote}/>
                {this.state.notes.map(note => (
                <Notes key={note.id} 
                toggleComplete={() => this.toggleComplete(note.id)} 
                note={note.text_content}/>))}
                <div>
                    <button>All Notes</button>
                    <button>Active Notes</button>
                    <button>Completed Notes</button>
                </div>
            </div>
        )
    }
}
