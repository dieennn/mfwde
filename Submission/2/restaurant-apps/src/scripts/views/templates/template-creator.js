import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <article class="post-item">
    <img class="post-item__thumbnail" src="${
      restaurant.pictureId
        ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId
        : 'https://picsum.photos/id/666/800/450?grayscale'
    }"
      alt="${restaurant.name}">
  </article>
  
  <article class="post-item">
    <div class="post-item__content">
      <h1 class="post-item__title"><a href="${`/#/detail/${restaurant.id}`}">${
  restaurant.name
}</a></h1>
      <div class="rate-n-location" style="border-top: 2px solid #eee; padding-top: 0.5rem;">
        <div class="post-item__location">📌️ : ${restaurant.city}</div>
        <div class="post-item__rate">⭐️ : ${restaurant.rating}</div>
      </div>
      <div class="post-item__category">
        <strong>categories: ${restaurant.categories.map(
          (categories) => ` ${categories.name}`
        )}</strong>
      </div>
      <div class="post-item__category"><strong>address: ${
        restaurant.address
      }</strong></div>
    </div>
  </article>

  <article class="post-item">
    <div class="post-item__content">
      <p class="post-item__description">${restaurant.description}</p>
    </div>
  </article>

  <div class="detail-menus">
    ${Object.keys(restaurant.menus).map((menus) => `${menus}`)}
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <article class="post-item">
    <img class="post-item__thumbnail" src="${
      restaurant.pictureId
        ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId
        : 'https://picsum.photos/id/666/800/450?grayscale'
    }"
      alt="${restaurant.name}">
    <div class="post-item__content">
      <div class="rate-n-location">
        <div class="post-item__location">📌️ : ${restaurant.city}</div>
        <div class="post-item__rate">⭐️ : ${restaurant.rating}</div>
      </div>
      <h1 class="post-item__title"><a href="${`/#/detail/${restaurant.id}`}">${
  restaurant.name
}</a></h1>
      <p class="post-item__description">${restaurant.description}</p>
    </div>
  </article>
`;

export { createRestaurantItemTemplate, createRestaurantDetailTemplate };
