//SAYI TAHMIN OYUNU


let tahminiSayi = Math.floor(Math.random() * 20) + 1; 
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
}