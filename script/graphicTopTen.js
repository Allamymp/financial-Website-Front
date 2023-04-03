async function preencherCarrossel() {
    const carrossel = document.getElementById('carousel');
    const itens = carrossel.getElementsByClassName('item');
  
    const response = await fetch('DB/graphicTopTen.json');
    const data = await response.json();
  
    // percorre cada elemento do carrossel e preenche com os dados do JSON
    for (let i = 0; i < itens.length; i++) {
      const item = itens[i];
      const dado = data[i];
      item.innerHTML = `${dado.nome}: ${dado.valor}`;
    }
  }
  
  