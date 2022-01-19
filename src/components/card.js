import Text from "./typography/text";
import PhotoView from "./photos/photo-view";
// import Button from "./typography/button";
import { useDispatch } from "react-redux";
import { updateImage,updateLikes,fetchImages } from "../redux/actions";
import { HeartFillIcon,HeartLightIcon } from "../assets/api/svg";

const Card = ({attr,data,position}) => {
    const dispatch = useDispatch();

    const showImage = () => {
        dispatch(updateImage({data,likes:false,id:position}))
    }
    const updateLike = () => {
        dispatch(updateLikes({id:position}));
    }
    return (
        <div className={`${attr}`} >
            <div className={`cursor-pointer`} onClick={showImage}>
                <PhotoView src={data?.[10]} size="lg:w-64 md:w-64 w-full lg:h-40 md:h-40 h-64"/>
            </div>
            <div className="flex justify-between my-3">
                <Text attr="text-md font-bold text-dark" value={data?.[1]} />
                <div className="animate-pulse cursor-pointer" onClick={updateLike}>
                    {data?.[13] ? 
                        <HeartFillIcon />
                        :
                        <HeartLightIcon />
                        }
              </div>
            </div>
        </div>
    );
}

export default Card;