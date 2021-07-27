import FavoriteRestaurantSearchPresenter from '../src/scripts/views/pages/liked-restarants/favorite-restaurant-search-presenter';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import FavoriteRestaurantSearchView from '../src/scripts/views/pages/liked-restarants/favorite-restaurant-search-view';

describe('Searching movies', () => {
  let presenter;
  let favoriteRestaurants;
  let view;

  const searchRestaurants = (query) => {
    const queryElement = document.getElementById('query');
    queryElement.value = query;
    queryElement.dispatchEvent(new Event('change'));
  };

  const setRestaurantSearchContainer = () => {
    view = new FavoriteRestaurantSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  const constructPresenter = () => {
    favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);
    presenter = new FavoriteRestaurantSearchPresenter({
      favoriteRestaurants,
      view,
    });
  };

  beforeEach(() => {
    setRestaurantSearchContainer();
    constructPresenter();
  });

  describe('When query is not empty', () => {
    it('should be able to capture the query typed by the user', () => {
      searchRestaurants('film a');

      expect(presenter.latestQuery).toEqual('film a');
    });

    it('should ask the model to search for movies', () => {
      searchRestaurants('film a');

      expect(favoriteRestaurants.searchRestaurants).toHaveBeenCalledWith(
        'film a'
      );
    });

    /* it('should show the found movies', () => {
      presenter._showFoundRestaurants([{ id: 1 }]);
      expect(document.querySelectorAll('.movie-item').length).toEqual(1);

      presenter._showFoundRestaurants([
        {
          id: 1,
          title: 'Satu',
        },
        {
          id: 2,
          title: 'Dua',
        },
      ]);
      expect(document.querySelectorAll('.movie-item').length).toEqual(2);
    });

    it('should show the title of the found movies', () => {
      presenter._showFoundRestaurants([
        {
          id: 1,
          title: 'Satu',
        },
      ]);
      expect(
        document.querySelectorAll('.movie__title').item(0).textContent
      ).toEqual('Satu');
    });

    it('should show - when the movie returned does not contain a title', (done) => {
      document
        .getElementById('movies')
        .addEventListener('movies:updated', () => {
          const movieTitles = document.querySelectorAll('.movie__title');
          expect(movieTitles.item(0).textContent).toEqual('-');

          done();
        });

      favoriteRestaurants.searchRestaurants
        .withArgs('film a')
        .and.returnValues([{ id: 444 }]);

      searchRestaurants('film a');
    }); */
  });

  /* describe('When query is empty', () => {
    it('should capture the query as empty', () => {
      searchRestaurants(' ');
      expect(presenter.latestQuery.length).toEqual(0);

      searchRestaurants('    ');
      expect(presenter.latestQuery.length).toEqual(0);

      searchRestaurants('');
      expect(presenter.latestQuery.length).toEqual(0);

      searchRestaurants('\t');
      expect(presenter.latestQuery.length).toEqual(0);
    });

    it('should show all favorite movies', () => {
      searchRestaurants('    ');

      expect(favoriteRestaurants.getAllRestaurants).toHaveBeenCalled();
    });
  });

  describe('When no favorite movies could be found', () => {
    it('should show the empty message', (done) => {
      document
        .getElementById('movies')
        .addEventListener('movies:updated', () => {
          expect(
            document.querySelectorAll('.movie-item__not__found').length
          ).toEqual(1);

          done();
        });

      favoriteRestaurants.searchRestaurants.withArgs('film a').and.returnValues([]);

      searchRestaurants('film a');
    });

    it('should not show any movie', (done) => {
      document
        .getElementById('movies')
        .addEventListener('movies:updated', () => {
          expect(document.querySelectorAll('.movie-item').length).toEqual(0);
          done();
        });

      favoriteRestaurants.searchRestaurants.withArgs('film a').and.returnValues([]);

      searchRestaurants('film a');
    });
  }); */
});
