export function getDogs() {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/dogs')
        .then(resp => resp.json())
        .then(dog => {
            dispatch({type: 'GET_DOGS', payload: dog})
        })
    }
}

