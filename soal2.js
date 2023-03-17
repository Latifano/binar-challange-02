checkTypeNumber = (givenNumber) => {
  givenNumber = parseInt(givenNumber);
  if (givenNumber % 2 === 0) {
    return `Bilangan ` + givenNumber + ` adalah GENAP`;
  } else if (givenNumber % 2 === 1) {
    return `Bilangan ` + givenNumber + ` adalah GANJIL`;
  } else {
    return `Error : Invalid data type`;
  }
};

/* String "" masih membaca sbg integer
 */

// console.log di comment karena ketika soal2.js di export ke soal3.js dengan adanya fungsi yang sedang dipanggil, maka checkTypeNumber di file soal3.js jadi error. Oleh karena itu 6 baris dibawah untuk merunning checkTypeNumber() di comment dulu

// console.log(checkTypeNumber(10));
// console.log(checkTypeNumber(3));
// console.log(checkTypeNumber("3")); // harusnya output = Error : Invalid data type
// console.log(checkTypeNumber({}));
// console.log(checkTypeNumber([]));
// console.log(checkTypeNumber());

exports.checkTypeNumber = this.checkTypeNumber;
