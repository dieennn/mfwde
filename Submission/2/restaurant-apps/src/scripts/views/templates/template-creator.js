import CONFIG from '../../globals/config';
import cutString from '../../utils/helper';

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="detail">
    <div>
      <img class="img-thumbnail" src="${
        restaurant.pictureId
          ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId
          : 'https://picsum.photos/id/666/800/450?grayscale'
      }"
        alt="${restaurant.name}">
    </div>
  
    
    <ul class="detail-info">
      <li><i title="restaurant" class="fa fa-store"></i>&nbsp;&nbsp;${
        restaurant.name
      }&nbsp;&nbsp;<i title="address" class="fa fa-map-marker-alt"></i>&nbsp;&nbsp;&nbsp;${
  restaurant.address
}, ${
  restaurant.city
}&nbsp;&nbsp;<i title="ratings" class="fa fa-star"></i>&nbsp;&nbsp;${
  restaurant.rating
}</li>
      <li>${restaurant.categories
        .map(
          (category) => `
            <span class="detail-category">${category.name}</span>
          `
        )
        .join('')}
      </li>
      <li><p class="">Description: ${restaurant.description}</p></li>
    </ul>


    <div class="detail-menu grid-2">
      <div class="detail-food">
        <h4>Foods</h4>
        <ol>
          ${restaurant.menus.foods
            .map(
              (food) => `
                <li><i class"fa fa-store"></i>${food.name}</li>
              `
            )
            .join('')}
        <ol>
      </div>
      <div class="detail-drink">
        <h4>Drinks</h4>
        <ol>
          ${restaurant.menus.drinks
            .map(
              (drink) => `
                <li>${drink.name}</li>
              `
            )
            .join('')}
        <ol>
      </div>
    </div>
    

    <h3 class="title-review">Reviews</h3>
    <div class="detail-review grid-3">
    ${restaurant.customerReviews
      .map(
        (review) =>
          `
          <div class="detail-review-item">
            <div class="review-header">
              <p class="review-name"><img class="review-avatar" src="https://robohash.org/${review.name}?set=set4" alt="avatar ${review.name}">&nbsp;${review.name}</p>
              <p class="review-date">${review.date}</p>
            </div>
            <div class="review-body">
              ${review.review}
            </div>
          </div>
        `
      )
      .join('')}
    </div>
    
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
      <p class="post-item__description">${cutString(
        restaurant.description,
        170
      )}...</p>
    </div>
  </article>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
