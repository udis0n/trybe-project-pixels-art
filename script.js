// *===========================================================
// * 1 - Pixels do Board
// *===========================================================

const pixelBoard = document.querySelector('#pixel-board');

// * 1.1 - Criação de Colunas

function createPixelsAndColumns(size) {
  const pixelContainer = document.createElement('div');
  pixelContainer.classList.add('pixel-container');
  pixelBoard.appendChild(pixelContainer);

  for (let i = 0; i < size; i += 1) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixelContainer.appendChild(pixel);
  }
}

// * 1. Criação de Linhas

function createPixelColumns(size) {
  for (let i = 0; i < size; i += 1) {
    createPixelsAndColumns(size);
  }
}

// ! function executed

createPixelColumns(5);

// *===========================================================
// * 2 - Seleção de Cor
// *===========================================================

const colorBlack = document.querySelector('.color:first-of-type');

colorBlack.classList.add('selected');

const color = document.querySelectorAll('.color');

// * 2.1 Color Random

for (let c = 13; c < color.length; c += 1) {
  let randomColor = `#${((1 << 24) * Math.random() | 0).toString(16)}`;
  color[c].style.backgroundColor = randomColor;
}

// * 2.1 - Seletor Criado

function changeSelection(event) {
  for (let i = 0; i < color.length; i += 1) {
    color[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

// ! function executed

for (let i = 0; i < color.length; i += 1) {
  color[i].addEventListener('click', changeSelection);
}

// *===========================================================
// * 3 - Pintar Pixel
// *===========================================================

let pixel = document.querySelectorAll('.pixel');

// * 3.1 - 'Pintador' Criado

function paintPixel(event) {
  const selected = document.querySelector('.selected');
  const selectedStyle = window.getComputedStyle(selected);
  const selectedBackground = selectedStyle.getPropertyValue('background-color');
  const e = event;
  e.target.style.backgroundColor = selectedBackground;
}

// ! function executed

for (let i = 0; i < pixel.length; i += 1) {
  pixel[i].addEventListener('click', paintPixel);
}

// *===========================================================
// * 4 - Botão de Limpar
// *===========================================================

const btnClear = document.querySelector('#clear-board');

// * 4.1 Limpador Criado

function clearBoard() {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
}

// ! function executed

btnClear.addEventListener('click', clearBoard);

// *===========================================================
// * 5 - Criação Dinâmica do Board
// *===========================================================

// * 1.1 Botão VQV
const btnVQV = document.querySelector('#generate-board');

// * 1.2 Criação Dinâmica

function inside(number) {
  let input = number;
  if (number > 50) {
    input = 50;
  } else if (number < 5) {
    input = 5;
  }
  return input;
}

function createBoard() {
  let inputSize = document.querySelector('#board-size').value;

  if (inputSize.length === 0) {
    alert('Board inválido!');
  } else {
    inputSize = inside(inputSize);
    for (let i = 0; i < pixel.length; i += 1) {
      pixel[i].remove();
    }
    createPixelColumns(inputSize);

    pixel = document.querySelectorAll('.pixel');

    for (let i = 0; i < pixel.length; i += 1) {
      pixel[i].addEventListener('click', paintPixel);
    }
  }
}

// ! function executed

btnVQV.addEventListener('click', createBoard);
