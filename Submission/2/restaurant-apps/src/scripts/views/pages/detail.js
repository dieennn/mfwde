import UrlParser from '../../routes/url-parser';
import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <section>
        <div class="latest">
          <div id="restaurant" class="posts"></div>
        </div>
      </section>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    document.querySelector('.hero').style.display = 'none';
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await TheRestaurantDbSource.detailRestaurant(url.id);
    console.log(restaurant);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
  },
};

export default Detail;
