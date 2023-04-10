// carousel slider nettflix type//

const carrossel = document.querySelector('.carrossel');
const itemWidth = (document.querySelector('.item').offsetWidth);

function rolarCarrossel(direcao) {
  if (direcao === 'prev') {
    carrossel.scrollLeft -= itemWidth -2;
  } else if (direcao === 'next') {
    carrossel.scrollLeft += itemWidth - 2;
  }
}

document.querySelector('.prev').addEventListener('click', () => rolarCarrossel('prev'));
document.querySelector('.next').addEventListener('click', () => rolarCarrossel('next'));

// carousel slider nettflix type end//