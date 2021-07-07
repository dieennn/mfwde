import ListRestaurant from '../views/pages/home';
import DetailRestaurant from '../views/pages/detail';

const routes = {
  '/': ListRestaurant, // default page
  '/home': ListRestaurant,
  '/detail/:id': DetailRestaurant,
};

export default routes;
