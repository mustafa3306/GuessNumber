console.log('OYUN');

let devam;
do {
  let hak = 5;
  const rasgeleSayi = Math.floor(Math.random() * 100 + 1);
  console.log(rasgeleSayi);

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

  devam = prompt('Yeniden oynamak ister misiniz e/h?');
} while (devam == 'e' || devam == 'E');

console.log('Yine bekleriz');
