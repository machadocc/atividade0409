const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registrado com sucesso:', registration);
      })
      .catch(error => {
        console.error('Falha ao registrar Service Worker:', error);
      });
  });
}
