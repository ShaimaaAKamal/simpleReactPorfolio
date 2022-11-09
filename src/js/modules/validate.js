export  class Validation{
    validateMail(mail){
        const regex=/^[a-zA-z][a-zA-Z0-9._]{2,}@(gmail|hotmail|yahoo)\.[a-z]{2,3}$/;
        return regex.test(mail);
    }

    validatePhone(phone){
        const regex=/^(\+2)?01(0|1|2|5)[0-9]{8}$/
        return regex.test(phone);
    }
}