class TeclaPiano {
    constructor(nota,letra) {
        this.nota = nota;
        this.letra = letra;
        this.elemento = document.createElement('div');
        this.elemento.classList.add('tecla-piano','text-center','fw-bold','fs-2',);
        this.elemento.dataset.nota = this.nota;
        this.elemento.addEventListener('click', this.reproducirSonido.bind(this));
        this.elemento.innerText = this.letra
        
    }

    reproducirSonido() {
        let audio = new Audio(`audio/${this.nota}`);
        audio.play();
    }
    
    
    
}


let teclasPiano = [
    new TeclaPiano('nota1.mp3','a'),
    new TeclaPiano('nota2.mp3','s'),
    new TeclaPiano('nota3.mp3','d'),
    new TeclaPiano('nota4.mp3','f'),
    new TeclaPiano('nota5.mp3','g'),
    new TeclaPiano('nota6.mp3','h'),
    new TeclaPiano('nota7.mp3','j'),
    new TeclaPiano('nota8.mp3','k'),
];

console.log(teclasPiano);

let pianoContainer = document.querySelector('#piano');
teclasPiano.forEach(tecla => {
    pianoContainer.appendChild(tecla.elemento);
});

document.addEventListener('keydown',(e)=>{
        let oprimirtecla = e.key
        let teclaencontrada = teclasPiano.find(tecla => tecla.letra == oprimirtecla)
        if (teclaencontrada != undefined) {
            teclaencontrada.reproducirSonido()
            teclaencontrada.elemento.classList.add('tecla-accion','btn')

            setTimeout(() => {
                teclaencontrada.elemento.classList.remove('tecla-accion','btn')
            }, 200);
        }
})




