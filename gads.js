// Google Ads - tag do Google + conversao "Lead Consultoria (formulario site)"
// Conta 327-692-5956 (PRISME SALES [ADS])
(function () {
  var ID = 'AW-16996542569';
  var LABEL = 'AW-16996542569/ALFoCLeS-fgcEOnQyqg_';

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + ID;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  if (typeof window.gtag !== 'function') { window.gtag = gtag; }

  gtag('js', new Date());
  gtag('config', ID);

  var enviada = false;
  function registrarConversao() {
    if (enviada) return;
    enviada = true;
    gtag('event', 'conversion', { send_to: LABEL });
  }

  function ligar() {
    var form = document.getElementById('contactForm');
    if (form) { form.addEventListener('submit', registrarConversao); }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ligar);
  } else {
    ligar();
  }
})();
