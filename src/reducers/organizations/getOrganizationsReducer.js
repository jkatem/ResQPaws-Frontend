export default function getOrganizationsReducer(state={organizations: []}, action) {
    // debugger
    switch(action.type) {
        case 'GET_ORGANIZATIONS':
            return {                
                organizations: action.payload}    
        default:
            return state
    }
}


