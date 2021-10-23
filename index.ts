// Import stylesheets
import './assets/style.css';
import CaseStudies from './assets/case-studies';
// @ts-ignore
screenLog.init();

const lessonsElement = document.getElementById('lessons');

// Programmatically adds content based on case studies assets.
CaseStudies.forEach((cs) => {
  const listEntry = document.createElement('li');
  const title = document.createElement('a');
  title.innerHTML = cs.name;
  title.setAttribute('HREF', cs.url);

  const descriptionNode = document.createTextNode(' - ' + cs.description);
  listEntry.append(title);
  listEntry.appendChild(descriptionNode);
  lessonsElement.appendChild(listEntry);
});
