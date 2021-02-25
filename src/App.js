import React, { Component } from 'react'
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import OrganizationContainer from './containers/OrganizationContainer';
import DogContainer from './containers/DogContainer';
import {getDogs} from './actions/getDogs'
import About from './components/About'
import DogCard from './components/Dog/DogCard'
import SearchBar from './components/SearchBar'
// import Images from './components/Dog/Images'
// import Photo from './components/Photo'
// import {Cloudinary} from 'cloudinary-react';
// import {Image} from 'cloudinary-react';
// import PhotoListContainer

class App extends Component {

  // componentDidMount() {
  //   fetch('http://localhost:3000/api/v1/organizations/1') //this request takes some time. It is asynchronous, meaning we won't do anything until we have a response
  //   .then(resp => resp.json())
  //   .then(organizations => console.log(organizations))
  // }
  componentDidMount(){
    this.props.getDogs();
  }

  render() {
    // (console.log(this.props))

    return (
      <>
        <div> 
          <NavBar />
          <SearchBar />
        </div>        
        <Switch>
          <Route path='/api/v1/about' component={About}></Route>
          <Route path='/api/v1/organizations' component={OrganizationContainer}></Route>
      
          
          <Route path='/api/v1/dogs/:id' render={(routerProps) => {
                console.log(routerProps)
                const dogId = parseInt(routerProps.match.params.id)
                //  console.log(this.props)
                // debugger
                const dogObj = this.props.dogs.find(dog => dog.id === dogId)

                if (dogObj) {
                  return (
                  <DogCard  
                            key={dogObj.id}
                            dog={dogObj}
                            // id={dogObj.id}
                            // name={dogObj.name}
                            // img={dogObj.img}
                  />
                )} 
                  else {
                    return <div>Loading... </div>
                  }
            }} 
          ></Route>
          <Route path='/api/v1/dogs'>
            <DogContainer id='dog-container' dogs={this.props.dogs} />
          </Route>
        </Switch>
      </>
    )
  }
}

const mSTP = (state) => {
  return ({
    dogs: state.getDogsReducer.dogs
  })
} 

export default connect(mSTP, {getDogs})(App);