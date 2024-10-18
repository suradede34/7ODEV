//SIRALAMA & SAYDIRMA


let sayilar = Number(prompt('10 tane sayi giriniz'));

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
console.log('Çift sayilar:', ciftSayilar);