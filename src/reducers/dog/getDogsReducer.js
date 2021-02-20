

    

const getDogsReducer = (state={dogs: []}, action) => {
    switch(action.type) {
        case 'GET_DOGS':
            return console.log(state)
        default:
            return state 
    }
}
export default getDogsReducer;