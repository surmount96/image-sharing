

const PhotoView = ({src,size}) => {
    
    return (
        <div>
            <img src={src} className={`rounded-lg object-fit block object-center ${size}`} alt-text="photo"/>
        </div>
    );
}

export default PhotoView;