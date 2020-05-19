export class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.run();
  }
  run() {
    setInterval(() => {
      const time = this.targetDate.getTime() - new Date().getTime();
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((time % (1000 * 60)) / 1000);
      // console.log(days, hours, mins, secs);

      const refs = {
        daysElem: document.querySelector(
          `${this.selector} span[data-value="days"]`,
        ),
        hoursElem: document.querySelector(
          `${this.selector} span[data-value="hours"]`,
        ),
        minsElem: document.querySelector(
          `${this.selector} span[data-value="mins"]`,
        ),
        secsElem: document.querySelector(
          `${this.selector} span[data-value="secs"]`,
        ),
      };

      refs.daysElem.innerHTML = days;
      refs.hoursElem.innerHTML = hours;
      refs.minsElem.innerHTML = mins;
      refs.secsElem.innerHTML = secs;
    }, 1000);
  }
}
