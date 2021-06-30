export default function validateInfo(values) {
    let errors = {}

    //Email
    if(!values.email) {
        errors.email = "Email required"
    } else if (!/^[A-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(values.email)) {
        errors.email = "Email address is invalid"
    }

    //phone
    if(!values.phone) {
        errors.phone = "Phone number required"
    } else if(!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i.test(values.phone)) {
        errors.phone = "Invalide phone number format"
    }

    //name
    if(!values.name.trim()) {
        errors.name = "Full name is required"
    }


    return errors;
}