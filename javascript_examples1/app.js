console.log("Dunya");

// alert(3 + 5);

// var,let,const
let sayi1 = 5;
const sayi2 = 15;

sayi1 = 20;
// sayi2 = 25;
// alert(sayi1 + sayi2);

let sayilar = [1, 5, 15, 20, 36];
let sayilar2 = new Array();
console.log(sayilar);
console.log(sayilar2);

for (let i = 0; i < sayilar.length; i++) {
  console.log(sayilar[i]);
}
console.log("///////////////");
for (const index in sayilar) {
  console.log(sayilar[index]);
}
console.log("///////////////");
for (const sayi of sayilar) {
  console.log(sayi);
}
console.log("///////////////");
sayilar.forEach((element) => {
  console.log(element);
});
console.log("Arraylere veri ekleme çıkarma");

// Array Sonuna Veri Ekleme
sayilar2.push(49); // Eklenen Değer Diziye Eklendi Ve
sayilar2.push(52);
sayilar2.push(82);

// Array'in Başına Veri Ekleme
sayilar2.unshift(-7); // Eklenen Değeri Listenin İlk Eleman
sayilar2.unshift(27);

// Array'in Sonundan Veri Silme
sayilar2.pop(); //sonuncu Öğeyi Siler

// Array'in Başından Veri Silme
sayilar2.shift(); //ilk Öğeyi Siler

sayilar2.unshift("2");
console.log(sayilar2);
for (const sayi of sayilar2) {
  console.log(Number(sayi) + 5);
}