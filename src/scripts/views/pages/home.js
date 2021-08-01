/* eslint-disable operator-linebreak */
import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';
import Loading from '../templates/loading';

const ListRestaurant = {
  async render() {
    return `
    <section class="content">
      <div class="latest">
        <div id="loading" class="loading"></div>
        <div class="form-search">
          <label>
            Find something ?
            <input id="inp-search" type="text" class="form-control" name="search">
          </label>
          <button id="btn-search" class="btn btn-primary" title="Search Restaurant"><i class="fa fa-search"></i></button>
        </div>
        <h1 class="latest__label">Latest Post</h1>
        <div id="restaurants" class="posts grid-4"></div>
        <div id="empty-search"></div>
      </div>
    </section>
    `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('#restaurants');
    const errorContainer = document.querySelector('#empty-search');
    const loading = document.querySelector('#loading');
    const btnSearch = document.querySelector('#btn-search');
    const inputSearch = document.querySelector('input[name=search]');

    loading.innerHTML = Loading();
    restaurantContainer.style.display = 'none';

    try {
      const restaurants = await TheRestaurantDbSource.listRestaurant();
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML +=
          createRestaurantItemTemplate(restaurant);
      });
      restaurantContainer.style.display = 'grid';
      loading.style.display = 'none';
    } catch (error) {
      restaurantContainer.innerHTML = `<strong>Error: ${error}, try to refresh page!</strong>`;
      restaurantContainer.style.display = 'grid';
      loading.style.display = 'none';
    }

    btnSearch.addEventListener('click', async (e) => {
      e.preventDefault();
      // if (inputSearch.value.length) {
      loading.style.display = 'block';
      try {
        const restaurantSearch = await TheRestaurantDbSource.searchRestaurant(
          inputSearch.value,
        );
        restaurantContainer.innerHTML = '';
        if (restaurantSearch.length) {
          restaurantSearch.forEach((restaurant) => {
            restaurantContainer.innerHTML +=
              createRestaurantItemTemplate(restaurant);
          });
          errorContainer.innerHTML = '';
        } else {
          errorContainer.innerHTML = 'Data restaurant search not available';
        }
        restaurantContainer.style.display = 'grid';
        loading.style.display = 'none';
      } catch (error) {
        restaurantContainer.innerHTML = `<strong>Error: ${error}, try to refresh page!</strong>`;
        restaurantContainer.style.display = 'grid';
        loading.style.display = 'none';
      }
      // } else {
      //   inputSearch.focus();
      // }
    });

    // Fungsi ini akan dipanggil setelah render()
  },
};

export default ListRestaurant;
