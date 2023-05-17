// landing notif
// alert("selamat datang");

// prompt isian
// prompt("anda dari mana? jgn isi asal2, anda bisa saya lacak!!!");

// notif asal + jawaban
// var asal = prompt("sebutkan asal anda");
// alert("ternyata anda orang " + asal);

// contoh data
// let nama = "rahmat dermawan"; // tipe string
// let usia = 30; // tipe integer number
// let tinggiBadan = 165.5; // tipe double float
// let beratBadan; //data kosong
// let pacar = 2;

// beratBadan = 61;

// if (pacar == null) {
//   pacar = "belum punya";
// } else {
//   pacar = "udah punya";
// }

// switch (pacar) {
//   case 1:
//     pacar = "punya 1 aja";
//     break;
//   case 2:
//     pacar = "punya pacar 2, aku lumayan playboy";
//     break;
//   default:
//     pacar = "blm punya pacar bree";
//     break;
// }

// let saldoAwal = 10000;
// let saldoTambahan = 20000;
// const saldoAkhir = saldoAwal + saldoTambahan;

// alert(
//   `nama saya ${nama} usia saya ${usia}thn tinggi badan saya ${tinggiBadan}cm berat badan saya ${beratBadan}kg dan pacar saya ${pacar}`
// );

// alert(
//   `saldo awal anda ${saldoAwal} & saldo tambahan saya ${saldoTambahan}, jadi saldo akhir saya sebanyak ${saldoAkhir}`
// );

// toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger-menu di klik

document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// klik diluar sidebar untuk menghilangkan nav

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
