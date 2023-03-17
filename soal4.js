isValidPassword = (givenPassword) => {
    let regx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,20}$/;

    if(givenPassword.match(regx)){
        return true
    }else{
        return false
    }
}

console.log(isValidPassword('Meong2021')) // True, terdiri dari dari setidaknya 8 karakter, ada huruf kapital, kecil dan ada angka
console.log(isValidPassword('meong2021')) // False, tidak ada huruf kapital
console.log(isValidPassword('@eong')) // False, tidak ada angka dan terdiri hanya 5 karakter
console.log(isValidPassword('Meong2')) // False, karena walaupun ada huruf kapitak, kecil dan angka, tetapi jumlahnya hanya 6 karakter
console.log(isValidPassword(0)) // Error karena berupa integer, bukan string
console.log(isValidPassword()) // Error karena harus ada yang diinputkan di parameter