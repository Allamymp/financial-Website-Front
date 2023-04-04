const carrosselContainer = document.querySelector('.carrossel-container');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

nextButton.addEventListener('click', () => {
  // Calcula a posição atual da barra de rolagem
  const currentScrollPosition = carrosselContainer.scrollLeft;

  // Calcula a largura do carrossel e da div container
  const carrosselWidth = carrosselContainer.scrollWidth;
  const containerWidth = carrosselContainer.clientWidth;

  // Calcula o tamanho de um item do carrossel
  const itemWidth = document.querySelector('.item').offsetWidth;

  // Calcula a posição final da barra de rolagem
  const nextScrollPosition = Math.min(currentScrollPosition + itemWidth, carrosselWidth - containerWidth);

  // Aplica a nova posição da barra de rolagem
  carrosselContainer.scrollLeft = nextScrollPosition;
});


//rolar para esquerda

prevButton.addEventListener('click', () => {
  // Calcula a posição atual da barra de rolagem
  const currentScrollPosition = carrosselContainer.scrollLeft;

  // Calcula a largura do carrossel e da div container
  const carrosselWidth = carrosselContainer.scrollWidth;
  const containerWidth = carrosselContainer.clientWidth;

  // Calcula o tamanho de um item do carrossel
  const itemWidth = document.querySelector('.item').offsetWidth;

  // Calcula a posição final da barra de rolagem
  const nextScrollPosition = Math.max(currentScrollPosition - itemWidth, 0);

  // Aplica a nova posição da barra de rolagem
  carrosselContainer.scrollLeft = nextScrollPosition;
});

