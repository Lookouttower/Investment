
(function(){
  const nav = document.querySelector('.nav');
  const menuBtn = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  window.addEventListener('scroll',()=>{ nav.classList.toggle('scrolled', window.scrollY>18); });
  if(menuBtn){
    menuBtn.addEventListener('click',()=>{
      navLinks.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', navLinks.classList.contains('open'));
    });
  }
  document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));

  document.querySelectorAll('.faq-q').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const item = btn.closest('.faq-item');
      item.classList.toggle('open');
      btn.querySelector('.faq-icon').textContent = item.classList.contains('open') ? '−' : '+';
    });
  });

  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.property-card');
  filterBtns.forEach(btn=>{
    btn.addEventListener('click',()=>{
      filterBtns.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      cards.forEach(card=>{
        const show = filter === 'all' || card.dataset.region === filter;
        card.style.display = show ? '' : 'none';
      });
    });
  });
})();
