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
    .then(delay => console.log(`✅ Fulfilled promise in ${delay}ms`))
    .catch(delay => console.log(`❌ Rejected promise in ${delay}ms`));
}
