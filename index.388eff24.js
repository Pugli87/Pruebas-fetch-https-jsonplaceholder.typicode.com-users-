const e=document.querySelector(".gallery__btn"),l=document.querySelector(".gallery__user-list");e.addEventListener("click",()=>{fetch("https://jsonplaceholder.typicode.com/users").then(e=>{if(!e.ok)throw Error(e.status);return console.log(e),e.json()}).then(e=>(function(e){let a=e.map(e=>`<li class="gallery__item">
          <p class="gallery__p gallery__p--name"><b>Name</b>: ${e.name}</p>
          <p class="gallery__p gallery__p--email"><b>Email</b>: ${e.email}</p>
          <p class="gallery__p gallery__p--company"><b>Company</b>: ${e.company.name}</p>
          <p class="gallery__p gallery__p--phone"><b>Phone</b>: ${e.phone}</p>
        </li>`).join("");l.innerHTML=a})(e)).catch(e=>console.log(e))});
//# sourceMappingURL=index.388eff24.js.map
