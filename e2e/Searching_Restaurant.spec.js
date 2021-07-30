const assert = require('assert');

Feature('Searching Restaurants');

Before((I) => {
  I.amOnPage('/');
});

Scenario('Search restaurants found', async (I) => {
  I.seeElement('#inp-search');

  const titles = [];

  for (let i = 1; i <= 3; i++) {
    I.seeElement('.post-item__title a');
    I.click(locate('.post-item__title a').at(i));
    I.seeElement('#title-restaurant');
    titles.push(await I.grabTextFrom('#title-restaurant'));
    I.amOnPage('/');
  }

  const titleSearchResult = [];

  for (let b = 1; b <= titles.length; b++) {
    I.fillField('#inp-search', titles[b - 1]);
    I.click('#btn-search');
    I.seeElement('.post-item__title a');
    I.click(locate('.post-item__title a').at(1));
    const titleRestaurant = await I.grabTextFrom('#title-restaurant');
    titleSearchResult.push(titleRestaurant);
    assert.strictEqual(
      titles[titles.indexOf(titleRestaurant)],
      titleRestaurant,
    );
    I.amOnPage('/');
  }

  // assert.strictEqual(titles.length, titleSearchResult.length);
});

Scenario('Search restaurants not found', async (I) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date().toLocaleDateString('id-ID', options);
  const time = new Date().toLocaleTimeString();

  I.amOnPage('/');
  I.seeElement('#inp-search');
  I.fillField('#inp-search', `${date} ${time}`);
  I.click('#btn-search');

  I.seeElement('#empty-search');
});
