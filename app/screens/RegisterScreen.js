import React from 'react';
import { StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup'; 

import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import { ErrorMessage } from '../components/forms';
import Screen from '../components/Screen';


const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(8).label("Password"), 
});

function RegisterScreen(props) {
   

    return (
        <Screen>
                <AppText style={styles.screenTitle}>Register</AppText>
                <Formik
                    initialValues={{name:'', email:'', password: ''}}
                    onSubmit={values => console.log(values)}
                    validationSchema={validationSchema}
                >
                    { ({ handleChange, handleSubmit, errors, onBlur, setFieldTouched, touched }) => ( 
                        <>
                            <AppTextInput 
                                autoCapitalize="none"
                                autoCorrect={false}
                                onBlur={() => setFieldTouched("name") }
                                onChangeText={handleChange("name")}
                                placeholder="Name"
                            />
                             <ErrorMessage error={errors.name} visible={touched.name}/>
                            <AppTextInput 
                                autoCapitalize="none"
                                autoCorrect={false}
                                onBlur={() => setFieldTouched("email")}
                                onChangeText={handleChange("email")}
                                icon="email"
                                keyboardType="email-address"
                                placeholder="Email"
                            />
                              <ErrorMessage error={errors.email} visible={touched.email}/>

                            <AppTextInput
                                autoCapitalize="none"
                                autoCorrect={false}
                                onBlur={() => setFieldTouched("password")}
                                onChangeText={handleChange("password")}
                                icon="lock"
                                placeholder="Password"
                                secureTextEntry={true}
                            />
                            <ErrorMessage error={errors.password} visible={touched.password}/>
                            <AppButton title="Register" onPress={ handleSubmit} />
                        </>
                    )}
                </Formik>
                
        </Screen>
    );
}

const styles = StyleSheet.create({
    screenTitle: {
        alignSelf: 'center', 
        fontSize: 25,
        marginTop: 50, 
        marginBottom: 20, 

    }
})

export default RegisterScreen;