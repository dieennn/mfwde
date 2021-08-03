import data from "../DATA.json";
let elPosts = document.getElementsByClassName("posts")[0];
// 📍️📌️
for (let dtRestaurant of data.restaurants) {
  elPosts.innerHTML += `
  <article class="post-item">
    <img class="post-item__thumbnail" src="${dtRestaurant.pictureId}"
      alt="${dtRestaurant.name}">
    <div class="post-item__content">
      <div class="rate-n-location">
        <div class="post-item__location">📌️ : ${dtRestaurant.city}</div>
        <div class="post-item__rate">⭐️ : ${dtRestaurant.rating}</div>
      </div>
      <h1 class="post-item__title"><a href="#">${dtRestaurant.name}</a></h1>
      <p class="post-item__description">${dtRestaurant.description}</p>
    </div>
  </article>`;
}

let elFooter = document.getElementsByTagName("footer")[0];
let year = new Date().getFullYear();
let y = year === 2021 ? year : `2021 - ${year}`;
elFooter.innerHTML = `Copyright © ${y} - Intfd Restaurant`;
