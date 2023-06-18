import React from 'react';
import { Formik } from 'formik';

function AppForm({initialValues, onSubmit, validationSchema, children}) {
    return (
            <Formik
            initialValues={initialValues}
            /*
                * "onSubmit": This is where we call the server and send the "email" and
                "password" credentials for validations and processing to allow the user
                to login to the app.
                * "onSubmit": This is the function that gets called when the form is submitted
                * Note 1: formik track or keeps track of our form state and everything that
                            happens within the form and its properties. 
                * Note 2: We can write custom functions to handle the form functionalities 
                            or let formik do everything with its built-in properties and 
                            functions. 
            */
            onSubmit={onSubmit}
            // We are calling the "validationSchema" schmea object we defined above inside "formik" so that 
            // all the rules we defined gets apply to the form
            // Note 3: Formik will take care of everything for us. 
            validationSchema={validationSchema}
        >
            {() => (
                <>
                    {children}
                </>
            )}

        </Formik>
    );
}

export default AppForm;