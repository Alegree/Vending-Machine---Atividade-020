const products = [
  { name: 'Água', type: 'Água', price: 1.00, stock: 10, ivaRate: 'reduzida' },
  { name: 'Tisana', type: 'Tisana', price: 1.50, stock: 10, ivaRate: 'intermedia' },
  { name: 'Refrigerante', type: 'Refrigerante', price: 2.00, stock: 10, ivaRate: 'normal' },
  { name: 'Água', type: 'Água', price: 1.00, stock: 10, ivaRate: 'reduzida' },
  { name: 'Água', type: 'Água', price: 1.00, stock: 10, ivaRate: 'reduzida' },
  { name: 'Tisana', type: 'Tisana', price: 1.50, stock: 10, ivaRate: 'intermedia' },
  { name: 'Refrigerante', type: 'Refrigerante', price: 2.00, stock: 10, ivaRate: 'normal' },
  { name: 'Água', type: 'Água', price: 1.00, stock: 10, ivaRate: 'reduzida' },
  { name: 'Água', type: 'Água', price: 1.00, stock: 10, ivaRate: 'reduzida' },
  { name: 'Tisana', type: 'Tisana', price: 1.50, stock: 10, ivaRate: 'intermedia' },
  { name: 'Água', type: 'Água', price: 1.00, stock: 10, ivaRate: 'reduzida' },
  { name: 'Refrigerante', type: 'Refrigerante', price: 2.00, stock: 10, ivaRate: 'normal' },
  { name: 'Água', type: 'Água', price: 1.00, stock: 10, ivaRate: 'reduzida' },
  { name: 'Tisana', type: 'Tisana', price: 1.50, stock: 10, ivaRate: 'intermedia' },
  { name: 'Água', type: 'Água', price: 1.00, stock: 10, ivaRate: 'reduzida' },
  { name: 'Tisana', type: 'Tisana', price: 1.50, stock: 10, ivaRate: 'intermedia' },
  { name: 'Água', type: 'Água', price: 1.00, stock: 10, ivaRate: 'reduzida' },
  { name: 'Refrigerante', type: 'Refrigerante', price: 2.00, stock: 10, ivaRate: 'normal' },
  { name: 'Água', type: 'Água', price: 1.00, stock: 10, ivaRate: 'reduzida' },
  { name: 'Refrigerante', type: 'Refrigerante', price: 2.00, stock: 10, ivaRate: 'normal' },
  { name: 'Tisana', type: 'Tisana', price: 1.50, stock: 10, ivaRate: 'intermedia' },
  { name: 'Água', type: 'Água', price: 1.00, stock: 10, ivaRate: 'reduzida' },
  { name: 'Tisana', type: 'Tisana', price: 1.50, stock: 10, ivaRate: 'intermedia' },
  { name: 'Refrigerante', type: 'Refrigerante', price: 2.00, stock: 10, ivaRate: 'normal' },
  { name: 'Água', type: 'Água', price: 1.00, stock: 10, ivaRate: 'reduzida' },
  { name: 'Tisana', type: 'Tisana', price: 1.50, stock: 10, ivaRate: 'intermedia' },
  { name: 'Água', type: 'Água', price: 1.00, stock: 10, ivaRate: 'reduzida' },
  { name: 'Tisana', type: 'Tisana', price: 1.50, stock: 10, ivaRate: 'intermedia' },
  { name: 'Refrigerante', type: 'Refrigerante', price: 2.00, stock: 10, ivaRate: 'normal' },
  { name: 'Água', type: 'Água', price: 1.00, stock: 10, ivaRate: 'reduzida' },
  { name: 'Absinto', type: 'Surpresa', stock: 5, special: true },
  { name: 'Gim', type: 'Surpresa', special: true },
  { name: 'Rum', type: 'Surpresa', special: true },
  { name: 'Whisky', type: 'Surpresa', special: true },
  { name: 'Vodka', type: 'Surpresa', special: true },
  { name: 'Cerveja', type: 'Surpresa', special: true },
  { name: 'Vinho', type: 'Surpresa', special: true },
  { name: 'Conhaque', type: 'Surpresa', special: true },
  { name: 'Tequila', type: 'Surpresa',special: true },

];
products.forEach(product => product.sales = 0);

