const kalimat1 = 'Andini sangat mencintai kamu selamanya'
const kalimat2 = 'Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu'

function changeWord (selectedText, changedText, text){
    /* 
        Menggunakan bantuan replace() untuk mengganti sebuah kata / kalimat
        - text.replace untuk memilih parameter (text) 
        - terdapat 2 parameter untuk text yang dipilih (selectedText) dan text penggantinya (changedText)
    */
    console.log(text.replace(selectedText,changedText))
}

// inputkan 3 parameter 
changeWord(`mencintai`,`membenci`,kalimat1)
changeWord(`bromo`,`semeru`,kalimat2)