document.addEventListener( 'DOMContentLoaded', function () {
  const container = document.querySelector( '.button-marker-container' );

  function deactivateActiveButtons() {
    const activeButton = document.querySelector( '.button-marker[data-active]' );
    if ( activeButton ) {
      activeButton.removeAttribute( 'data-active' );
    }
  }

  container.addEventListener( 'click', function ( event ) {
    let target = event.target;

    if ( target.classList.contains( 'cross' ) ) {
      target = target.parentNode;
    }

    if ( !target.classList.contains( 'button-marker' ) ) {
      deactivateActiveButtons();
      return;
    }

    if (target.hasAttribute('data-active')) {
      deactivateActiveButtons();
    } else {
      deactivateActiveButtons();
      target.setAttribute('data-active', 'true');
    }
  } );
} );
