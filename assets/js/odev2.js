//ALISVERIS LISTESI


let urunSayisi = prompt('Kac adet urun eklemek istiyorsunuz ?');
let urunler = [];

for(let i = 0; i < urunSayisi; i++) {
    let urun = prompt('Urun ismini girin');
    urunler.push(urun);
}

console.log(`Girilen urunler: ${urunler}`);
console.log(`Urunlerin sayisi: ${urunler.length}`);