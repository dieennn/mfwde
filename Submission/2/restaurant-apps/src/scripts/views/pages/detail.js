import UrlParser from '../../routes/url-parser';
import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import PostReview from '../../utils/post-review';
import Loading from '../templates/loading';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <div class="container">
      <div id="loading"></div>
      <div class="main">
        <section id="detail-restaurant" class=""></section>

        <div id="likeButtonContainer"></div>

        <div class="form-review">
          <form>
            <div class="mb-3">
              <label for="inputName" class="form-label">Name</label>
              <input type="text" class="form-control" id="inputName" autocomplete="off">
            </div>
            <div class="mb-3">
              <label for="inputReview" class="form-label">Review</label>
              <input type="text" class="form-control" id="inputReview" autocomplete="off">
            </div>
            <button id="submit-review" type="submit" class="btn2">Submit</button>
          </form>
        </div>

      </div>
    </div>
    `;
  },

  async afterRender() {
    document.querySelector('.hero').style.display = 'none';
    const loading = document.querySelector('#loading');
    const main = document.querySelector('.main');
    const restaurantContainer = document.querySelector('#detail-restaurant');

    const formReview = document.querySelector('.form-review');
    const btnSubmit = document.querySelector('#submit-review');
    const nameInput = document.querySelector('#inputName');
    const reviewInput = document.querySelector('#inputReview');

    const url = UrlParser.parseActiveUrlWithoutCombiner();

    loading.innerHTML = Loading();
    main.style.display = 'none';

    try {
      const restaurant = await TheRestaurantDbSource.detailRestaurant(url.id);
      console.log(restaurant);
      restaurantContainer.innerHTML =
        createRestaurantDetailTemplate(restaurant);

      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        data,
      });

      main.style.display = 'block';
      loading.style.display = 'none';
    } catch (error) {
      restaurantContainer.innerHTML = `Error: ${error}, try to refresh page!`;
      main.style.display = 'block';
      loading.style.display = 'none';
      formReview.style.display = 'none';
    }

    btnSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      if (nameInput.value === '' || reviewInput.value === '') {
        alert('Inputan tidak boleh ada yang kosong');
        nameInput.value = '';
        reviewInput.value = '';
      } else {
        PostReview(url, nameInput.value, reviewInput.value);
        nameInput.value = '';
        reviewInput.value = '';
      }
    });
  },
};

export default Detail;
