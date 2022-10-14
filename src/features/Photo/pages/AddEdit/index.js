import { useDispatch, useSelector } from 'react-redux';
import Banner from 'components/Banner';
import PhotoForm from 'features/Photo/components/PhotoForm';
import './AddEdit.scss';
import { addPhoto, updatePhoto } from 'features/Photo/photoSlice';
import { useNavigate, useParams } from 'react-router-dom';

function AddEdit() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const photoId = useParams();
    const editInitalValue = useSelector(state => state.photos.find(x => x.id === +photoId.id));
    const isAddMode = !photoId.id;

    const initialValues = isAddMode ? {
        title: "",
        categoryId: null,
        photo: "",
      }
      : editInitalValue

    const handleSubmitForm = (values) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                if(isAddMode) {
                    const action = addPhoto(values);
                    dispatch(action);
                } else {
                    const action = updatePhoto(values);
                    dispatch(action);
                }
                navigate('/photos');
                resolve(true);
            }, 2000)
        })
    
    }

    return ( 
        <div className="photo-edit">
            <Banner title="Pick your amazing photo"/>

            <div className="photo-edit__form">
                <PhotoForm 
                    onSubmit={handleSubmitForm}
                    isAddMode={isAddMode}
                    initialValues={initialValues}
                >
                    </PhotoForm>    
            </div>    
        </div>

        
     );
}

export default AddEdit;