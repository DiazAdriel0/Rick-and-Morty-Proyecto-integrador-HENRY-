export default function validate(userData){

    const emailRegex = /\S+@\S+\.\S+/
    const passwordRegex = /\d/;
    const passwordLengthRegex = /^.{6,10}$/;
    let errors = {}

    if(userData.email === ""){
        errors.email = "Introduzca un nombre de usuario"
    }else if(!emailRegex.test(userData.email)){
        errors.email = "Debe introducir un email válido"
    }else if(userData.email.length > 35){
        errors.email = "No puede tener mas de 35 caracteres"
    }

    if(!passwordLengthRegex.test(userData.password)){
        errors.password = "Debe tener entre 6 y 10 caracteres"
    }else if(!passwordRegex.test(userData.password)){
        errors.password = "Debe contener al menos un número"
    }
    return errors
}