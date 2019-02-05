'use strict'

const btnReset = document.getElementById('btnReset');
const btnReverse = document.getElementById('btnReverse');
const btnPause = document.getElementById('btnPause');
const btnStart = document.getElementById('btnStart');

const testBlock = document.getElementById('testBlock');

const checkboxWidthAnimation = document.getElementById('widthAnimation');
const checkboxBorderAnimation = document.getElementById('borderAnimation');
const checkboxHeightAnimation = document.getElementById('heightAnimation');

const widthAnimationConfig = {
  default: 300,
  from: 0,
  to: 600,
  unit: 'px',
  property: 'width'
}
const widthAnimation = new SimpleAnimation(widthAnimationConfig, 2000, false);
widthAnimation.setTarget(testBlock);

const borderAnimationConfig = {
  default: 0,
  from: 0,
  to: 50,
  unit: '%',
  property: 'border-radius'
}
const borderAnimation = new SimpleAnimation(borderAnimationConfig, 2000, false);
borderAnimation.setTarget(testBlock);

const heightAnimationConfig = {
  default: 300,
  from: 0,
  to: 600,
  unit: 'px',
  property: 'height'
}
const heightAnimation = new SimpleAnimation(heightAnimationConfig, 2000, false);
heightAnimation.setTarget(testBlock);

const isWidthAnimationActive = (cb) => checkboxWidthAnimation.checked && cb();
const isBorderAnimationActive = (cb) => checkboxBorderAnimation.checked && cb();
const isHeightAnimationActive = (cb) => checkboxHeightAnimation.checked && cb();
// Configure bottom buttons
const onReset = (e) => {
  widthAnimation.reset();
  borderAnimation.reset();
  heightAnimation.reset();
  console.log('Reset click');
}

const onReverse = (e) => {
  isWidthAnimationActive(widthAnimation.reverse);
  isBorderAnimationActive(borderAnimation.reverse);
  isHeightAnimationActive(heightAnimation.reverse);
  console.log('Reverse click');
}

const onPause = (e) => {
  isWidthAnimationActive(widthAnimation.stop);
  isBorderAnimationActive(borderAnimation.stop);
  isHeightAnimationActive(heightAnimation.stop);
  console.log('Pause click');
}

const onStart = (e) => {
  isWidthAnimationActive(widthAnimation.start);
  isBorderAnimationActive(borderAnimation.start);
  isHeightAnimationActive(heightAnimation.start);
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