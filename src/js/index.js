const imagensSlide = document.querySelectorAll('.imagem-slide')
const setaAvancar = document.getElementById('btn-avancar')
const setaVoltar = document.getElementById('btn-voltar')
let imagemAtual = 0

function esconderImagens(){imagensSlide.forEach(imagem => {imagem.classList.remove('mostrar')})}
function mostrarImagens(){imagensSlide[imagemAtual].classList.add('mostrar')}

setaAvancar.addEventListener('click', function(){
    const totalDeImagens = imagensSlide.length - 1;
    if(imagemAtual === totalDeImagens) return;

    imagemAtual++
    esconderImagens()
    mostrarImagens()
    mostrarOuEsconderSetas()
})

setaVoltar.addEventListener('click', function(){
    const voltarOpaca = document.querySelector('.btn-voltar')

    if(imagemAtual === 0) return;

    imagemAtual--
    esconderImagens()
    mostrarImagens()
    mostrarOuEsconderSetas()
})

function mostrarOuEsconderSetas(){
    const SaiuDaPrimeiraImagem = imagemAtual !== 0;
    if(SaiuDaPrimeiraImagem){
        setaVoltar.classList.remove('opacidade')
    } else{
        setaVoltar.classList.add('opacidade')
    }

    const chegouNaUltimaImagem = imagemAtual !==0 && imagemAtual === imagensSlide.length -1;

    if(chegouNaUltimaImagem){
        setaAvancar.classList.add('opacidade')
    } else {
        setaAvancar.classList.remove('opacidade')
    }

}