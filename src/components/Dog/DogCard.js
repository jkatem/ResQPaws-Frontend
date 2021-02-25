import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './DogCard.css'
import { connect } from 'react-redux'
import { getDogs } from '../../actions/getDogs'


class Dogcard extends Component {

    componentDidMount() {
        this.props.getDogs();
    }

    
    render() {

        const { id, name, location, story, items_needed, donations_received, donations_requested, img } = this.props.dog
 
        return (
            <>
                <div className="dog-card">  
                    <span>  
                    <Link to={`/api/v1/dogs/${id}`}>{name}</Link> from {location} 
                    <img alt='dog' src={img} key={id} className="dog-avatar"/>
                    <h5>{story} </h5>
                    Donations Received: ${donations_received} of ${donations_requested} Items Needed: {items_needed}
                    </span>
                </div>
          </>
        )
    }
}

// const mSTP = state => {
//     return {
//         dogPhotos: state.getDogsReducer.dogs
//     }
// }

export default connect(null, {getDogs})(Dogcard);
