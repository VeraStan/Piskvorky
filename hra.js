'use strict';

let jeNaTahu = 'circle';

const buttonElm = document.querySelectorAll('.hraciPole button');
const hrajeSymbolElm = document.querySelector('#vymenitSymbol');

for (let index = 0; index < buttonElm.length; index++) {
  const button = buttonElm[index];
  button.addEventListener('click', (e) => {
    if (e.target.classList.length) {
      return false;
    }
    if (jeNaTahu === 'circle') {
      e.target.classList.add('board__field--circle');
      hrajeSymbolElm.classList.remove('kolecko');
      hrajeSymbolElm.classList.add('krizek');
      jeNaTahu = 'cross';
    } else {
      e.target.classList.add('board__field--cross');
      hrajeSymbolElm.classList.remove('krizek');
      hrajeSymbolElm.classList.add('kolecko');
      jeNaTahu = 'circle';
    }
  });
}
