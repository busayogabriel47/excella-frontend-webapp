import { useState } from "react";

import {
    firstnameValidation,
    emailValidation,
    lastnameValidation,
    phoneValidation,
    educationValidation,
    genderValidation,
    contactmeansValidation,
    termsValidation
} from "../Validation/StudentValidation";


const touchErrors = errors => {
    return Object.entries(errors).reduce((acc, [field, fieldError])=> {
        acc[field] = {
            ...fieldError,
            dirty: true
        };

        return acc;
    }, {});
}

export const SignupRegsignup = signup => {
    const [errors, setErrors] = useState({
        firstname: {
            dirty: false,
            error: false,
            message: "",
        },

        lastname: {
            dirty: false,
            error: false,
            message: "",
        },

        email: {
            dirty: false,
            error: false,
            message: ""
        },

        phone: {
            dirty: false,
            error: false,
            message: ""
        },

        education:{
            dirty: false,
            error: false,
            message: ""
        },

        gender:{
            dirty: false,
            error: false,
            message: ""
        },

        contactmeans:{
            dirty: false,
            error: false,
            message: ""
        },

        terms:{
            dirty: false,
            error: false,
            message: ""
        }
    })



const validationtrainers = ({signup, field, errors, forceTouchErrors = false}) => {

    let isValid = true;

    let nextErrors = JSON.parse(JSON.stringify(errors));

    if(forceTouchErrors){
        nextErrors = touchErrors(errors);
    }

    const {firstname, lastname, education, gender, email, phone, contactmeans, terms} = signup;

    if(nextErrors.firstname.dirty && (field ? field === "firstname" : true)){
        const firstnameField = firstnameValidation(firstname, signup);
        nextErrors.firstname.error = !!firstnameField;

        nextErrors.firstname.message = firstnameField;

        if(!!firstnameField) isValid = false;
    }

    if(nextErrors.lastname.dirty && (field ? field === "lastname" : true)){
        const lastnameField = lastnameValidation(lastname, signup);
        nextErrors.lastname.error = !!lastnameField;

        nextErrors.lastname.message = lastnameField;

        if(!!lastnameField) isValid = false;
    }

    if(nextErrors.email.dirty && (field ? field === "email" : true)){
        const emailField = emailValidation(email, signup);
        nextErrors.email.error = !!emailField;

        nextErrors.email.message = emailField;

        if(!!emailField) isValid = false;
    }

    if(nextErrors.phone.dirty && (field ? field === "phone" : true)){
        const phoneField = phoneValidation(phone, signup);
        nextErrors.phone.error = !!phoneField;

        nextErrors.phone.message = phoneField;

        if(!!phoneField) isValid = false;
    }



    if(nextErrors.contactmeans.dirty && (field ? field === "contactmeans" : true)){
        const contactmeansField = contactmeansValidation(contactmeans, signup);
        nextErrors.contactmeans.error = !!contactmeansField;

        nextErrors.contactmeans.message = contactmeansField;

        if(!!contactmeansField) isValid = false;
    }

    if(nextErrors.education.dirty && (field ? field === "education" : true)){
        const educationField = educationValidation(education, signup);
        nextErrors.education.error = !!educationField;

        nextErrors.education.message = educationField;

        if(!!educationField) isValid = false;
    }


    if(nextErrors.gender.dirty && (field ? field === "gender" : true)){
        const genderField = genderValidation(gender, signup);
        nextErrors.gender.error = !!genderField;

        nextErrors.gender.message = genderField;

        if(!!genderField) isValid = false;
    }


    if(nextErrors.terms.dirty && (field ? field === "terms" : true)){
        const termsField = termsValidation(terms, signup);
        nextErrors.terms.error = !!termsField;

        nextErrors.terms.message = termsField;

        if(!!termsField) isValid = false;
    }

    setErrors(nextErrors);

    return{
        isValid,
        errors: nextErrors,
    }

};

const onBlurField = e => {
    const field = e.target.name;
    const fieldError = errors[field];
    if(fieldError.dirty) return;

    const updatedErrors = {
        ...errors,
        [field]: {
            ...errors[field],
            dirty: true,
        }
    };

    validationtrainers({signup, field, errors: updatedErrors})
}


return {
    validationtrainers,
    onBlurField,
    errors,
    };
}