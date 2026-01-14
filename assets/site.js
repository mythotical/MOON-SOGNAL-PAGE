// Moon Signal site helpers (no tracking)
(function(){
  const store = document.querySelector('[data-store]');
  if(store && (store.getAttribute('href')||'').includes('REPLACE_WITH_CHROME_STORE_URL')){
    console.warn('[Moon Signal] Replace Chrome Web Store URL in index.html (REPLACE_WITH_CHROME_STORE_URL).');
  }
  const bad = Array.from(document.querySelectorAll('a[data-plan]'))
    .filter(a => (a.getAttribute('href')||'').includes('REPLACE_WITH_STRIPE_CHECKOUT'));
  if(bad.length){
    console.warn('[Moon Signal] Replace Stripe checkout links in index.html for:', bad.map(a=>a.dataset.plan));
  }
})();
