import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
// import Donation from '../../components/Donation'
import './DogCard.css'
import { getDogs } from '../../actions/getDogs'
// import { withRouter } from 'react-router-dom'


class Dogcard extends Component {

    // componentDidMount() {
    //     this.props.getDogs();
    // }

    // makeDonation = () => {
    //     console.log()
    //     console.log('clicke d')
    //     // console.log(dog.id}
    //     // this.props.history.push({
    //     //     pathname: '/cart'            
    //     // })
    // }
  
   
    render() {
        // console.log(this.props)
        const { id, name, location, story, items_needed, donations_received, donations_requested, img } = this.props.dog
 
        return (
            <>
                <div className="dog-card"> 

                    {/* <h2>{this.props.match.params.id}</h2>  */}

                    <span>  
                    <Link to={`/dogs/${id}`}>{name}</Link> from {location} 
                    <img alt='dog' src={img} key={id} className="dog-avatar"/>
                    <h5>{story} </h5>
                    <div>Raised: ${donations_received} of ${donations_requested}</div> 
                    Items still need: {items_needed}
                    </span>
                    <Link to='/donate'>DONATE</Link>
                </div>
          </>
        )
    }
}


export default connect(null, {getDogs})(Dogcard);
