// ── MENU DATA ──
  const platos = [
    { id:1, cat:'entradas',    emoji:'🥗', nombre:'Ensalada Tropical',      desc:'Mix de frutas, lechuga y aderezo de maracuyá.',          precio:'$12.000', color:'#D1FAE5' },
    { id:2, cat:'entradas',    emoji:'🍢', nombre:'Pinchos de Pollo',        desc:'Pollo marinado con especias y salsa criolla.',            precio:'$14.000', color:'#FEF3C7' },
    { id:3, cat:'entradas',    emoji:'🫕', nombre:'Sopa de Lentejas',        desc:'Receta casera con verduras frescas del día.',             precio:'$10.000', color:'#FFEDD5' },
    { id:4, cat:'principales', emoji:'🍛', nombre:'Bandeja Paisa',           desc:'Fríjoles, arroz, chicharrón, carne y más. El clásico.', precio:'$28.000', color:'#FEE2E2' },
    { id:5, cat:'principales', emoji:'🥘', nombre:'Sancocho Especial',       desc:'Caldo contundente con pollo, yuca y mazorca.',           precio:'$22.000', color:'#FEF9C3' },
    { id:6, cat:'principales', emoji:'🐟', nombre:'Trucha al Ajillo',        desc:'Trucha fresca con mantequilla, ajo y limón.',            precio:'$26.000', color:'#DBEAFE' },
    { id:7, cat:'postres',     emoji:'🍮', nombre:'Flan de Coco',            desc:'Cremoso flan con caramelo y ralladura de coco.',         precio:'$8.000',  color:'#FDF4FF' },
    { id:8, cat:'postres',     emoji:'🍚', nombre:'Arroz con Leche',         desc:'Receta de abuela con canela y panela.',                  precio:'$7.000',  color:'#FEF3C7' },
    { id:9, cat:'bebidas',     emoji:'🥤', nombre:'Limonada de Coco',        desc:'Fresca, cremosa y con toque de menta.',                  precio:'$6.000',  color:'#D1FAE5' },
    { id:10,cat:'bebidas',     emoji:'🫖', nombre:'Agua Panela con Limón',   desc:'Bebida típica, caliente o fría.',                        precio:'$4.000',  color:'#FEF9C3' },
  ];
 
  function renderMenu(filter) {
    const grid = document.getElementById('menuGrid');
    const items = filter === 'todos' ? platos : platos.filter(p => p.cat === filter);
    grid.innerHTML = items.map(p => `
      <div class="card">
        <div class="card-img" style="background:${p.color}">${p.emoji}</div>
        <div class="card-body">
          <div class="card-tag">${p.cat}</div>
          <div class="card-name">${p.nombre}</div>
          <div class="card-desc">${p.desc}</div>
          <div class="card-footer">
            <span class="card-price">${p.precio}</span>
            <button class="card-btn" onclick="pedirWhatsApp('${p.nombre}')">Pedir</button>
          </div>
        </div>
      </div>`).join('');
  }
 
  function filterMenu(cat, btn) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    renderMenu(cat);
  }
 
  function pedirWhatsApp(nombre) {
    const msg = encodeURIComponent(`Hola! Quiero pedir: ${nombre} 🍽️`);
    window.open(`https://wa.me/573000000000?text=${msg}`, '_blank');
  }
 
  renderMenu('todos');
 
  // ── NAV MOBILE ──
  function toggleMenu() { document.getElementById('mobileMenu').classList.toggle('open'); }
  function closeMenu()  { document.getElementById('mobileMenu').classList.remove('open'); }
 
  // ── FORM ──
  function handleSubmit(e) {
    e.preventDefault();
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
    e.target.reset();
  }
 
  // ── NAV SCROLL ──
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    nav.style.background = window.scrollY > 40
      ? 'rgba(28,16,8,0.97)' : 'rgba(28,16,8,0.92)';
  });
 
  // ── INTERSECTION ANIMATIONS ──
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: .1 });
 
  document.querySelectorAll('.card, .testi-card, .feat, .info-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    observer.observe(el);
  });