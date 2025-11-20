function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5bu2x7q3DLu":
        Script1();
        break;
      case "6kkm9A2YdwI":
        Script2();
        break;
      case "5jLRQU3460y":
        Script3();
        break;
  }
}

function Script1()
{
  // Buat elemen audio baru
var audio = new Audio('story_content/carnival_happy.mp3');
audio.loop = true; // agar berulang terus
audio.volume = 0.5; // volume sedang

// Coba play (bisa gagal kalau autoplay diblokir browser)
audio.play().catch(function(error) {
    console.log("Autoplay dicegah oleh browser:", error);
});

// Simpan ke window agar bisa dikontrol di slide lain
window.bgmAudio = audio;

// ---- OPSIONAL: fade-in efek ----
var v = 0;
audio.volume = 0;
var fade = setInterval(function() {
    if (v < 0.5) {
        v += 0.05;
        audio.volume = v;
    } else {
        clearInterval(fade);
    }
}, 300);

}

function Script2()
{
  // Buat elemen audio baru
var audio = new Audio('story_content/carnival_happy.mp3');
audio.loop = true; 
audio.volume = 0.5; 
audio.play();

// Simpan di window agar bisa dihentikan di trigger lain
window.bgmAudio = audio;

}

function Script3()
{
  var player = GetPlayer();
var nama = player.GetVar("Nama");
var skor = player.GetVar("skorakhir");

var data = {
  "Nama": Nama,
  "skor": skor
};

fetch("https://script.google.com/macros/s/AKfycbxpdVYLkAscejJRnt3JJib9X3hcKeeM1Haj3fVtBXOvY9IVlt8_Nbpwztz4ZitT9Jwt1Q/exec", {
  method: "POST",
  mode: "no-cors",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
});

}

