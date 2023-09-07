document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.map-with-markers');
  let activeButton = null;

  container.addEventListener('click', function(event) {
    if (activeButton) {
      activeButton.removeAttribute('data-active');
    }

    let target = event.target;

    if (target.classList.contains('cross')) {
      target = target.parentNode;
    }

    if (target.classList.contains('button-marker')) {
      if (activeButton === event.target) {
        activeButton = null;
        return;
      }

      activeButton = event.target;
      activeButton.setAttribute('data-active', 'true');
    } else {
      activeButton = null;
    }
  });
});
