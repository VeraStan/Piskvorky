'use strict';

let jeNaTahu = 'circle';
const symbolsToWin = 5;

const buttonElm = document.querySelectorAll('.hraciPole button');
const hrajeSymbolElm = document.querySelector('#vymenitSymbol');

for (let index = 0; index < buttonElm.length; index++) {
  const button = buttonElm[index];
  button.addEventListener('click', (e) => {
    if (e.target.classList.length !== 0) {
      return false;
    }
    e.target.setAttribute('disabled', true);
    if (jeNaTahu === 'circle') {
      e.target.classList.add('board__field--circle');
      hrajeSymbolElm.classList.remove('kolecko');
      hrajeSymbolElm.classList.add('krizek');
      jeNaTahu = 'cross';
      if (isWinningMove(e.target)) {
        if (confirm('Vyhrálo kolečko. Spustit novou hru?')) {
          location.reload();
        }
      }
    } else {
      e.target.classList.add('board__field--cross');
      hrajeSymbolElm.classList.remove('krizek');
      hrajeSymbolElm.classList.add('kolecko');
      jeNaTahu = 'circle';
      if (isWinningMove(e.target)) {
        if (confirm('Vyhrál křížek. Spustit novou hru?')) {
          location.reload();
        }
      }
    }
  });
}

const boardSize = 10;
const fields = document.querySelectorAll('.hraciPole button');

const getPosition = (field) => {
  let fieldIndex = 0;
  while (fieldIndex < fields.length) {
    if (field === fields[fieldIndex]) {
      break;
    }
    fieldIndex++;
  }

  return {
    row: Math.floor(fieldIndex / boardSize),
    column: fieldIndex % boardSize,
  };
};

const getField = (row, column) => fields[row * boardSize + column];

const getSymbol = (field) => {
  if (field.classList.contains('board__field--cross')) {
    return 'cross';
  } else if (field.classList.contains('board__field--circle')) {
    return 'circle';
  }
};

const isWinningMove = (field) => {
  const origin = getPosition(field);
  const symbol = getSymbol(field);

  let i;

  let inRow = 1;

  i = origin.column;
  while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
    inRow++;
    i--;
  }

  i = origin.column;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(origin.row, i + 1))
  ) {
    inRow++;
    i++;
  }

  if (inRow >= symbolsToWin) {
    return true;
  }

  let inColumn = 1;

  i = origin.row;
  while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
    inColumn++;
    i--;
  }

  i = origin.row;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(i + 1, origin.column))
  ) {
    inColumn++;
    i++;
  }

  if (inColumn >= symbolsToWin) {
    return true;
  }

  return false;
};
