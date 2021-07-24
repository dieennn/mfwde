import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class TheRestaurantDbSource {
  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async reviewRestaurant(data) {
    const rawResponse = await fetch(API_ENDPOINT.POST_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG,
      },
      body: JSON.stringify(data),
    });
    return rawResponse;
  }

  static async searchRestaurant(id) {
    const response = await fetch(API_ENDPOINT.SEARCH(id));
    const responseJson = await response.json();
    return responseJson.restaurants;
  }
}

export default TheRestaurantDbSource;
