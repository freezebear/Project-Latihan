/*
var a1 = ' Hellow World~' ;
var a2 = ' Hai Dunia~';

console.log(a1 + a2);
*/

/*
A ='mai nem';

function logName(){
    console.log(A);
}

logName();

var A;
*/

/* varrriable
var a
var b {possible}

let a
let b {nope, just b}

const a = 1 {same as let but can't give a new value}
const a = 2 {error}
*/

/* arrray
let A = ['satu', 'dua', '3'];
a[1]; {yg muncul 'satu'}
*/

/*objeects 
let dogo = {nama : 'doogoo' , asal : 'nepnep'};
dogo.nama; {yg muncul doogoo}
*/

/* oprasi math
+ - / *
=== {sama persis} !== {gk sama} < > <= >=
10 % 3 = 1 {hasilnya dari 3 ke 10 = 3x tersisa 1}
5 ** 2 = 25 {pangkat, sama dengan Math.pow(5, 2) }

a++ /a-- {tambah 1}

x = 3;
x = x + 10;  {bisa juga menjadi x += 10} {berlaku untuk operasi yg lainnya juga}
*/

/*
var myString = '123';
var myNum = Number(myString);  {string ke int}
typeof myNum;

var myNum = 123;
var myString = myNum.toString(); {int ke string}
typeof myString;
*/

/*
var tipe = 'freezebear';
tipe.length;  {berapa banyak huruf yg ada}
tipe[0] {huruf apa yg ada di [n] (starts from zero not one)}
tipe[tipe.length-1] {huruf terakhir}
tipe.indexOf('bea'); {berada di mana 'bea' di tipe}
tipe.indexOf('bea') !== -1 {ada atau tidak}
tipe.slice(0,6) {motong dari 0 ke 6}
tipe.slice(6) {motong mulai dari 6}
tipe.toUpperCase()/tipe.toLowerCase()
tipe.replace('freeze','beku') {browserType = browerType.replace('freeze','beku');}

*/


/*
var a1 = ['satu', 'dua', 3, 3, 5, [1, 'dua']];
a1 [n]
a1 [5][1] {array dalam array}

var tenshi = ['hinata','hina','noa','kanon','koyori'];
tenshi.split(','); 
tenshi.join(',');  {bisa diganti sesuka hati}
tenshi.toString(); {hanya koma}

tenshi.push('myako'); {tambah dari belakang}
tenshi.push('matsumoto', 'yuu');
tenshi.unshift('') {sama seperti push tetapi dari depan}
tenshi.pop(); {delete}
tenshi.shift() {delete dari depan}
*/


/*

var keju = 'Cheddar';

if (keju) {
    console.log('Mantap!');
} else {
    console.log('meh..');
}

*/

/* Node Server 
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Halo Dunia~\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
*/

/* logical : and or not
    &&, ||, !

var iceCreamVanOutside;
var houseStatus;

if (!(iceCreamVanOutside || houseStatus === 'on fire')) {
    console.log('You should leave the house quickly.');
  } else {
    console.log('Probably should just stay in then.');
  }


  if (x === 5 || x === 7 || x === 10 ||x === 20) {
  // code run
}
  */
/* if else
var select = document.querySelector('select');
var para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
  var choice = select.value;

  if (choice === 'sunny') {
    para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
  } else if (choice === 'rainy') {
    para.textContent = 'Rain is falling outside; take a rain coat and a brolly, and don\'t stay out for too long.';
  } else if (choice === 'snowing') {
    para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
  } else if (choice === 'overcast') {
    para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
  } else {
    para.textContent = '';
  }
}
*/



/**switch */
 var selek = document.querySelector('.weather');
 var para = document.querySelector('p');
 
 selek.addEventListener('change', setWeather);
 
 
 function setWeather() {
   var choice = selek.value;
 
   switch (choice) {
     case 'sunny':
       para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
       break;
     case 'rainy':
       para.textContent = 'Rain is falling outside; take a rain coat and a brolly, and don\'t stay out for too long.';
       break;
     case 'snowing':
       para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
       break;
     case 'overcast':
       para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
       break;
     default:
       para.textContent = '';
   }
 }


var select = document.querySelector('#theme');
var html = document.querySelector('html');

select.onchange = function() {
    var choice = select.value;
   //switch break
    switch(choice) {
    case 'black':
    update('black','white');
    break;
    case 'white':
    update('white','black');
    break;
    case 'purple':
    update('purple','white');
    break;
    case 'yellow':
    update('yellow','darkgray');
    break;
    case 'psychedelic':
    update('lime','purple');
    break;
    }
   };

/*ternary (true or false / only 2 choises)
select.onchange = function() {
  ( select.value === 'black' ) ? update('black','white') : update('white','black');
}
*/

function update(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
  }
  

/*kalender if w/ OR */

var kal = document.querySelector('#kalender');
var tgl = document.querySelector('.tgl');
var bln = document.querySelector('.bln');

kal.onchange = function() {
  var pilih = kal.value;


  

	var hri = 31 ;
if (pilih === 'Februari') {
	hri = 28;
}
else if (pilih === 'April' || pilih === 'Juni' || pilih === 'September' || pilih === 'November')
 hri = 30;



  createCalendar(hri, pilih);
};

function createCalendar(hri, pilih) {
  tgl.innerHTML = '';
  bln.textContent = pilih;
  for (var i = 1; i <= hri; i++) {
    var isi = document.createElement('dd');
    isi.textContent = i;
    bln.appendChild(isi);
  }
}

createCalendar(31,'Januari');

