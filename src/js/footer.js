require('../css/footer.scss');

function component () {
  var element = document.createElement('div');

  element.innerHTML = 'Footer';
  element.className = 'footer';

  return element;
}

document.body.appendChild(component());