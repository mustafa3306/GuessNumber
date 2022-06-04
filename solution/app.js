let hak = 5;
const rasgeleSayi = Math.floor(Math.random() * 100 + 1);
console.log(rasgeleSayi);15

do {
    const tahmin = Number(prompt('Lütfen 0-100 arasında bir sayi giriniz:'));
    hak -= 1;
    if (tahmin === rasgeleSayi) {
      console.log(`Tebrikler ${5 - hak}. denemede bildiniz.🥳`);
      break;
    } else {
      console.log(`Dikkat ${hak} hakkınız kaldı`);
      if (tahmin < rasgeleSayi) {
        console.log('ARTTIR ⬆️');
      } else {
        console.log('AZALT ⬇️');
      }
    }
  } while (hak > 0);

  if (hak === 0) {
    console.log('Üzgünüz oyunu kaybettiniz 😔');
  }

