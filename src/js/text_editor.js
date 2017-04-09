require('../css/text_editor.scss');

function component () {
  var element = document.createElement('div');

  element.innerHTML = 'Text editor';
  element.className = 'text-editor';

  return element;
}

document.body.appendChild(component());