var sayi1 = prompt("Lütfen 1. sayiyi giriniz.");
var sayi2 = prompt("Lütfen 2. sayiyi giriniz.");
document.getElementById('output1').innerHTML = "En Küçük: " +Math.min(sayi1,sayi2);
document.getElementById('output2').innerHTML = "En Büyük: " +Math.max(sayi1,sayi2);
document.getElementById('output3').innerHTML = "En Büyüğünün Karekökü: " +Math.sqrt(Math.max(sayi1,sayi2));
document.getElementById('output4').innerHTML = "En Büyüğünün Karekökünün Üste Yuvarlama: " +Math.ceil(Math.sqrt(Math.max(sayi1,sayi2)));
document.getElementById('output5').innerHTML = "En Küçüğünün Mutlak Değeri: " +Math.abs(Math.min(sayi1,sayi2));
document.getElementById('output6').innerHTML = "En Küçüğünün Alt Tabanı ve En Büyüğünün Üst Tabanı: " +Math.pow(Math.min(sayi1,sayi2),Math.max(sayi1,sayi2));
