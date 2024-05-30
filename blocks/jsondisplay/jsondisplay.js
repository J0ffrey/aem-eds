import { fetchPlaceholders } from '../../scripts/aem.js';

//import { createElement } from '../../scripts/scripts.js';

console.log("hello world");

var getJSON = function(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';
  xhr.onload = function() {
    var status = xhr.status;
    if (status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  };
  xhr.send();
};

function truncate(str, n){
  return (str.length > n) ? str.slice(0, n-1) + '...' : str;
};


function jsondisplay() {

  //await loadBlocks(document);
  const jsondisplay = document.querySelector('.jsondisplay.block div div');
  var URLjsondisplay = jsondisplay.innerHTML;
  console.log(URLjsondisplay);
  console.log("hello world 2");

  jsondisplay.remove();
  
  // Make a GET request
  var jsonURL = "http://localhost:3000"+URLjsondisplay;

  getJSON(jsonURL,
  function(err, jsondata) {
    if (err !== null) {
      console.log('Something went wrong: ' + err);
    } else {
      console.log(jsondata);

      const myArticle = document.createElement("article");
      const myList = document.createElement("ul");

      myArticle.appendChild(myList);
      document.querySelector('.jsondisplay.block').append(myArticle);


      for (const course of jsondata.data) {
        
        const listItem = document.createElement("li");
        const listItemdtitle = document.createElement("h3");
        const listItemdesc = document.createElement("p");
        listItemdesc.className = "description";
        const listItempdt = document.createElement("p");
        listItempdt.className = "product";
        const listItemduration = document.createElement("p");
        listItemduration.className = "duration";
        const listItemrole = document.createElement("p");
        listItemrole.className = "role";
        const listItemButton = document.createElement("a");
        listItemButton.className = "btn";
        listItemButton.setAttribute("href", course.path);


        myList.appendChild(listItem);
        listItem.appendChild(listItemdtitle);
        listItem.appendChild(listItemdesc);
        listItem.appendChild(listItempdt);
        listItem.appendChild(listItemduration);
        listItem.appendChild(listItemrole);
        listItem.appendChild(listItemButton);

        listItemdesc.textContent = truncate(course.description, 400);
        listItempdt.textContent = course.products;
        listItemdtitle.textContent = truncate(course.name, 70);
        listItemduration.textContent = "Duration: "+course.duration;
        listItemrole.textContent = "Role: "+course.role;
        listItemButton.textContent = "Get Course details";

        myList.appendChild(listItem);
        //document.querySelector('.jsondisplay.block div div').append(listItem);
        //console.log(listItem);
      }

      

    }
  });

  console.log(jsonURL);

}
jsondisplay();