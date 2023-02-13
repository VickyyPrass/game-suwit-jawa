// untuk menentukan pilihan computer dengan funtion Math.random
function getPilihanComputer() {
    const computer = Math.random();
    if (computer < 0.34) return 'gajah';
    if (computer >= 0.34 && computer < 0.67) return 'orang';
    return 'semut';
}

// untuk menentukan hasil pilihan computer dan player
function getHasil(comp, player) {
    if (player == comp) return 'SERI';
    if (player == 'gajah') return (comp == 'orang') ? 'MENANG' : 'KALAH'; //player menang
    if (player == 'orang') return (comp == 'gajah') ? 'KALAH' : 'MENANG'; //player kalah
    if (player == 'semut') return (comp == 'orang') ? 'KALAH' : 'MENANG'; //player kalah
}

// untuk putar gambar computer
function animasiComputer() {
    const imgComputer = document.querySelector('.computer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    // menentukan dan mengambil waktu saat itu juga
    const waktuMulai = new Date().getTime();

    setInterval(function() {
        // seleksi waktu mulai dan membersihkan interval
        if (new Date().getTime() - waktuMulai > 800) {
            clearInterval;
            return;
        }

        // mengganti gambar computer sesuai pilihannya
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if (i == gambar.length) i = 0;
    }, 100)
}

// seleksi tempat skor dan menentukan nilai awal skor
// disimpan diluar karena bukan menentukan gambar dan bukan function dari array
const infoComp = document.querySelector('.info-comp h2');
const infoPlayer = document.querySelector('.info-player h2');
let sc = 0;
let sp = 0;


// seleksi gambar pilihan player
const seleksiGambar = document.querySelectorAll('li img');
seleksiGambar.forEach(function(i) {
    i.addEventListener('click', function() {
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = i.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);

        // animasi putar gambar computer
        animasiComputer();

        // mengganti gambar computer
        setTimeout(function() {
            const imgComputer = document.querySelector('.computer');
            imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

            // menampilkan hasil
            const info = document.querySelector('.info-hasil');
            info.innerHTML = hasil;

            // menentukan skor computer dan player
            if (hasil == 'MENANG') {
                sp += 1
                infoPlayer.innerHTML = sp
            } else if (hasil == 'KALAH') {
                sc += 1
                infoComp.innerHTML = sc
            } else {
                return;
            }
        }, 1000)
    });
});