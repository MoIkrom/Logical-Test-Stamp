/* Soal 
1. Program kecil bernama "ApaBole"   
 Tolong print angka dari 1 sampai 100. Tetapi, Ada peraturan khusus:
 1. Untuk setiap angka yang bisa dibagi dengan 3, jangan print angka nya, tapi print "Apa".
 2. Kalau bisa dibagi dengan 5, print "Bole",
 3. Kalau bisa dibagi oleh 3 dan 5, print "ApaBole".
 Berikut contoh hasil program "ApaBole" untuk angka 1 sampai 30 (* Yang kita harapkan dari kandidat adalah, 1 - 100):
*/

//  ========================================================

//  Jawaban ...

const ApaBole = (num) => {
  // Disini Saya menggunakan For loop untuk me-looping angka
  for (i = 1; i <= num; i++) {
    // Ini Adalah kondisi yang diminta oleh soal , saya menggunakan ternary operator
    i % 15 === 0 ? console.log("ApaBole") : i % 3 === 0 ? console.log("Apa") : i % 5 === 0 ? console.log("Bole") : console.log(i);
  }
};

// Ini Pemanggilan fungsi yang telah di buat
ApaBole(100);
