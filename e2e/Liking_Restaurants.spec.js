/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
const assert = require('assert');

Feature('Favorite Restaurant');

Before((I) => {
  I.amOnPage('/#/favorite');
});

const firstCondition = 'Data restaurant liked not available';

Scenario('showing empty favorite restaurant', (I) => {
  I.seeElement('#empty-like');
  I.see(firstCondition, '#empty-like');
});

Scenario('liking one restaurant', async (I) => {
  I.see(firstCondition, '#empty-like');

  I.amOnPage('/');

  I.seeElement('.post-item');
  const firstCard = locate('.post-item__title a').first();
  const firstCardTitle = await I.grabTextFrom(firstCard);
  I.click(firstCard);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.post-item');
  const likedCardTitle = await I.grabTextFrom('.post-item__title');

  assert.strictEqual(firstCardTitle, likedCardTitle);
});

Scenario('unliking one restaurant', async (I) => {
  I.see(firstCondition, '#empty-like');

  I.amOnPage('/');

  // melihat card restaurant pertama dan mengkliknya ke detail
  I.seeElement('.post-item');
  const firstCard = locate('.post-item__title a').first();
  const firstCardTitle = await I.grabTextFrom(firstCard);
  I.click(firstCard);

  // melike restaurant di detail
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // kembali ke halaman fav dan membandingakan dg restaurant yg diklik
  I.amOnPage('/#/favorite');
  I.seeElement('.post-item');
  const likedCardTitle = await I.grabTextFrom('.post-item__title a');
  assert.strictEqual(firstCardTitle, likedCardTitle);

  // mengklik card restaurant yg ada di fav
  I.click(likedCardTitle);

  // mengunlike restaurant yang ada di fav
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see(firstCondition, '#empty-like');
});

Scenario('Customer review', async (I) => {
  I.see(firstCondition, '#empty-like');

  I.amOnPage('/');

  I.seeElement('.post-item__title a');
  I.click(locate('.post-item__title a').first());

  I.seeElement('.form-review fieldset');

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date().toLocaleDateString('id-ID', options);

  const textReview = `Review from E2E testing at ${date}`;
  I.fillField('inputName', 'Intfd');
  I.fillField('inputReview', textReview);

  I.click('#submit-review');

  const lastReview = locate('.review-body').last();
  const textLastReview = await I.grabTextFrom(lastReview);

  assert.strictEqual(textReview, textLastReview);
});
