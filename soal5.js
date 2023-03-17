getSplitName = (givenName) => {
  /* 
        trim() untuk menghapus atau menghilangkan spasi di kedua sisi string tanpa mengganggu atau mepengaruhi isi dari string tersebut
        split() untuk membagi string menjadi array substring dan mengembalikan array baru tanpa mengubah string asli
        /\s+/ regex untuk spasi
    */
  num = givenName.trim().split(/\s+/).length;
  if (num > 3) {
    console.log("Error : this function is only 3 characters name");
  } else {
    let name = givenName.split(" ");

    const people = [
      {
        firstname: name[0],
        middlename: name[1],
        lastname: name[2],
      },
    ];
    return people[0];
  }
};

console.log(getSplitName("Aldi Daniela Pranata"));
console.log(getSplitName(0));
