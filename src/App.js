import React, { Component } from 'react'
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import OrganizationContainer from './containers/OrganizationContainer';
import DogContainer from './containers/DogContainer';
import { getDogs } from './actions/getDogs'
// import { getUser } from './actions/user/userActions'
import About from './components/About'
import DogCard from './components/Dog/DogCard'
import HomePage from './containers/HomePage';
import Donation from './components/Donation'
import CartContainer from './containers/CartContainer'
// import LoginForm from './components/LoginForm';
// import UserProfile from './components/UserProfile';
// import SignUp from './components/user/SignUp'
// import Logout from './components/Logout';


class App extends Component {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     id : this.props.match.params.id
  //   }
  // }
  
  componentDidMount(){
    this.props.getDogs();
    // this.props.getUser();
  }


  render() {

    return (
      <>
        <div> 
          <NavBar />
        </div> 
           
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/about' component={About}/>
 
          <Route path='/organizations' component={OrganizationContainer}></Route>
          
          <Route exact path='/dogs'>
            <DogContainer id='dog-container' dogs={this.props.dogs} />
          </Route>
          
          <Route path='/dogs/:id' render={(routerProps) => {
            console.log(routerProps)
                const dogId = parseInt(routerProps.match.params.id)
                console.log(dogId)
                const dogObj = this.props.dogs.find(dog => dog.id === dogId)
                if (dogObj) {
                  return (
                  <DogCard  
                            key={dogObj.id}
                            dog={dogObj}
                  />
                )} 
                  else {
                    return <div>Loading... </div>
                  }
            }} 
          ></Route> 
          
          <Route path='/donate' render={(routerProps) => <Donation {...routerProps} />}/>
            {/* <Donation />
          </Route> */}
          {/* <Route path='/donate' component={Donation}></Route>  */}
          <Route path='/cart' component={CartContainer}/>             
          
        </Switch>
      </>
    )
  }
}

const mSTP = (state) => {
  return ({
    dogs: state.getDogsReducer.dogs,
  })
} 

export default connect(mSTP, {getDogs})(App);

/*
       <Route path='/api/v1/donate' render={(routerProps => 
            <Donation 
              {...routerProps} 
              donation={this.state.donationAmt}/>
          )}/>
*/