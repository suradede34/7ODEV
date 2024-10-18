//GIRILEN SAYILARIN TOPLAMINI BULMA


let sayiEkleme = prompt('Kac adet sayi girmek istiyorsun ?');
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