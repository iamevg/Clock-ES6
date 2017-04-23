class Clock {
  constructor() {
    this._timer;
  }

  _render() {
      let [hours, min, sec] = new Date().toLocaleTimeString(`ru`).split(`:`);

      document.querySelector(`.clock`).textContent = `${ hours = hours.length < 2 ? `0${hours}` : hours }:${ min }:${ sec }`;
      document.body.style.backgroundColor = `#${ hours }${ min }${ sec }`;
    }

  stop() {
    clearInterval(this._timer);
  }

  start() {
    this._render();

    this._timer = setInterval(() => this._render(), 1000);
  }
}

let clock = new Clock();

clock.start();
