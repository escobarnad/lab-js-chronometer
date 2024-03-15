class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
    this.currentMilliseconds = 0;
    this.millisecondsIntervalId = 0
  }

  start(printTimeCallback, printMilliseconds) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime += 1
      if (printTimeCallback){
        printTimeCallback(this.currentTime)
      }
    }, 1000)

    this.millisecondsIntervalId = setInterval( () => {
      if (this.currentMilliseconds === 99) {
        this.currentMilliseconds = 0;
      }
      this.currentMilliseconds += 1;
      if (printMilliseconds) printMilliseconds();
    }, 10);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    console.log(value)
    if (value.toString().length === 2){
      return value.toString()
    } else {
      return `0${value}`
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
    clearInterval(this.millisecondsIntervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
    this.currentMilliseconds = 0;
  }

  split() {
    // ... your code goes here
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let milliseconds = this.computeTwoDigitNumber(this.currentMilliseconds);

    // Store current milliseconds
    let currentMillis = this.currentMilliseconds;

    // Calculate the milliseconds part using the stored value
    milliseconds = this.computeTwoDigitNumber(currentMillis);

    return `${minutes}:${seconds}:${milliseconds}`;
  }
}
