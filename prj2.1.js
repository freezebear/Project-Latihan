            const a = document.querySelector('p');

        a.addEventListener('click', updateName);

        function updateName() {
            let nama = prompt('Enter a new name');
            a.textContent = 'Player 1: ' + nama;
        }
        
        
        var butts = document.querySelectorAll('.ngeeng');

        for(let i = 0; i < butts.length ; i++) {
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
                       

                } 
                else {
                        bb.textContent = 'Start';
                        teks.textContent = 'Stopped!';
                        
                       
                
                }

        }

 var but1 = document.querySelector('.helo');

 but1.onclick = function() {
 var nem = prompt('nama?');    //promt = ask form
 alert('Hello ' + nem + ', nice to see you!');  //alert = note / notif
}