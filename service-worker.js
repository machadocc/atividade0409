self.addEventListener('install', event => {
  console.log('Service Worker instalado');
  self.skipWaiting(); // ativa o SW imediatamente
});

self.addEventListener('activate', event => {
  console.log('Service Worker ativado');
  self.clients.claim(); // assume o controle da página imediatamente
});

// Você pode adicionar o fetch listener se quiser, mas não é obrigatório para a instalação
// self.addEventListener('fetch', event => {});
