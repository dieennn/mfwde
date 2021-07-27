import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';
import Loading from '../templates/loading';

const ListRestaurant = {
  async render() {
    return `
    <section class="content">
      <article class="headline">
        <figure class="headline__figure">
          <img src="/images/heros/hero-image_1.jpg" alt="Intfd Fact Sheet">
          <figcaption>Intfd February 2020 Infographic, 235k Members</figcaption>
        </figure>
        <div class="headline__content">
          <h1 class="headline__title">#ceritaintfd : Story of Intfd</h1>
          <p class="headline__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eum
            facere nostrum officiis qui quidem ratione similique, soluta veniam voluptatum. Accusantium ad amet
            asperiores, aut commodi corporis dicta distinctio ducimus expedita itaque laudantium magnam maiores,
            nobis obcaecati officiis provident quasi qui quos repellat rerum saepe sint soluta veniam vero
            vitae, voluptas voluptate voluptatem. Esse nobis non nulla optio vero. Laudantium!</p>
          <button class="headline__button">Read More</button>
        </div>
      </article>
      <div class="latest">
        <div id="loading" class="loading"></div>
        <div class="form-search">
          <input type="text" class="form-control" name="search">
          <button id="btn-search" class="btn btn-primary" title="Search Restaurant"><i class="fa fa-search"></i></button>
        </div>
        <h1 class="latest__label">Latest Post</h1>
        <div id="restaurants" class="posts grid-4"></div>
      </div>
    </section>
    `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('#restaurants');
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
      if (inputSearch.value.length) {
        loading.style.display = 'block';
        try {
          const restaurantSearch = await TheRestaurantDbSource.searchRestaurant(
            inputSearch.value
          );
          restaurantContainer.innerHTML = '';
          restaurantSearch.forEach((restaurant) => {
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
      } else {
        inputSearch.focus();
      }
    });

    // Fungsi ini akan dipanggil setelah render()
  },
};

export default ListRestaurant;