let totalSales = 0;
let moneyInMachine = 0;
let productsBought = [];
let lastSurpriseDrinkTime = 0;
const surpriseCooldown = 60000; 
let surpriseCooldownTimer; 

function random() {
  products.forEach(product => {
    product.stock = getRandomNumber(0, 10);
    product.sales = 0;
  });
  updateUI();

  updateShelfStatus();
}


function addProductsToMachine() {
  const rows = document.querySelectorAll('.produto-fila');

  rows.forEach((row, rowIndex) => {
    for (let i = 0; i < 10; i++) {
      const productIndex = rowIndex * 10 + i;

      if (productIndex < products.length) {
        const product = products[productIndex];

        const productDiv = document.createElement('div');
        productDiv.className = 'shelf';
        productDiv.innerHTML = `<img src="imagens/${product.type.toLowerCase()}.png" alt="${product.name}"><br>${product.name}`;

        productDiv.addEventListener('click', () => buy(productIndex));

        row.appendChild(productDiv);
      }
    }
  });
}
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function updateShelfStatus() {
  const shelves = document.querySelectorAll('.shelf');

  shelves.forEach((shelf, index) => {
    const stockPercentage = (products[index].stock / 10) * 100;
    const color = stockPercentage < 25 ? 'red' : stockPercentage <= 50 ? 'yellow' : 'green';

    shelf.style.backgroundColor = color;
    shelf.innerHTML = `<img src="imagens/${products[index].type.toLowerCase()}.png" alt="${products[index].name}">`;
  });
}

function updateUI() {
  const statusElement = document.getElementById('status');
  const salesElement = document.getElementById('vendas');
  const productsBoughtElement = document.getElementById('produto-comprado');
  const receiptElement = document.getElementById('produto');
  const statisticsElement = document.getElementById('statistics');

  statusElement.textContent = `Dinheiro na Máquina: ${moneyInMachine.toFixed(2)}€`;
  salesElement.textContent = `Vendas Totais: ${totalSales.toFixed(2)}€`;

  if (productsBoughtElement) {
    productsBoughtElement.innerHTML = 'Produtos Comprados:';
    productsBought.forEach(product => {
      const productInfo = document.createElement('div');
      productInfo.textContent = `${product.name} - ${product.price.toFixed(2)}€`;
      productsBoughtElement.appendChild(productInfo);
    });
  }

  if (receiptElement) {
    receiptElement.innerHTML = '';
  }

  if (statisticsElement) {
    statisticsElement.innerHTML = '';
  }
}

function calculateIvaRate(productType) {
  switch (productType.toLowerCase()) {
    case 'água':
      return 0.06;
    case 'tisana':
      return 0.13; 
    case 'refrigerante':
      return 0.23; 
    default:
      return 0; 
  }
}



function buy(productIndex) {
  const product = products[productIndex];
  const ivaRate = calculateIvaRate(product.type);
  const priceWithIva = product.price + product.price * ivaRate;

  if (getRandomNumber(1, 100) <= 5) {
    alert('Avaria na máquina!');
    somavaria.play();
    
    if (simulateMachineFailure()) {
      alert('Avaria eminete. Dê uma pancada na máquina!');
      return;
    }
  }

  if (product.stock > 0 && moneyInMachine >= priceWithIva) {

    const change = moneyInMachine - product.price;
    moneyInMachine = 0;
    totalSales += priceWithIva;
    product.stock--; 
    product.sales++;

    productsBought.push({ name: product.name,  price: priceWithIva });

    updateShelfStatus();
    updateUI();

    somCompra.play();

    const receiptElement = document.getElementById('produto');
    const receiptItem = document.createElement('div');
    receiptItem.textContent = `${product.name}: ${priceWithIva.toFixed(2)}€ (IVA: ${(ivaRate * 100).toFixed(2)}%)`;
    receiptElement.appendChild(receiptItem);

    if (change > 0) {
      const changeWithIva = change - change * ivaRate;
      showChange(changeWithIva);
    }
  } else {
    alert('Dinheiro insuficiente ou produto não disponível.');
  }
}

