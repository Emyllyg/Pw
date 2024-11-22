const pucca= document.querySelector(".pucca");
const arvore = document.querySelector(".arvore");
const startGame = document.querySelector('.start-game');


const jump = () => {
    pucca.classList.add('jump');

    setTimeout(() => {
            pucca.classList.remove( 'jump');
    }, 500);
}

    const loop = setInterval(() => {
        
        const arvorePosition = arvore.offsetLeft;
        const puccaPosition = Number(window.getComputedStyle(pucca).bottom.replace('px', ''));

    if (arvorePosition <= 120 &&
        arvorePosition > 0 &&
        puccaPosition < 80) {

        
        arvore.style.animation = 'none';
        arvore.style.left = `${arvorePosition}px`;

        pucca.style.animation = 'none';
        pucca.style.bottom = `${puccaPosition}px`;

        pucca.src = "./img/pucca-.gif";
        pucca.style.width = '250px';
        pucca.style.marginLeft = '-20px';
        pucca.style.top = '200px';
        
        
        

        startGame.src = 'img/gameover.png';

        clearInterval(loop);

        document.addEventListener('keydown', () => { location.reload(); });
        }

    }, 10)

    document.addEventListener('keydown', jump);