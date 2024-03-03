function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    
    if (elemento === null){
        alert('Elemento não encontrado');
    }
    
    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    }
    else{
        alert('Elemento não encontrado ou seletor inválido')
    }
}

const listadeTeclas = document.querySelectorAll('.tecla');


for(let contador = 0; contador < listadeTeclas.length;contador++) {
    
    const tecla = listadeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    
    tecla.onclick = function() {
        tocaSom(idAudio);
    }
    tecla.onkeydown = function(evento) {
        console.log(evento);
        if (evento.code ==='Space'|| evento.code === 'NumpadEnter' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
}
