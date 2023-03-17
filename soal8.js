const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
    getProfit: function () {
      return this.hargaJual * this.totalTerjual;
    },
    getModal: function () {
      return this.hargaBeli * (this.sisaStok + this.totalTerjual);
    },
    getTotal: function () {
      return this.totalTerjual;
    },
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
    getProfit: function () {
      return this.hargaJual * this.totalTerjual;
    },
    getModal: function () {
      return this.hargaBeli * (this.sisaStok + this.totalTerjual);
    },
    getTotal: function () {
      return this.totalTerjual;
    },
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
    getProfit: function () {
      return this.hargaJual * this.totalTerjual;
    },
    getModal: function () {
      return this.hargaBeli * (this.sisaStok + this.totalTerjual);
    },
    getTotal: function () {
      return this.totalTerjual;
    },
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
    getProfit: function () {
      return this.hargaJual * this.totalTerjual;
    },
    getModal: function () {
      return this.hargaBeli * (this.sisaStok + this.totalTerjual);
    },
    getTotal: function () {
      return this.totalTerjual;
    },
  },
];

/* 
Total Keuntungan = harga jual * total terjual (tiap buku)
Total Modal = hargaBeli * sisaStok + totalTerjual
persentaseKeuntungan = 
produkBukuTerlaris = totalTerjual terbanyak (ditampilkan namaProduct)
penulisTerlaris = totalTerjual terbanyak (ditampilkan namaPenulis)
*/

function getInfoDataPenjualan(dataPenjualanNovel) {
  let sumProfit = 0;
  let totalModal = 0;
  let totalKeuntungan = 0;
  // let arrayTotal = [];

  dataPenjualanNovel?.map((list_toModal) => {
    totalModal += list_toModal.getModal();
    return totalModal;
  });

  dataPenjualanNovel?.map((list_toProfit) => {
    sumProfit += list_toProfit.getProfit();
    totalKeuntungan = sumProfit - totalModal;
    return totalKeuntungan;
  });

  const persentase = (totalKeuntungan / totalModal) * 100;

  // dataPenjualanNovel?.map((list_toBestSeller) => {
  //   arrayTotal.push(list_toBestSeller.getTotal());
  // });

  // let max = -Infinity;
  // for (let number of arrayTotal) {
  //   if (number > max) {
  //     max = number;
  //   }
  // }

  let maxTerjual = 0;
  let produkBukuTerlaris = null;
  let penulisTerlaris = null;

  dataPenjualanNovel.forEach((produk) => {
    if (produk.totalTerjual > maxTerjual) {
      maxTerjual = produk.totalTerjual;
      produkBukuTerlaris = produk.namaProduk;
      penulisTerlaris = produk.penulis;
      return produkBukuTerlaris, penulisTerlaris;
    }
  });

  const objInfoPenjualan = {};
  objInfoPenjualan.totalKeuntungan = totalKeuntungan;
  objInfoPenjualan.totalModal = totalModal;
  objInfoPenjualan.persentase = Math.trunc(persentase) + "%";
  objInfoPenjualan.produkBukuTerlaris = produkBukuTerlaris;
  objInfoPenjualan.penulisTerlaris = penulisTerlaris;

  return objInfoPenjualan;

  // console.log(`Best Seller : ` + max + ` terjual`);
}

console.log(getInfoDataPenjualan(dataPenjualanNovel));
