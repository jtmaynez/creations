const areas = document.querySelectorAll('.clickable-area');

areas.forEach(area => {
  area.addEventListener('click', function(event) {
    event.preventDefault();
    const link = this.getAttribute('href');
    window.location.href = link;
  });
});
