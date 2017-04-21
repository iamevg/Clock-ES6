class Clock {
  constructor() {
    this._timer;
  }

  render() {
    let date = new Date().toLocaleTimeString(`ru`).split(`:`);
    let [ hours, min, sec ] = date;

    let time = `${hours}:${min}:${sec}`;
    let color = `#${hours}${min}${sec}`;

    document.querySelector(`.clock`).textContent = time;
    document.body.style.backgroundColor = color;
  }

  stop() {
    clearInterval(this._timer);
  }

  start() {
    this.render();

    this._timer = setInterval(this.render.bind(this), 1000);
  }
}

let clock = new Clock();

clock.start();