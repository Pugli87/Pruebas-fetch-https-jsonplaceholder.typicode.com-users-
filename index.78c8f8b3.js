!function(){var n=document.querySelector(".gallery__btn"),e=document.querySelector(".gallery__user-list");n.addEventListener("click",function(){fetch("https://jsonplaceholder.typicode.com/users").then(function(n){if(!n.ok)throw Error(n.status);return console.log(n),n.json()}).then(function(n){var l;return l=n.map(function(n){return'<li class="gallery__item">\n          <p class="gallery__p gallery__p--name"><b>Name</b>: '.concat(n.name,'</p>\n          <p class="gallery__p gallery__p--email"><b>Email</b>: ').concat(n.email,'</p>\n          <p class="gallery__p gallery__p--company"><b>Company</b>: ').concat(n.company.name,'</p>\n          <p class="gallery__p gallery__p--phone"><b>Phone</b>: ').concat(n.phone,"</p>\n        </li>")}).join(""),void(e.innerHTML=l)}).catch(function(n){return console.log(n)})})}();
//# sourceMappingURL=index.78c8f8b3.js.map