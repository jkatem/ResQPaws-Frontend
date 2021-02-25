// const PHOTOS_FETCH = 'PHOTOS_FETCHED'

// export const photosFetched = photos => ({
//     type: PHOTOS_FETCHED,
//     photos: photos
// })

export function photosFetched() {
    return (dispatch) => {
        fetch('https://res.cloudinary.com/resqpaws/image/upload/Images')
        .then(resp => resp.json())
        .then(photo => {
            dispatch({type: 'GET_PHOTOS', payload: photo})
        })
    }
}