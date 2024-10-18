//ISIMLERI ALFABETIK SIRALAMA


let isimSayisi = prompt('Kac adet isim gireceksiniz ?');
let isimler = [];

for (let i = 0; i < isimSayisi; i++) {
  let isim = prompt('Gireceginiz ismi yazin');
  isimler.push(isim); 
}
console.log('Girdiginiz isimler');


for (let isim of isimler) {
    console.log(isim);
}

isimler.sort();
console.log(isimler);