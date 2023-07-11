const fetchUsersBtn = document.querySelector(".gallery__btn");
const userList = document.querySelector(".gallery__user-list");

fetchUsersBtn.addEventListener("click", () => {
  fetchUsers()
  .then((users) => renderUserList(users))
  .catch((error) => console.log(error));
  }
);

function fetchUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      console.log(response);
      return response.json();
    }
  );
}

function renderUserList(users) {
  const markup = users
    .map((user) => {
      return `<li class="gallery__item">
          <p class="gallery__p gallery__p--name"><b>Name</b>: ${user.name}</p>
          <p class="gallery__p gallery__p--email"><b>Email</b>: ${user.email}</p>
          <p class="gallery__p gallery__p--company"><b>Company</b>: ${user.company.name}</p>
          <p class="gallery__p gallery__p--phone"><b>Phone</b>: ${user.phone}</p>
        </li>`;
    })
    .join("");
  userList.innerHTML = markup;
}