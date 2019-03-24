var but1 = document.querySelector('.in');
var but2 = document.querySelector('.fgt');
var but3 = document.querySelector('.regs');


but1.onclick = function() {
    //promt = from tanya// var nem = prompt('nama?');    
    alert('Coming soon..'); //alert = notif
};

but2.onclick = function() {

    alert('Coming soon..'); //alert = notif
};

but3.onclick = function() {

    alert('Coming soon..'); //alert = notif
};


function klik() {
    document.getElementById("listthn").classList.toggle("tampil");
}

window.onclick = function(jln) {
    if (!jln.target.matches('.thn')) {
        var turun = document.getElementsByClassName('isithn');
        var i;
        for (i = 0; i < turun.length; i++) {
            var buka = turun[i];
            if (buka.classList.contains('tampil')) {
                buka.classList.remove('tampil');
            }
        }
    }
};

/*tanggal sekarang*/
function jm() {
    var jam = "";
    var nmHari = new Array("Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu");
    var nmBulan = new Array("Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember");

    var skr = new Date();

    jam += skr.getHours() + ":" +
        skr.getMinutes() + ":" +
        skr.getSeconds() + " " +
        nmHari[skr.getDay()] + ", " +
        skr.getDate() + " " +
        nmBulan[skr.getMonth()] + " " +
        skr.getFullYear();
    document.getElementById('tglskrng').innerHTML = jam;
}
setInterval(jm, 1000);


var pilThn = document.querySelector('.tahun');
var t19 = document.querySelector('.t19');
var t20 = document.querySelector('.t20');
var t21 = document.querySelector('.t21');


function tampil() {
    var a = pilThn.value;
    if (a === "2019") {
        t19.style.display = "block";
        t20.style.display = "none";
        t21.style.display = "none";

    } else if (a === "2020") {
        t19.style.display = "none";
        t20.style.display = "block";
        t21.style.display = "none";
    } else if (a === "2021") {
        t19.style.display = "none";
        t20.style.display = "none";
        t21.style.display = "block";
    } else {
        t19.style.display = "none";
        t20.style.display = "none";
        t21.style.display = "none";
    }
}