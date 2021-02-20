import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import getDogsReducer from './reducers/dog/getDogsReducer'
import getOrganizationsReducer from './reducers/organizations/getOrganizationsReducer'

const reducer = combineReducers({
    getOrganizationsReducer,
    getDogsReducer
})


const store = createStore(
    reducer, 
    compose(applyMiddleware(thunk), composeWithDevTools())
)

export default store
