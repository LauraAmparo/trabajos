    // Obter referencias aos elementos do DOM
    var coche_blue = document.getElementById('coche_blue');
    var coche_white = document.getElementById('coche_white');
    var coche_yellow = document.getElementById('coche_yellow');
    var coche_black = document.getElementById('coche_black');
    var coche_grey = document.getElementById('coche_grey');


    // var button_1 = document.getElementById('button_1');
    // var button_2 = document.getElementById('button_2');
    // var button_3 = document.getElementById('button_3');
    // var button_4 = document.getElementById('button_4');
    // var button_5 = document.getElementById('button_5');

     // Funcións para amosar coches
     function amosarcoche_blue() {
        coche_blue.style.display = 'block';
        coche_white.style.display = 'none';
        coche_yellow.style.display = 'none';
        coche_black.style.display = 'none';
        coche_grey.style.display = 'none';
        }
    

  

    function amosarcoche_white() {
        coche_blue.style.display = 'none';
        coche_white.style.display = 'block';
        coche_yellow.style.display = 'none';
        coche_black.style.display = 'none';
        coche_grey.style.display = 'none';
    }

    function amosarcoche_yellow() {
        coche_blue.style.display = 'none';
        coche_white.style.display = 'none';
        coche_yellow.style.display = 'block';
        coche_black.style.display = 'none';
        coche_grey.style.display = 'none';
    }
    function amosarcoche_black() {
        coche_blue.style.display = 'none';
        coche_white.style.display = 'none';
        coche_yellow.style.display = 'none';
        coche_black.style.display = 'block';
        coche_grey.style.display = 'none';
    }
    function amosarcoche_grey() {
        coche_blue.style.display = 'none';
        coche_white.style.display = 'none';
        coche_yellow.style.display = 'none';
        coche_black.style.display = 'none';
        coche_grey.style.display = 'block';
    }
    


amosarcoche_blue();
