import React, { Component } from 'react'
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom'
import OrganizationContainer from './containers/OrganizationContainer';


class App extends Component {

  // componentDidMount() {
  //   fetch('http://localhost:3000/api/v1/organizations/1') //this request takes some time. It is asynchronous, meaning we won't do anything until we have a response
  //   .then(resp => resp.json())
  //   .then(organizations => console.log(organizations))
  // }


  render() {
    return (
      <>
        <div> 
          <NavBar />
        </div>
        
        <Switch>
          <Route path='/organizations' component={OrganizationContainer}>

          </Route>
            
        </Switch>
      </>
    )
  }
}


export default App;