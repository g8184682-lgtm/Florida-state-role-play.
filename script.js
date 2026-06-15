document.addEventListener('DOMContentLoaded', function(){
  const buttons = document.querySelectorAll('.rules-nav button');
  const panels = document.querySelectorAll('.rules-panel[id]');

  function show(target){
    panels.forEach(p => {
      p.style.display = (p.id === target) ? 'block' : 'none';
    });
    buttons.forEach(b => b.classList.toggle('active', b.dataset.target === target));
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      show(btn.dataset.target);
      history.replaceState(null, '', '#' + btn.dataset.target);
    });
  });

  // On load, open hash or default to game
  const initial = (location.hash && location.hash.substring(1)) || 'game';
  show(initial);
});
