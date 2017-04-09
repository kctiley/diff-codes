require('../css/logo.scss');

function component () {
  var element = document.createElement('div');

  element.className = 'logo';

  return element;
}

var header = document.getElementsByClassName("header")[0];

header.appendChild(component());