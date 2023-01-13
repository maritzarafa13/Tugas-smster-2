// ---------- Function Tes Kelulusan ----------


lulus(90);
function lulus(nilai) {

    let kkmc = 70;
    let kkmb = 80;
    let kkma = 90;
    let hasil = "Nilai Tidak Valid !";
    if (nilai > 0 && nilai <= 100 ) {
        if (nilai > kkmc) {
            hasil = "Lulus Predikat Nilai C";
        }
        if (nilai > kkmb) {
            hasil = "Lulus Predikat Nilai B";
        }
        if (nilai > kkma) {
            hasil = "Lulus Predikat Nilai A";
        }
        if (nilai <= kkmc) {
            hasil = "Tidak Lulus !";
        }
    }
    console.log(hasil);
}


// ---------- Function Terbilang ----------

console.log(terbilang(100));
function terbilang(angka) {
    let bilangan=[
        " ", "Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan", "Sembilan", "Sepuluh", "Sebelas"
    ];

		if(angka < 12){

			return bilangan[angka];

		}else if(angka < 20){

			return terbilang(angka-10)+" belas";

		}else if(angka < 100){

			return terbilang(Math.floor(parseInt(angka)/10))+" puluh "+terbilang(parseInt(angka)%10);

		}else if(angka < 200){

			return "seratus "+terbilang(parseInt(angka)-100);

		}else if(angka < 1000){

			return terbilang(Math.floor(parseInt(angka)/100))+" ratus "+terbilang(parseInt(angka)%100);

		}else if(angka < 2000){

			return "seribu "+terbilang(parseInt(angka)-1000);

		}else if(angka < 1000000){

			return terbilang(Math.floor(parseInt(angka)/1000))+" ribu "+terbilang(parseInt(angka)%1000);

		}else if(angka < 1000000000){

			return terbilang(Math.floor(parseInt(angka)/1000000))+" juta "+terbilang(parseInt(angka)%1000000);

		}else if(angka < 1000000000000){

			return terbilang(Math.floor(parseInt(angka)/1000000000))+" milyard "+terbilang(parseInt(angka)%1000000000);

		}else if(angka < 1000000000000000){

			return terbilang(Math.floor(parseInt(angka)/1000000000000))+" triliun "+terbilang(parseInt(angka)%1000000000000);

		}
}


// ---------- Function Tes Apakah Bilangan Termasuk Prima ----------

prima(2345)
function prima(bilangan) {
    let prima = true
    let hasil = "";
    if (bilangan < 2) {
        hasil = "Tidak Valid (Bil Prima dimulai dari angka 2)";
    } else if (bilangan > 1) {
        for (let i = 2; i < bilangan; i++) {
            if (bilangan % i === 0) {
                prima = false;
            }
        }
        if (prima) {
            hasil = bilangan + " Merupakan bilangan Prima";
        }else{
            hasil = bilangan + " Bukan bilangan Prima";
        }
    }
    console.log(hasil);
}