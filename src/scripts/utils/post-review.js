import TheRestaurantDbSource from '../data/therestaurantdb-source';

const PostReview = (url, name, review) => {
  const dataInput = {
    id: url.id,
    name,
    review,
  };

  TheRestaurantDbSource.reviewRestaurant(dataInput);

  const reviewContainer = document.querySelector('.detail-review');
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date().toLocaleDateString('id-ID', options);
  const newReview = `
    <div class="detail-review-item">
      <div class="review-header">
        <p class="review-name"><img class="review-avatar" data-src="https://robohash.org/${name}?set=set4" alt="avatar ${name}">&nbsp;${name}</p>
        <p class="review-date">${date}</p>
      </div>
      <div class="review-body">
        ${review}
      </div>
    </div>
    `;
  reviewContainer.innerHTML += newReview;
};

export default PostReview;
