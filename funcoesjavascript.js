
start();
window.addEventListener('resize', start);

function start() {
    var altura = window.screen.height;
    var largura = window.screen.width;

    var larguraBody = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

    var alturaBody = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;

    if (alturaBody < 500) {
        document.getElementById("precodevenda").hidden = true
    }
    else { 
        document.getElementById("precodevenda").hidden = false
    }
    
    if (alturaBody < 450) {
        document.getElementById("produto").hidden = true
    }
    else { 
        document.getElementById("produto").hidden = false
    }

    if (alturaBody < 400) {
        document.getElementById("enderecocliente").hidden = true
    }
    else { 
        document.getElementById("enderecocliente").hidden = false
    }
    if (alturaBody < 350) {
        document.getElementById("cpfcliente").hidden = true
    }
    else { 
        document.getElementById("cpfcliente").hidden = false
    }
    if (alturaBody < 300) {
        document.getElementById("rgcliente").hidden = true
    }
    else { 
        document.getElementById("rgcliente").hidden = false
    }
    if (alturaBody < 250) {
        document.getElementById("idcliente").hidden = true
    }
    else { 
        document.getElementById("idcliente").hidden = false
    }

}

