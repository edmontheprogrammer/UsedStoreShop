import React from 'react';
import { useFormikContext } from 'formik';


import ErrorMessage from '../forms/ErrorMessage';
import AppTextInput from '../AppTextInput';

function AppFormField({ name, ...otherProps }) {
    const {setFieldTouched, handleChange, errors, touched} = useFormikContext(); 

    return (
        <>
            <AppTextInput 
                // telling "iOS" and "Android" not to captialize 
                // the text we input 
                // autoCapitalize="none"
                // Telling "iOS" and "Android" not to auto correct the 
                // input or correct the spelling of the text we add here.
               // autoCorrect={false}
               //  KeyboardType="email-address"
                onBlur={() => setFieldTouched("name") }
                onChangeText={handleChange("name")}
                {...otherProps}
              //  icon="email"
               // placeholder="Email"
            />
            {/* 
            
                // Here, we are using the "ErrorMessage" component to display or show the validation errors
                // that can possiblilty generated by the "ErrorMessage" with initialValue of "email" to 
                // the user. In other words, we are display the errors from the email text field here. 
                
                // "{errors.email}" we are calling the errors for the email field witin the form. 
                // Then formik will display this error message in the "ErrorMessage",
            */}
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    );
}

export default AppFormField;