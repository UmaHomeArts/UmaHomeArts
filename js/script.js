(function () {
  const cfg = window.UMA_CONFIG || { storeUrl: '#', whatsappNumber: '', products: [] };
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  document.querySelectorAll('[data-store-link]').forEach(a => { a.href = cfg.storeUrl || '#'; if (cfg.storeUrl && cfg.storeUrl !== '#') a.target = '_blank'; });
  document.querySelectorAll('[data-whatsapp-link]').forEach(a => { const n = String(cfg.whatsappNumber || '').replace(/\D/g, ''); a.href = n ? `https://wa.me/${n}?text=${encodeURIComponent('Hello UmaHomeArts, I have a question about a product.')}` : '#'; if(n) a.target='_blank'; });
  const menu = document.querySelector('.menu-button'), nav = document.querySelector('.site-nav');
  if (menu && nav) menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', open); menu.textContent = open ? '×' : '☰'; });
  const fallback = '<div class="product-placeholder"><span>UmaHome</span><b>Arts</b></div>';
  const card = p => `<article class="product-card"><a class="product-image" href="${p.meeshoUrl || '#'}" ${p.meeshoUrl && p.meeshoUrl !== '#' ? 'target="_blank"' : ''}><img src="${p.image}" alt="${p.name}" onerror="this.replaceWith(document.createRange().createContextualFragment('${fallback.replace(/'/g,"&#39;")}'))"></a><div class="product-info"><p class="product-category">${p.category}</p><h3>${p.name}</h3><p>${p.description}</p><a class="card-link" href="${p.meeshoUrl || '#'}" ${p.meeshoUrl && p.meeshoUrl !== '#' ? 'target="_blank"' : ''}>Buy on Meesho <span>→</span></a></div></article>`;
  const requested = new URLSearchParams(location.search).get('category'); let active = requested || 'All';
  function render() { document.querySelectorAll('[data-product-grid]').forEach(grid => { let list = cfg.products.filter(p => active === 'All' || p.category === active); if (grid.dataset.limit) list = list.filter(p => p.featured).slice(0, Number(grid.dataset.limit)); grid.innerHTML = list.map(card).join(''); const empty = document.querySelector('.empty-state'); if(empty) empty.hidden = list.length > 0; }); }
  document.querySelectorAll('[data-filter]').forEach(btn => btn.addEventListener('click', () => { active=btn.dataset.filter; document.querySelectorAll('[data-filter]').forEach(b=>b.classList.toggle('active', b===btn)); render(); }));
  document.querySelectorAll('[data-filter]').forEach(b=>b.classList.toggle('active', b.dataset.filter===active)); render();
})();
