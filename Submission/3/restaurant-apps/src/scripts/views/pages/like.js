import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';
import Loading from '../templates/loading';

const Like = {
  async render() {
    return `
      <section class="container">
        <div class="latest">
          <h1 class="latest__label">Like Restaurant</h1>
          <div id="restaurant" class="posts"></div>
          <div id="empty-like"></div>
          <div id="loading" class="loading"></div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const loading = document.querySelector('#loading');
    const errorContainer = document.querySelector('#empty-like');
    const restaurant = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#restaurant');
    loading.innerHTML = Loading();
    try {
      if (restaurant.length) {
        // eslint-disable-next-line no-shadow
        restaurant.forEach((restaurant) => {
          restaurantContainer.innerHTML +=
            createRestaurantItemTemplate(restaurant);
        });
      } else {
        errorContainer.innerHTML = 'Data restaurant liked not available';
      }
      loading.style.display = 'none';
    } catch (error) {
      errorContainer.innerHTML = `<strong>Error: ${error}, try to refresh page!</strong>`;
      loading.style.display = 'none';
    }
  },
};

export default Like;
