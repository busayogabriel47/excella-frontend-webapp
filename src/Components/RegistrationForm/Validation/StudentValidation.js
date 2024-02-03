import Reg from "../reg";

export const firstnameValidation = (firstname) => {
    if(!firstname){
        return 'First name is required'
    }else if(firstname.length <= 2){
        return 'Firstname must cannot be two letters';
    }

    return '';
}

export const lastnameValidation = (lastname) => {
    if(!lastname){
        return 'lastname is required';
    }else if(lastname.length <= 2) {
        return 'lastname cannot be two letters';
    }

    return '';
}

export const emailValidation = (email) => {
    if(!email) {
        return 'Email is required';
    }else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
        return 'Invalid email format'
    }

    return ''
}

export const phoneValidation = (phone) => {
    if(!phone){
        return 'Phone number is required';
    } else if(!new RegExp(/^[0-9]\d{10}$/).test(phone)){
        return 'Please enter a valid phone number';
    }

    return ''

}

export const courseValidation = (course) => {
    if(!course){
        return "Please select your course"
    }

    return ""
}

export const contactmeansValidation = (contactmeans) => {
    if(!contactmeans){
        return "Please select how you wish to be contacted"
    }

    return ""
}

export const educationValidation = (education) => {
    if(!education){
        return "Please select your educational qualification"
    }

    return ""
}

export const genderValidation = (gender) => {
    if(!gender){
        return "Please select your gender"
    }

    return ""
}

export const termsValidation = (terms) => {
    if(!terms){
        return "You must agree to our terms"
    }

    return ""
}