import Text from "./typography/text";
import PhotoView from "./photos/photo-view";
// import Button from "./typography/button";
import { useDispatch } from "react-redux";
import { updateImage } from "../redux/actions";

const Card = ({attr,data,position}) => {
    const dispatch = useDispatch();

    const showImage = () => {
        dispatch(updateImage({data,likes:false,id:position}))
    }
    return (
        <div className={`cursor-pointer ${attr}`} onClick={showImage}>
            <div >
                <PhotoView src={data.url} size="w-64 h-40"/>
            </div>
            <Text attr="text-md font-bold text-dark" value={data.title} />
        </div>
    );
}

export default Card;