import React, { Component } from 'react'

export default class NotePad extends Component {


    state = {
        title: "",
        text_content: ""
    }

    render() {
        return (
            <div>
                {/* <h3>Create Note</h3>
                <div class="ui form">
                    <form onSubmit={null}>
                    <input onChange={null} type="text" name="title"/>
                    <div class="field">
                        <textarea> onChange={null} type="text" name="text_content"</textarea>
                    </div>
                    </form> 
                </div> */}
            </div>
        )
    }
}

{/* <h3>Create Note</h3>
<form onSubmit={null}>
      <input onChange={null} type="text" name="title"/>
      <textarea onChange={null} type="text" name="text_content"/>
    <input type="submit" />
</form> */}