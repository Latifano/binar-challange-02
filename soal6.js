const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];
/* Ada 4 langkah
    1. Diurutkan dulu
    2. Nilai yang sama dihilangkan
    3. Index terakhir dikurangin 2
    4. return nilainya
*/

function getAngkaTerbesarKedua(personNum) {
  // Diurutkan
  const resultSort = personNum.sort();
  console.log(`Array Diurutkan : ${resultSort} `);

  // Dihapus nilai yang sama
  const resultClearUnique = [...new Set(resultSort)];
  console.log(`Clear elemen array yang sama : ${resultClearUnique}`);

  // Index terakhir dikurangi 2
  const resultMinus1 = resultClearUnique.length - 2;

  // Get hasilnya
  const getResultFinal = resultClearUnique[resultMinus1];

  return getResultFinal;
}

console.log(getAngkaTerbesarKedua(dataAngka));
//console.log(getAngkaTerbesarKedua(0)); // error karena yang diinputkan harus berupa array karena disini menggunakan .sort() untuk mengurutkan sebuah array
//console.log(getAngkaTerbesarKedua()); // error karena yang diinputkan null / hampa, tidak ada apapun
