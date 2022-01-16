import { IMAGE_PREVIEW, FETCH_PREVIEW, UPDATE_LIKES } from "../types";
import { photos } from "../../assets/api/photos";

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
            state.photos[state.id].likes = state.photos[state.id].likes ? false : true;
            localStorage.setItem('IM_results',JSON.stringify(state.photos));
            return {
                ...state,
            };
        case FETCH_PREVIEW:
            const results = JSON.parse(localStorage.getItem('IM_results'));
            const list = results.length > 0 ? results : [action.payload];
            return {
                ...state,
                photos : list
            };
        default:
            return state;
    }
}