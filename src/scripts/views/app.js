/* eslint-disable no-underscore-dangle */
import DrawerInitiator from '../utils/drawer-initiator';
import { greet } from '../utils/helper';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });

    // kita bisa menginisiasikan komponen lain bila ada
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();

    const titleHero = document.getElementsByClassName('hero__title')[0];
    titleHero.innerHTML = `Good ${greet()}. Showing other restaurant arround you`;

    const elFooter = document.getElementsByTagName('footer')[0];
    const year = new Date().getFullYear();
    const y = year === 2021 ? year : `2021 - ${year}`;
    elFooter.innerHTML = `Copyright © ${y} - Intfd Restaurant`;
  }
}

export default App;
