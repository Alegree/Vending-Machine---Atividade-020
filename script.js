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
  { name: 'Tisana', type: 'Tisana', price: 1.50, stock: 10, ivaRate: 'intermedia' },
  { name: 'Água', type: 'Água', price: 1.00, stock: 10, ivaRate: 'reduzida' },
  { name: 'Refrigerante', type: 'Refrigerante', price: 2.00, stock: 10, ivaRate: 'normal' },
  { name: 'Água', type: 'Água', price: 1.00, stock: 10, ivaRate: 'reduzida' },
  { name: 'Refrigerante', type: 'Refrigerante', price: 2.00, stock: 10, ivaRate: 'normal' },
  { name: 'Tisana', type: 'Tisana', price: 1.50, stock: 10, ivaRate: 'intermedia' },
  { name: 'Água', type: 'Água', price: 1.00, stock: 10, ivaRate: 'reduzida' },
  { name: 'Tisana', type: 'Tisana', price: 1.50, stock: 10, ivaRate: 'intermedia' },
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
  { name: 'Absinto', type: 'Surpresa', special: true },
  { name: 'Gim', type: 'Surpresa', special: true },
  { name: 'Rum', type: 'Surpresa', special: true },
  { name: 'Whisky', type: 'Surpresa', special: true },
  { name: 'Vodka', type: 'Surpresa', special: true },
  { name: 'Cerveja', type: 'Surpresa', special: true },
  { name: 'Vinho', type: 'Surpresa', special: true },
  { name: 'Conhaque', type: 'Surpresa', special: true },
  { name: 'Tequila', type: 'Surpresa', special: true },


];
products.forEach(product => product.sales = 0);

let totalSales = 0;
let moneyInMachine = 0;
let productsBought = [];
let lastSurpriseDrinkTime = 0;
const surpriseCooldown = 60000;
let surpriseCooldownTimer;
let currentRegion = 'Continente';

function random() {
  products.forEach(product => {
    product.stock = getRandomNumber(0, 10);
    product.sales = 0;
  });
  updateUI();

  updateShelfStatus();
}

function addProductsToMachine(productsPerRow = 10) {
  const rows = document.querySelectorAll('.produto-fila');

  rows.forEach((row, rowIndex) => {
    for (let i = 0; i < productsPerRow; i++) {
      const productIndex = rowIndex * productsPerRow + i;

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

function chooseRegion() {
  const regionInput = prompt("Escreva a sua região: Continente, Madeira ou Açores");

  if (regionInput) {
    setRegion(regionInput);
  } else {
    alert('Região não suportada/encontrada. Vamos utilizar a região default (Continente)');
    setRegion('continente');
  }
}

function setRegion(regionInput) {
  const validRegions = ['madeira', 'açores', 'continente'];
  const lowercaseRegion = regionInput.toLowerCase();

  if (validRegions.includes(lowercaseRegion)) {
    currentRegion = lowercaseRegion;
  } else {
    alert('Região não suportada/encontrada. Vamos utilizar a região default (Continente)');
    currentRegion = 'continente';
  }
}

function calculateIvaRate(productType) {
  let defaultIvaRate = 0;
  switch (productType.toLowerCase()) {
    case 'água':
      defaultIvaRate = 0.06;
      break
    case 'tisana':
      defaultIvaRate = 0.13;
      break
    case 'refrigerante':
      defaultIvaRate = 0.23;
      break;
    default:
      break;
  }

  switch (currentRegion) {
    case 'continente':
      return defaultIvaRate;
    case 'madeira':
      return defaultIvaRate - 0.01;
    case 'açores':
      return defaultIvaRate - 0.03;
    default:
      break;
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

    productsBought.push({ name: product.name, price: priceWithIva });

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

  let totalGasto = 0;

  const customerNIF = prompt("Por favor, insira o seu NIF para o recibo (opcional):");

  if (customerNIF && !validaNIF(customerNIF)) {
    alert("O NIF inserido é inválido. Por favor, insira um NIF válido.");
    return;
  }

  if (customerNIF) {
    const nifInfo = document.createElement('div');
    nifInfo.textContent = `NIF do Cliente: ${customerNIF}`;
    receiptElement.appendChild(nifInfo);
  }

  const productCount = {};

  productsBought.forEach(product => {
    if (!productCount[product.name]) {
      productCount[product.name] = 1;
    } else {
      productCount[product.name]++;
    }

    totalGasto += product.price;
  });

  Object.keys(productCount).forEach(productName => {
    const count = productCount[productName];

    const productInfo = document.createElement('div');
    productInfo.textContent = `${productName}: ${productsBought.find(p => p.name === productName).price.toFixed(2)}€`;

    if (count > 1) {
      productInfo.textContent += ` (x${count})`;
    }

    receiptElement.appendChild(productInfo);
  });

  const totalInfo = document.createElement('div');
  totalInfo.innerHTML = `<strong>Total Gasto: ${totalGasto.toFixed(2)}€</strong>`;
  receiptElement.appendChild(totalInfo);

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
    margin: { t: 50, b: 50, l: 50, r: 50 },
    legend: {
      x: 0.5,
      y: 0.5,
      traceorder: 'normal',
      font: {
        family: 'Ubuntu, sans-serif',
        size: 12,
        color: '#000',
      },
      bgcolor: '#E2E2E2',
      bordercolor: '#FFFFFF',
      borderwidth: 2,
    },
    paper_bgcolor: '#F8F8F8',
  };

  Plotly.newPlot('statistics', data, layout);
}


function adicionarDinheiro(amount) {
  moneyInMachine += amount;
  updateUI();
}

function validaNIF(value) {
  value = value + "";

  if (!/^[0-9]{9}$/.test(value)) return false;

  if (!/^[123]|45|5/.test(value)) return false;

  let tot =
    value[0] * 9 +
    value[1] * 8 +
    value[2] * 7 +
    value[3] * 6 +
    value[4] * 5 +
    value[5] * 4 +
    value[6] * 3 +
    value[7] * 2;
  let div = tot / 11;
  let mod = tot - parseInt(div) * 11;
  let tst = mod == 1 || mod == 0 ? 0 : 11 - mod;
  return value[8] == tst;
}
chooseRegion();
addProductsToMachine();
updateShelfStatus();