import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Formik } from 'formik'; 
import * as Yup from 'yup'; 

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import ErrorMessage from '../components/ErrorMessage';
import Screen from '../components/Screen';
import AppFormField from '../components/AppFormField';
import AppSubmitButton from '../components/AppSubmitButton';






// We are defining validation schema, a validation schema is an object that determines all the rules 
// for validating data in our form. 
const validationSchema = Yup.object().shape({
    email: Yup
               .string()
               .required()
               .email()
               .label("Email"), 
    password: Yup
                .string()
                .required()
                .min(4)
                .matches()
                .label("Password")
}); 

function LoginScreen(props) {

    return (
        <Screen style={styles.container}>
            <Image 
                style={styles.logo}
                source={require("../assets/logo.jpg")}  />
            <Formik
                initialValues={{ email: '', password: '' }}
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
                onSubmit={values => console.log(values)}
                // We are calling the "validationSchema" schmea object we defined above inside "formik" so that 
                // all the rules we defined gets apply to the form
                // Note 3: Formik will take care of everything for us. 
                validationSchema={validationSchema}
            >
                {/* // We should pass a function with properties that can "handleChange" changes that 
                occur on the form such as values and "handleSubmit" what happens when the user
                submits the form. 
                These properties are "handleChange", "handleSubmit" and others built-in 
                properties within the formik library. These properties is how we keep track of 
                form states in formik and its submission process. 

                "handleChange" is a function that handles all the changes that happen within the form
                
                "handleSubmit" is a function that gets call and handles Submission of our form. 

                "errors": error is an object or a function that handles all the errors that gets generated 
                            by the form. Formik is awesome because we don't have to write these functions 
                    and objects from scretch. 
                "onBlur" event; React onBlur behaves just like the native JavaScript version of blur. 
                Every time you get out of focus from the input field. The event will tigger It doesn't matter 
                if the values has changed or not, every time you get out of focus. 

                

                */}
                {() => (
                    <>
                        <AppFormField
                            // telling "iOS" and "Android" not to captialize 
                            // the text we input 
                            autoCapitalize="none"
                            // Telling "iOS" and "Android" not to auto correct the 
                            // input or correct the spelling of the text we add here.
                            autoCorrect={false}
                            KeyboardType="email-address"
                            name="email"
                            icon="email"
                            placeholder="Email"
                        />
                        <AppFormField 
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            name="password"
                            placeholder="Password"
                            secureTextEntry={true}
                        />
                        <AppSubmitButton title="Login" />
                    </>
                )}
            </Formik>

        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10, 
     }, 

    logo: {
        width: 80, 
        height: 80, 
        alignSelf: 'center', 
        marginTop: 50, 
        marginBottom: 20, 
    }, 
})

export default LoginScreen;