const carrossel = document.querySelector('.carrossel');
const itemWidth = (document.querySelector('.item').offsetWidth);

function rolarCarrossel(direcao) {
  if (direcao === 'prev') {
    carrossel.scrollLeft -= itemWidth;
  } else if (direcao === 'next') {
    carrossel.scrollLeft += itemWidth;
  }
}

document.querySelector('.prev').addEventListener('click', () => rolarCarrossel('prev'));
document.querySelector('.next').addEventListener('click', () => rolarCarrossel('next'));
