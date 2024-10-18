//LISTEYE EKLEME VE BULMA



let isimEkle = prompt('Kac adet isim eklemek istiyorsunuz ?');
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
kullaniciAra();
