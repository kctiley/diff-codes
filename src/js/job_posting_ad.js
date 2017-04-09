require('../css/job_posting_ad.scss');

function component () {
  var element = document.createElement('div');

  element.innerHTML = 'Job Posting';
  element.className = 'job-posting-ad';

  return element;
}

document.body.appendChild(component());