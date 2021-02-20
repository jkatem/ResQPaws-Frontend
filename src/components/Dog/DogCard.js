import React, { Component } from 'react'
import './DogCard.css'

export default class Dogcard extends Component {

    
    render() {

        const { name } = this.this.props

        return (
            <div className="dog-card">
                <Link to={`/dogs/${id}`}> <h2> {name} </h2></Link>
            </div>
        )
    }
}
