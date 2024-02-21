function getPilihanComp() {
  const comp = Math.random();
  if (comp <= 0.35) return "batu";
  if (comp >= 0.36 && comp <= 0.67) return "gunting";
  return "kertas";
}

function getHasil(comp, player) {
  if (player == comp) return "SERI dong yang bener aje😒";
  if (player == "batu") return comp == "kertas" ? "kalah🥲" : "menang👍";
  if (player == "kertas") return comp == "gunting" ? "kalah🥲" : "menang👍";
  if (player == "gunting") return comp == "kertas" ? "menang👍" : "kalah🥲";
  return "pilihan tidak valid";
}
// ini adalah block program addEventListener untuk menjalankan fungsi dari apa yang kita klik pada gambar gunting / batu / kertas/

// batu function
// const pBatu = document.querySelector(".batu");
// pBatu.addEventListener("click", function () {
//   const pilihanPlayer = pBatu.className;
//   const pilihanComp = getPilihanComp();
//   const hasil = getHasil(pilihanComp, pilihanPlayer);

//mengubah photo / img dari pilihan computer
//   const imgComp = document.querySelector(".img-comp");
//   imgComp.setAttribute("src", `./asset/${pilihanComp}.png`);

//   const penentuan = document.querySelector(".penentuan");
//   penentuan.innerText = "anda " + hasil;
// });

// kertas functon
// const pKertas = document.querySelector(".kertas");
// pKertas.addEventListener("click", function () {
//   const pilihanPlayer = pKertas.className;
//   const pilihanComp = getPilihanComp();
//   const hasil = getHasil(pilihanComp, pilihanPlayer);

//mengubah photo / img dari pilihan computer
//   const imgComp = document.querySelector(".img-comp");
//   imgComp.setAttribute("src", `./asset/${pilihanComp}.png`);

//   const penentuan = document.querySelector(".penentuan");
//   penentuan.innerText = "anda " + hasil;
// });

// gunting function
// const pGunting = document.querySelector(".gunting");
// pGunting.addEventListener("click", function () {
//   const pilihanPlayer = pGunting.className;
//   const pilihanComp = getPilihanComp();
//   const hasil = getHasil(pilihanComp, pilihanPlayer);

//mengubah photo / img dari pilihan computer
//   const imgComp = document.querySelector(".img-comp");
//   imgComp.setAttribute("src", `./asset/${pilihanComp}.png`);

//   const penentuan = document.querySelector(".penentuan");
//   penentuan.innerText = "anda " + hasil;
// });

// untuk meng-animasikan gambar mengacak untuk lebih terasa interaktif

function putar() {
  const imgComp = document.querySelector(".img-comp");
  let gambar = ["batu", "gunting", "kertas"];
  let i = 0;
  const waktuMulai = new Date().getTime()
  setInterval(function () {
    if(new Date().getTime() - waktuMulai > 1200){
      clearInterval;
      return
    }
    imgComp.setAttribute('src', `./asset/${gambar[i++]}.png`);
    if(i == gambar.length) i = 0;
  }, 100);
 
}

const pilihan = document.querySelectorAll(".section-2 img"); // variable untuk menangkap semua gambar

pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilihanPlayer = pil.className;
    const pilihanComp = getPilihanComp();
    const hasil = getHasil(pilihanComp, pilihanPlayer);
    
    putar();

    setTimeout(function(){
      // mengubah photo / img dari pilihan computer
      const imgComp = document.querySelector(".img-comp");
      imgComp.setAttribute("src", `./asset/${pilihanComp}.png`);

      const penentuan = document.querySelector(".penentuan");
      penentuan.innerText = "anda " + hasil;
    },1200)
      
   
  });
});
