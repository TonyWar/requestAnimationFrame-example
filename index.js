'use strict'

const btnReset = document.getElementById('btnReset');
const btnReverse = document.getElementById('btnReverse');
const btnPause = document.getElementById('btnPause');
const btnStart = document.getElementById('btnStart');

const testBlock = document.getElementById('testBlock');

const widthAnimationConfig = {
  default: 300,
  from: 0,
  to: 600,
  unit: 'px',
  property: 'width'
}
const animation1 = new SimpleAnimation(widthAnimationConfig, 2000, true);
animation1.setTarget(testBlock);

// Configure bottom buttons
const onReset = (e) => {
  animation1.reset();
  console.log('Reset click');
}

const onReverse = (e) => {
  animation1.reverse();
  console.log('Reverse click');
}

const onPause = (e) => {
  animation1.stop();
  console.log('Pause click');
}

const onStart = (e) => {
  animation1.start();
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