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

export const updateLikes = (content) => ({
    type: UPDATE_LIKES,
    payload:{
        ...content
    }
})

export const fetchImages = () => async dispatch => {
    dispatch(startLoading())
    try {
        const res = await ApiService.fetchNasaImages();
        if(res) {
            dispatch(stopLoading())
            return dispatch({type: FETCH_PREVIEW, payload: res.data})
        }
    }catch(err) {
        console.log(err)
    }
}