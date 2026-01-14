// Moon Signal site helpers (no tracking, no bloat)
(function(){
  // If you forget to replace Stripe links, warn in console
  const bad = Array.from(document.querySelectorAll('a[data-plan]'))
    .filter(a => (a.getAttribute('href')||'').includes('REPLACE_WITH_STRIPE_CHECKOUT'));
  if(bad.length){
    console.warn('[Moon Signal] Replace Stripe checkout links in index.html for:', bad.map(a=>a.dataset.plan));
  }
})();
