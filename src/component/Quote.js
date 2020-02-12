import React from 'react'
import '../styling/quote.css'
import { Container, Card } from 'semantic-ui-react'

const Quote = (props) => {
    return (
        <Card>
                <div className="quote" style={{backgroundImage: `url(${props.quote.background})`}}>
                    <h2>Quote of the Day</h2>
                    <h5>{props.quote.quote}</h5> <br/>
                    <h5> -{props.quote.author}</h5>
                </div>
        </Card>
    )
}

export default Quote


