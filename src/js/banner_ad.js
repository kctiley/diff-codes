require('../css/banner_ad.scss');

function component () {
  var element = document.createElement('div');
  element.innerHTML = 'Banner ad';
  element.className = 'banner-ad';
  return element;
}

var footer = document.getElementsByClassName("footer")[0];

footer.appendChild(component());