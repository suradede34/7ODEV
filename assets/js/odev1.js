
//MEYVE SAYACI


let meyveSayisi = prompt('Kac adet meyve girmek istiyorsunuz ?');
let meyveler = [];

for(let i = 0; i < meyveSayisi; i++) {
    let meyve = prompt('Meyve ismini girin');
    meyveler.push(meyve);
}

console.log(`Girilen meyveler: ${meyveler}`);










//ALISVERIS LISTESI


/*let urunSayisi = prompt('Kac adet urun eklemek istiyorsunuz ?');
let urunler = [];

for(let i = 0; i < urunSayisi; i++) {
    let urun = prompt('Urun ismini girin');
    urunler.push(urun);
}

console.log(`Girilen urunler: ${urunler}`);
console.log(`Urunlerin sayisi: ${urunler.length}`);










//SAYI TAHMIN OYUNU


/*let tahminiSayi = Math.floor(Math.random() * 20) + 1; 
console.log(tahminiSayi); 

let cevapHakki = 5;

for (let i = 0; i < cevapHakki; i++) {
    let tahminEdilen = Number(prompt('Tahmin edilen sayiyi yazin'));
    cevapHakki--;
    if (tahminEdilen === tahminiSayi) { 
        console.log('Tebrikler');
        break; 
    } else if (tahminEdilen > tahminiSayi) {
        console.log('Daha kucuk bir sayi deneyin.');
    } else {
        console.log('Daha buyuk bir sayi deneyin.');
    }
}*/








//SIRALAMA & SAYDIRMA


/*let sayilar = Number(prompt('10 tane sayi giriniz'));

let tekSayilar = [];
let ciftSayilar = [];

for(let i = 0; i < 10; i++) {
    let sayi = Number(prompt('Sayiyi yaziniz'));

if (sayi % 2 === 0) {
    ciftSayilar.push(sayi);
} else {
    tekSayilar.push(sayi);
}
}

console.log('Tek sayilar:', tekSayilar);
console.log('Çift sayilar:', ciftSayilar);*/









//LISTEYE EKLEME VE BULMA



/*let isimEkle = prompt('Kac adet isim eklemek istiyorsunuz ?');
let isimler = [];

function kullaniciyaIsimEkletme() {
  for(let i = 0; i < isimEkle; i++) {
    const isim = prompt("İsim giriniz");
    isimler.push(isim);

    console.log(`Girilen isimler: ${isimler[i]}`);
  }
}

function kullaniciAra() {
    let arananIsim = prompt('Hangi ismi ariyorsunuz ?').toLowerCase();
  
    for(let i = 0; i < isimler.length; i++) {
      if(isimler[i].toLowerCase() === arananIsim) {
        console.log(`${isimler[i]}: ismi listenizde bulundu`);
        return
      }
    }
    console.log('Aradığınz kişi listede bulunamadı.');
  }

kullaniciyaIsimEkletme();
kullaniciAra();*/







//GIRILEN SAYILARIN TOPLAMINI BULMA


/*let sayiEkleme = prompt('Kac adet sayi girmek istiyorsun ?');
let girilenSayilar = [];
let tekSayilar = [];
let ciftSayilar = [];
let toplamCift = 0; 
let toplamTek = 0;

function kullanicidanSayilariAlma() {
    for(let i = 0; i < sayiEkleme; i++) {
      const sayi = Number(prompt('Eklemek istediginiz sayiyi giriniz'));
      girilenSayilar.push(sayi);

      if (sayi % 2 === 0) {
        ciftSayilar.push(sayi);
        toplamCift += sayi; 
    } else {
        tekSayilar.push(sayi);
        toplamTek += sayi 
    }

    console.log(`Girilen sayilar: ${girilenSayilar[i]}`);
  }
    console.log("Çift Sayılar:", ciftSayilar);
    console.log("Tek Sayılar:", tekSayilar)
    
    console.log("Çift sayıların toplamı:", toplamCift);
    console.log("Tek sayıların toplamı:", toplamTek);
}

kullanicidanSayilariAlma();








//ISIMLERI ALFABETIK SIRALAMA


/*let isimSayisi = prompt('Kac adet isim gireceksiniz ?');
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
console.log(isimler);*/