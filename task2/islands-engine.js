const IslandRegistry = {
    'counter': (container) => {
      let count = 0;
  
      const display = container.querySelector('.count-display');
      const inc = container.querySelector('.btn-increase');
      const dec = container.querySelector('.btn-decrease');
  
      inc.addEventListener('click', () => {
        count++;
        display.textContent = count;
      });
  
      dec.addEventListener('click', () => {
        if (count > 0) count--;
        display.textContent = count;
      });
    },
  
    'color-picker': (container) => {
      const preview = container.querySelector('.preview-box');
      const buttons = container.querySelectorAll('button[data-color]');
  
      buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
          const color = e.target.getAttribute('data-color');
          preview.style.backgroundColor = color;
        });
      });
    }
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    const islands = document.querySelectorAll('[data-island-type]');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const type = entry.target.getAttribute('data-island-type');
  
          if (IslandRegistry[type]) {
            IslandRegistry[type](entry.target);
            observer.unobserve(entry.target);
          }
        }
      });
    }, { threshold: 0.1 });
  
    islands.forEach(island => observer.observe(island));
  });