import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

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
        <h1 class="latest__label">Latest Post</h1>
        <div id="restaurants" class="posts"></div>
      </div>
    </section>
    `;
  },

  async afterRender() {
    document.querySelector('.hero').style.display = 'block';
    const restaurants = await TheRestaurantDbSource.listRestaurant();
    console.log(restaurants);
    const restaurantContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });

    // Fungsi ini akan dipanggil setelah render()
  },
};

export default ListRestaurant;
