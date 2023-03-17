const importFunc = require("./soal2")

function checkEmail(email){
    // a-z A-Z 0-9 artinya mencangkup alphabet dari a sampai z baik huruf kecil maupun huruf kapital
    // {2,8} artinya domain .com .co.id .net minimal berjumlah 2 digit s/d 8 digit
    let regx = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})$/;

    if(regx.test(email)){
        console.log("VALID")
    }else{
        console.log("INVALID")
    }
}

checkEmail('apranata@binar.co.id') // VALID
checkEmail('apranata@binar.com') // VALID
checkEmail('apranata@binar') // INVALID , karena tidak ada domain
checkEmail('apranata') // INVALID , karena tidak ada @ beserta domain
importFunc.checkTypeNumber(checkEmail(3322)) // checkEmail(3322) = INVALID , checkTypeNumber("INVALID") = karena string tanpa @ dan domain maka menghasilkan invalid/error
// checkEmail(()) Error karena harus ada yang diinputkan