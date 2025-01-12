const timer = {
  deadLine: new Date('2025-01-13T23:38:00'),
  intervalId: null,
  elements: document.querySelectorAll('.value'),

  start() {
    this.intervalId = setInterval(() => {
      const diff = this.deadLine - Date.now();

      if (diff <= 0) {
        this.stop();

        return;
      }

      const timeComponents = this.convertMs(diff);

      this.elements.forEach(el => {
        if (el.dataset.days !== undefined) {
          el.textContent = this.addLeadingZero(timeComponents.days);
        }
        if (el.dataset.hours !== undefined) {
          el.textContent = this.addLeadingZero(timeComponents.hours);
        }
        if (el.dataset.minutes !== undefined) {
          el.textContent = this.addLeadingZero(timeComponents.minutes);
        }
        if (el.dataset.seconds !== undefined) {
          el.textContent = this.addLeadingZero(timeComponents.seconds);
        }
      });
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
  },

  convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  },

  addLeadingZero(value) {
    return String(value).padStart(2, '0');
  },
};

timer.start();
