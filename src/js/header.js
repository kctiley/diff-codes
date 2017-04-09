require('../css/header.scss');

function component () {
  var element = document.createElement('div');

  element.innerHTML = 'Job Posting';
  element.className = 'header';

  return element;
}

document.body.appendChild(component());