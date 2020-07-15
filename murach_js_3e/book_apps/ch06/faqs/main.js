'use strict';

//const $ = (id) => document.getElementById(id);

// the event handler for the click event of each h2 element
function toggle(e) {
  e.preventDefault();

  const h2 = this; // clicked h2 tag
  const div = h2.nextElementSibling; // h2 tag's sibling div tag

  // toggle plus and minus image in h2 elements by adding or removing a class
  if (h2.hasAttribute('class')) {
    h2.removeAttribute('class');
  } else {
    h2.setAttribute('class', 'minus');
  }

  // toggle div visibility by adding or removing a class
  if (div.hasAttribute('class')) {
    div.removeAttribute('class');
  } else {
    div.setAttribute('class', 'open');
  }
}

window.onload = function () {
  // get the h2 tags
  const h2Elements = document.getElementsByTagName('h2');

  // attach event handler for each h2 tag
  for (const h2 of h2Elements) {
    h2.onclick = toggle;
  }

  // set focus on first h2 tag's <a> tag
  h2Elements[0].firstChild.focus();
};
