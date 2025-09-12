// Theme toggle & render projects from JSON
(function(){
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const stored = localStorage.getItem('theme');
  if(stored){ document.documentElement.classList.toggle('dark', stored === 'dark'); }
  else{ document.documentElement.classList.toggle('dark', prefersDark); }

  const btn = document.getElementById('themeToggle');
  btn && btn.addEventListener('click', ()=>{
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  });

  // year
  const y = document.getElementById('year');
  if(y){ y.textContent = new Date().getFullYear(); }

  // Render projects
  fetch('/projects.json').then(r=>r.json()).then(items=>{
    const grid = document.getElementById('projectGrid');
    if(!grid) return;
    items.forEach(p=>{
      const card = document.createElement('article');
      card.className = 'card';
      const a = document.createElement('a');
      a.href = p.url || '#';
      a.target = p.url ? '_blank' : '';
      a.rel = p.url ? 'noreferrer' : '';
      const th = document.createElement('div');
      th.className = 'thumb';
      th.style.backgroundImage = p.cover ? `url(${p.cover})` : '';
      th.style.backgroundSize = 'cover';
      th.style.backgroundPosition = 'center';
      a.appendChild(th);
      card.appendChild(a);
      const body = document.createElement('div');
      body.className = 'body';
      body.innerHTML = `<h3>${p.title}</h3><p>${p.summary||''}</p>`;
      const tags = document.createElement('div');
      tags.className = 'tags';
      (p.tags||[]).forEach(t=>{
        const s = document.createElement('span');
        s.className = 'tag';
        s.textContent = t;
        tags.appendChild(s);
      });
      body.appendChild(tags);
      card.appendChild(body);
      grid.appendChild(card);
    });
  }).catch(()=>{});
})();
