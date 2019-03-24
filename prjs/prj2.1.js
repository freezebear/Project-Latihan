            const a = document.querySelector('p');

            a.addEventListener('click', updateName);

            function updateName() {
                let nama = prompt('Enter a new name');
                a.textContent = 'Player 1: ' + nama;
            }


            var butts = document.querySelectorAll('.ngeeng');

            for (let i = 0; i < butts.length; i++) {
                butts[i].addEventListener('click', createParagraph);
            }

            function createParagraph() {
                let b = document.createElement('p');
                b.textContent = 'Honk Honk~';
                document.body.appendChild(b);
            }



            var bb = document.querySelector('.buton1');
            var teks = document.querySelector('.mulai');

            bb.addEventListener('click', updatebb);



            function updatebb() {
                if (bb.textContent === 'Start') {
                    bb.textContent = 'Stop';
                    teks.textContent = 'Starting Now!';


                } else {
                    bb.textContent = 'Start';
                    teks.textContent = 'Stopped!';



                }

            }

            var but1 = document.querySelector('.helo');

            but1.onclick = function() {
                var nem = prompt('nama?'); //promt = ask form
                alert('Hello ' + nem + ', nice to see you!'); //alert = note / notif
            };


            function show() {
                var nama = document.getElementById('form1').select1.value;
                var isi = document.getElementById('container');

                if (nama === 'yuisis') {
                    isi.innerHTML = 'WAiPUU~';
                } else if (nama === 'caren') {
                    isi.innerHTML = 'KYUT Dancho wanabe';
                } else if (nama === 'clarise') {
                    isi.innerHTML = 'DOKKAANN!!';
                }


            }


            /*pilihan tanggal utk browser firefox & IE*/

            var nativePicker = document.querySelector('.nativeDatePicker');
            var fallbackPicker = document.querySelector('.fallbackDatePicker');
            var fallbackLabel = document.querySelector('.fallbackLabel');

            var yearSelect = document.querySelector('#year');
            var monthSelect = document.querySelector('#month');

            fallbackPicker.style.display = 'none';
            fallbackLabel.style.display = 'none';

            var test = document.createElement('input');
            test.type = 'month';

            if (test.type === 'text') {
                nativePicker.style.display = 'none';
                fallbackLabel.style.display = 'block';
                fallbackPicker.style.display = 'block';
                populateYears();
            }

            function populateYears() {
                var date = new Date();
                var year = date.getFullYear();

                for (var i = 0; i <= 5; i++) {
                    var option = document.createElement('option');
                    option.textContent = year - i;
                    yearSelect.appendChild(option);
                }

            }

            //panggil element
            var show = function(elem) {
                elem.classList.add('is-visible');
            };

            //usir element
            var hide = function(elem) {
                elem.classList.remove('is-visible');
            };


            //tugelnya
            var toggle = function(elem) {
                elem.classList.toggle('is-visible');
            };

            //tugas klik
            document.addEventListener('click', function(event) {

                //element yg diklik = tugelnya
                if (!event.target.classList.contains('toggle')) return;


                //optional (ilangin efek link)
                event.preventDefault();

                //ambil isinya
                var content = document.querySelector(event.target.hash);
                if (!content) return;

                //tugel isi
                toggle(content);

            }, false);

            function fungsiTugel() {
                var a = document.getElementById('divTugel');
                if (a.style.display === "block") {
                    a.style.display = "none";
                } else {
                    a.style.display = "block";
                }
            }