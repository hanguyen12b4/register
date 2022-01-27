
function validate (values) {

    let errors = {}; 
    if(!values.username.trim()){
        errors.username = "Username required" ;
    }

    if(!values.email.trim()){
        errors.email = "Email required" ;
    }else if(!/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
        errors.email = "Email invalid" ;
    }

    if(!values.password){
        errors.password = "Password required" ;
    }else if(values.password.length < 6) {
        errors.password = "Password need tobe 6 character or more";
    }

    if(!values.rePassword){
        errors.rePassword = "rePassword required" ;
    }else if(values.rePassword.length < 6) {
        errors.rePassword = "Password need tobe 6 character or more";
    }
    else if(values.rePassword  !== values.password) {
        errors.rePassword = "Password not match";
    }

    return errors;
}

export default validate;