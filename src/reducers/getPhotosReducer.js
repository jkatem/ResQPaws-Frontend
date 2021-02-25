const getPhotosReducer = (state={photos: []}, action) => {
    switch(action.type) {
        case 'GET_PHOTOS' :
            return {
                photos: action.payload
            }
        default:
            return state
    }
}

export default getPhotosReducer; 