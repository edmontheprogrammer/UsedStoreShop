import React from 'react';
import { useFormikContext } from 'formik';

import AppButton from './AppButton';

function AppSubmitButton({title}) {
    const {handleSubmit} = useFormikContext(); 
    return (
        <AppButton 
        title={title}
        // Calling "handleSubmit" here will cause the form to be submitted
        // When the form is submitted we'll end-up above 
        // where the "onSubmit" property was initialized 
        // "onSubmit={values => console.log(values)}"
        onPress={ handleSubmit }
    />
    );
}

export default AppSubmitButton;