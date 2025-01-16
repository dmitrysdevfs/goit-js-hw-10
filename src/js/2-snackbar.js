import iziToast from 'izitoast';

const toastSettings = {
  common: {
    messageSize: '16',
    messageColor: 'white',
    position: 'topRight',
    progressBar: false,
    close: false,
    timeout: 3000,
  },
  fulfilled: {
    // iconText: '✅',
    // icon: 'fa-solid fa-check',
    backgroundColor: '#59A10D',
    message: delay => `✅ Fulfilled promise in ${delay}ms`,
  },
  rejected: {
    // iconText: '❌',
    // icon: 'fa-solid fa-xmark',
    backgroundColor: '#ff5050',
    message: delay => `⛔ Rejected promise in ${delay}ms`,
  },
};

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const delay = Number(event.target.elements.delay.value);
  const state = event.target.elements.state.value;

  console.log(delay);
  console.log(state);

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      state === 'fulfilled' ? resolve(delay) : reject(delay);
    }, delay);
  });

  promise
    .then(delay => {
      iziToast.show({
        ...toastSettings.common,
        ...toastSettings.fulfilled,
        message: toastSettings.fulfilled.message(delay),
      });
    })
    .catch(delay => {
      iziToast.show({
        ...toastSettings.common,
        ...toastSettings.rejected,
        message: toastSettings.rejected.message(delay),
      });
    });
}
