const btnReset = document.getElementById('btnReset');
const btnReverse = document.getElementById('btnReverse');
const btnPause = document.getElementById('btnPause');
const btnStart = document.getElementById('btnStart');

const testBlock = document.getElementById('testBlock');






// Configure bottom buttons
onReset = (e) => {
  console.log('Reset click');
}

onReverse = (e) => {
  console.log('Reverse click');
}

onPause = (e) => {
  console.log('Pause click');
}

onStart = (e) => {
  console.log('Start click');
}

// Initial function
const initEvents = (e) => {
  btnReset.addEventListener('click', onReset);
  btnReverse.addEventListener('click', onReverse);
  btnPause.addEventListener('click', onPause);
  btnStart.addEventListener('click', onStart);
}

window.addEventListener('load', initEvents);