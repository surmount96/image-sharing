import { IMAGE_PREVIEW, FETCH_PREVIEW, UPDATE_LIKES } from "./types"
import ApiService from '../config/ApiService';
import { startLoading,stopLoading } from "./loadingActions";

export const updateImage = (content) => ({
    type: IMAGE_PREVIEW,
    payload:{
        isOpen:true,
        ...content
    }
})

export const closeImage = () => ({
    type: IMAGE_PREVIEW,
    payload:{
        isOpen:false
    }
})

export const updateLikes = (content) => ({
    type: UPDATE_LIKES,
    payload:{
        ...content
    }
})

export const fetchImages = () => async dispatch => {
    dispatch(startLoading())
    try {
        let results = JSON.parse(localStorage.getItem('IM_results'));
        let resp = [];
        if(results != null) {
            resp = results
        } else {
            const res = await ApiService.fetchNasaImages();
            resp = res.data.results;
        }
        if(resp) {
            dispatch(stopLoading())
            return dispatch({type: FETCH_PREVIEW, payload: resp})
        }
        
    }catch(err) {
        console.log(err)
    }
}