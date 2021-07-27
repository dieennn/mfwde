import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavRestaurantIdb from '../../src/scripts/data/favorite-restaurant-idb';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: FavRestaurantIdb,
    restaurant,
  });
};

export { createLikeButtonPresenterWithRestaurant };
