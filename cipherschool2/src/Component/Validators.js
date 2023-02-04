const EMAIL_REG_EX=
/\A[^@\s]+@([^@\s]+\.)+[^@\W]+\z/
const NUMERAL_REGEX=/^\d+$/;

export const isEmail=(email)=>{
    if(typeof email !== "string"){
    return false
}
return EMAIL_REG_EX.test(email);
}

export const isEmptyObjet=(obj)=>{
    if(typeof obj !=="object"){
        return true
    }
    return Object.keys(obj).length===0
}


export const isValidEmail =(user)=>{
    return (
    isEmail(user.email) && user.password && user.firstname && user.lastName
    )

}