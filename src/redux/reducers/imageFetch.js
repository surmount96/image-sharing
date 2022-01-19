import { IMAGE_PREVIEW, FETCH_PREVIEW, UPDATE_LIKES } from "../types";

const initialState = {
    isOpen:false,
    photo: {},
    id:0,
    photos: []
}

export default function (state = initialState, action) {
    switch(action.type){
        case IMAGE_PREVIEW:
            const { isOpen,data, id } = action.payload;
            
            return {
                ...state,
                isOpen,
                id,
                photo: data
            };

        case UPDATE_LIKES:
            
            let position = action.payload.id;
            state.photos[position][13] = state.photos[position][13] ? false : true;
            localStorage.setItem('IM_results',JSON.stringify(state.photos));
            return {
                ...state,
            };
        case FETCH_PREVIEW:
            return {
                ...state,
                photos : action.payload
            };
        default:
            return state;
    }
}