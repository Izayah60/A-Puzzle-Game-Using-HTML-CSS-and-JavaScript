


function start_game() {
    var tab_position = new Array();
    while(tab_position.length < 9) {
        var numero = Math.round(Math.random() * 100);
        if((numero == 11) || (numero == 12) || (numero == 13) || (numero == 21) || (numero == 22) || (numero == 23) || (numero == 31) || (numero == 32) || (numero == 33)) {
            if(!tab_position.includes(numero)) {

                tab_position[tab_position.length] = numero;

            }
        }
    }

    document.getElementById('p11').textContent =tab_position[0];
    document.getElementById('p11').style.background = 'url('+tab_position[0]+'.jpg)';

    document.getElementById('p12').textContent =tab_position[1];
    document.getElementById('p12').style.background = 'url('+tab_position[1]+'.jpg)';

    document.getElementById('p13').textContent =tab_position[2];
    document.getElementById('p13').style.background = 'url('+tab_position[2]+'.jpg)';

    document.getElementById('p21').textContent =tab_position[3];
    document.getElementById('p21').style.background = 'url('+tab_position[3]+'.jpg)';

    document.getElementById('p22').textContent =tab_position[4];
    document.getElementById('p22').style.background = 'url('+tab_position[4]+'.jpg)';

    document.getElementById('p23').textContent =tab_position[5];
    document.getElementById('p23').style.background = 'url('+tab_position[5]+'.jpg)';

    document.getElementById('p31').textContent =tab_position[6];
    document.getElementById('p31').style.background = 'url('+tab_position[6]+'.jpg)';

    document.getElementById('p32').textContent =tab_position[7];
    document.getElementById('p32').style.background = 'url('+tab_position[7]+'.jpg)';

    document.getElementById('p33').textContent =tab_position[8];
    document.getElementById('p33').style.background = 'url('+tab_position[8]+'.jpg)';
}


// program the positions movements

function switching(cell) {
    if(document.getElementById(cell).textContent != '11') {
        switch (cell){
            case 'p11':

            break;
        }
    }
}