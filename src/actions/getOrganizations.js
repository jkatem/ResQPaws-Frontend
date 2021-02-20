
export const getOrganizations = () => {
    // debugger
    return (dispatch) => {
        
        fetch('http://localhost:3000/api/v1/organizations')
        .then(resp => resp.json())
        .then(orgData => {
            dispatch({type: 'GET_ORGANIZATIONS', payload: orgData})
        })
    }
}