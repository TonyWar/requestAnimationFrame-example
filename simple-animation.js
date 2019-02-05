class SimpleAnimation {
  constructor(config, duration = 2000) {
    // requestAnimationFrame can not be 0
    this.id = 0;
    this.startTime = 0;
    this.duration = duration;
    this.timeLeft = 0;

    if (!config) { return; }

    this.defaultValue = config.default || 0;
    this.fromValue = config.from || 0;
    this.toValue = config.to || 100;
    this.unit = config.unit || 'px';
    this.property = config.property || 'width';
  }

  setTarget = (target) => {
    this.target = target
    this.timeLeft = this.getCurrentDuration();
  };

  start = () => {
    this.stop();
    this.isReverse = false;
    this.timeLeft = this.getCurrentDuration();
    this.startTime = performance.now();
    this.id = requestAnimationFrame(this.animation);
  }
  stop = () => {
    cancelAnimationFrame(this.id);
  }
  reverse = () => {
    this.stop();
    this.isReverse = true;
    this.timeLeft = this.getCurrentDuration();
    this.startTime = performance.now();
    this.id = requestAnimationFrame(this.animation);
  }
  reset = () => {
    if (!this.target) { return; }
    this.updateTargetPropertyValue();
  }
  animation = (time) => {
    // get timePassed from last render
    let timePassed = time - this.startTime + this.timeLeft;

    // fix time with duraion
    timePassed = timePassed > this.duration ? this.duration : timePassed;

    // do some animation there
    this.makeFrame(Math.ceil(timePassed / this.duration * 100) / 100);
    console.log(`animaion works...${Math.ceil(timePassed / this.duration * 100)}%`, );
    if (timePassed < this.duration) {
      this.id = requestAnimationFrame(this.animation);
    }
  }

  makeFrame = (progress) => {
    let currentState = (this.toValue - this.fromValue);
    currentState = this.isReverse ? currentState * (1 - progress) : currentState * progress;
    this.updateTargetPropertyValue(this.fromValue + currentState);
  }

  updateTargetPropertyValue = (value = this.defaultValue) => {
    this.target.style[this.property] = value + this.unit;
  }

  getTargetPropertyValue = () => {
    const property = this.target.style[this.property];
    if (property === '') {
      return this.defaultValue;
    }
    return parseInt(property, 10);
  }

  getCurrentDuration = () => {
    // fix time with current state
    const currentValue = this.getTargetPropertyValue();
    const totalChanges = this.toValue - this.fromValue;
    const currentChanges = this.isReverse ? (this.toValue - currentValue) : (currentValue - this.fromValue);
    const timeLeftBeforeAnimation = Math.ceil(currentChanges / totalChanges * this.duration);
    return timeLeftBeforeAnimation;
  }
}