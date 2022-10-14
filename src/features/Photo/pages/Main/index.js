import { useSelector, useDispatch } from 'react-redux'
import { Container } from 'reactstrap'
import { Link, useNavigate } from "react-router-dom";
import Images from 'contants/images';
import Banner from 'components/Banner';
import PhotoList from 'features/Photo/components/PhotoList';
import { removePhoto } from 'features/Photo/photoSlice';

function Main() {

    const photoList = useSelector(state => state.photos)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEditClick = (photoId) => {
        if(photoId) {
            navigate(`/photos/${photoId}`);
        }
    }

    const handleRemoveClick = (title) => {
        const action = removePhoto(title);
        dispatch(action);
    }

    return ( 
        <div>
            <Banner title="YOUR AWESOME PHOTO" urlBackground={Images.PINK_BG}/>
            
            <Container className="text-center">
                <br />
                <Link to="/photos/add" >Add new photo</Link>
                <br />
                <br />
                <PhotoList 
                    photoList={photoList}
                    onPhotoRemoveClick={handleRemoveClick}
                    onPhotoEditClick={handleEditClick}
                />
            </Container>
        </div>
     );
}

export default Main;