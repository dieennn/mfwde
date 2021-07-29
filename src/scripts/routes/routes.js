import ListRestaurant from '../views/pages/home';
import DetailRestaurant from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': ListRestaurant, // default page
  '/home': ListRestaurant,
  '/favorite': Like,
  '/detail/:id': DetailRestaurant,
};

export default routes;
