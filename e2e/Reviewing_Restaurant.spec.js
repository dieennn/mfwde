const assert = require('assert');

Feature('Reviewing Restaurants');

Before((I) => {
  I.amOnPage('/');
});

Scenario('Post review restaurant', async (I) => {
  I.seeElement('.post-item__title a');
  I.click(locate('.post-item__title a').first());

  I.seeElement('.form-review fieldset');

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date().toLocaleDateString('id-ID', options);
  const time = new Date().toLocaleTimeString();

  const textReview = `Review from E2E testing at ${date} ${time}`;
  I.fillField('inputName', 'Intfd');
  I.fillField('inputReview', textReview);

  I.click('#submit-review');

  const lastReview = locate('.review-body').last();
  const textLastReview = await I.grabTextFrom(lastReview);

  assert.strictEqual(textReview, textLastReview);
});
