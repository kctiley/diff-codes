require('../css/text_editor_menu.scss');

function component () {
  var element = document.createElement('div');

  element.innerHTML = 'Text editor menu';
  element.className = 'text-editor-menu';

  return element;
}

document.body.appendChild(component());