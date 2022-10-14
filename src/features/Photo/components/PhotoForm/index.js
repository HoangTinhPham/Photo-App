import PropTypes from 'prop-types';
import { FormGroup, Button, Spinner } from "reactstrap";
import { FastField, Form, Formik } from "formik";
import * as Yup from 'yup';
import { PHOTO_CATEGORY_OPTIONS } from "contants/global";
import InputField from "custom-field/InputField";
import SelectField from 'custom-field/SelectField';
import RandomPhotoField from 'custom-field/RandomPhotoField';

PhotoForm.propTypes = {
    initialValues: PropTypes.object,
    isAddMode: PropTypes.bool,
    onSubmit: PropTypes.func
}

PhotoForm.defaultProps = {
    initialValues: {},
    isAddMode: true,
    onSubmit: null
}

function PhotoForm(props) {

  const { initialValues, isAddMode } = props;

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('This field is required'),

    categoryId: Yup.number().required('This field is required').nullable(),

    photo: Yup.string().when('categoryId', {
      is: 1,
      then: Yup.string().required('This field is required'),
      orther: Yup.string().notRequired()
    })
  })

  return (
    <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={props.onSubmit}
    >
      {(formikProps) => {
        const { values, errors, touched, isSubmitting } = formikProps;
        console.log({values, errors, touched})
        return (
          <Form>
            <FastField
              name="title"
              component={InputField}

              label="Title"
              placeholder="Enter your title..."
            />

            <FastField 
              name="categoryId"
              component={SelectField}

              label="Category"
              placeholder="Choose your category..."
              options={PHOTO_CATEGORY_OPTIONS}
            />

            <FastField 
              name="photo"
              component={RandomPhotoField}

              label="Photo"
            />

            <FormGroup>
              <Button type="submit" color={isAddMode ? 'primary' : 'success'}>
                {isAddMode ? "Add to albums" : "Update to your photo"} &nbsp;
                {isSubmitting && <Spinner size="sm"/>}
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
