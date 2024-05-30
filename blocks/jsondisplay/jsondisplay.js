import { fetchPlaceholders } from '../../scripts/aem.js';

//import { createElement } from '../../scripts/scripts.js';

console.log("hello world");

function jsondisplay() {
  //await loadBlocks(document);
  const jsondisplay = document.querySelector('.jsondisplay.block div div');
  var URLjsondisplay = jsondisplay.innerHTML;
  console.log(URLjsondisplay);
  console.log("hello world 2");
  
  // Make a GET request
  fetch(URLjsondisplay).then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    Items = response.json();
    return Items;
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
  
}
jsondisplay();