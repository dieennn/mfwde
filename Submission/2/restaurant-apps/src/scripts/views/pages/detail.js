/* eslint-disable no-alert */
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
      <div id="loading" class="loading"></div>
      <div class="main">
        <section id="detail-restaurant" class=""></section>

        <div id="likeButtonContainer"></div>

        <div class="form-review">
          <fieldset>
            <legend>Send Review</legend>
            <div class="form-input">
              <label for="inputName" class="form-label">Name</label>
              <input type="text" class="form-control" id="inputName" autocomplete="off">
            </div>
            <div class="form-input">
              <label for="inputReview" class="form-label">Review</label>
              <textarea type="text" class="form-control" id="inputReview" rows="4" cols="50"></textarea>
            </div>
            <button id="submit-review" type="submit" class="btn btn-blue">Submit</button>
          </fieldset>
        </div>

      </div>
    </div>
    `;
  },

  async afterRender() {
    // document.querySelector('.hero').style.display = 'none';
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
      restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant,
      });

      main.style.display = 'block';
      loading.style.display = 'none';
    } catch (error) {
      restaurantContainer.innerHTML = `<strong>Error: ${error}, try to refresh page!</strong>`;
      main.style.display = 'block';
      loading.style.display = 'none';
      formReview.style.display = 'none';
    }

    btnSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      if (nameInput.value === '') {
        alert('Name is required');
        nameInput.focus();
      } else if (reviewInput.value === '') {
        alert('Review is required');
        reviewInput.focus();
      } else {
        PostReview(url, nameInput.value, reviewInput.value);
        nameInput.value = '';
        reviewInput.value = '';
      }
    });
  },
};

export default Detail;