function simulateMachineFailure() {
  let attempts = 0;
  const maxAttempts = 3;  

  while (attempts < maxAttempts) {
    if (getRandomNumber(1, 100) <= 50) {
      alert('Avaria resolvida com sucesso!');
      return false; 
    }
    attempts++;
  }

  return true;  
}

function talao() {
  const receiptElement = document.getElementById('recibo');
  somtalao.play();

  receiptElement.innerHTML = '';

  if (customerNIF) {
    const nifInfo = document.createElement('div');
    nifInfo.textContent = `NIF do Cliente: ${customerNIF}`;
    receiptElement.appendChild(nifInfo);
  }

  productsBought.forEach(product => {
    const productInfo = document.createElement('div');
    productInfo.textContent = `${product.name}: ${product.price.toFixed(2)}€`;
    receiptElement.appendChild(productInfo);
  });

  resetMachine();
}

function resetMachine() {
  totalSales = 0;
  moneyInMachine = 0;
  productsBought = [];
  customerNIF = '';

  updateUI();
}


function gerarSurpresa() {
  const currentTime = new Date().getTime();

  if (currentTime - lastSurpriseDrinkTime < surpriseCooldown) {
    const remainingTime = surpriseCooldown - (currentTime - lastSurpriseDrinkTime);
    alert(`Tens de esperar ${formatTime(remainingTime)} antes de retirar outra bebida surpresa.`);
  } else {
    const surpriseProducts = products.filter(product => product.special);

    if (surpriseProducts.length > 0) {
      const randomIndex = getRandomNumber(0, surpriseProducts.length - 1);
      const surpriseProduct = surpriseProducts[randomIndex];

      alert(`Ganhas-te uma bebida surpresa: ${surpriseProduct.name}`);

      const receiptElement = document.getElementById('produto');
      const surpriseInfo = document.createElement('div');
      surpriseInfo.textContent = `Bebida Surpresa: ${surpriseProduct.name}`;
      receiptElement.appendChild(surpriseInfo);

      lastSurpriseDrinkTime = currentTime;

      startCooldownTimer();
    } else {
      alert('Não há nenhuma bebida surpresa disponível neste momento.');
    }
  }
}

function startCooldownTimer() {
  surpriseCooldownTimer = setInterval(() => {
    const currentTime = new Date().getTime();
    const remainingTime = surpriseCooldown - (currentTime - lastSurpriseDrinkTime);

    if (remainingTime <= 0) {
      clearInterval(surpriseCooldownTimer);
      updateCooldownDisplay(0);
    } else {
      updateCooldownDisplay(remainingTime);
    }
  }, 1000); 
}

function updateCooldownDisplay(remainingTime) {
  const cooldownElement = document.getElementById('surpresa-tempo');
  cooldownElement.textContent = `Tempo restante para a próxima bebida surpresa: ${formatTime(remainingTime)}`;
}

function formatTime(milliseconds) {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}


function showChange(changeAmount) {
  const changeElement = document.getElementById('troco');
  changeElement.textContent = `Troco: ${changeAmount.toFixed(2)}€`;
  setTimeout(() => {
    changeElement.textContent = '';
  }, 3000);
}


function stats() {
  const statisticsElement = document.getElementById('statistics');

  const filteredProducts = products.filter(product =>
    ['Água', 'Tisana', 'Refrigerante'].includes(product.name)
  );
  const data = [{
    labels: filteredProducts.map(product => product.name),
    values: filteredProducts.map(product => product.sales || 0),
    type: 'pie',
    marker: {
      colors: ['#36A2EB', '#FFCE56', '#FF6384']
    }
  }];

  const layout = {
    title: 'Estatísticas de Vendas',
  };

  Plotly.newPlot('statistics', data, layout);
}


function adicionarDinheiro(amount) {
  const nifInput = document.getElementById('nif-input');
  customerNIF = nifInput.value; 
  moneyInMachine += amount;
  updateUI();
}
addProductsToMachine();
updateShelfStatus();