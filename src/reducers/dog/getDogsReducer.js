const getDogsReducer = (state={dogs: []}, action) => {
    switch(action.type) {
        case 'GET_DOGS':
            return {
                dogs: action.payload
            }
        default:
            return state 
    }
}
export default getDogsReducer;