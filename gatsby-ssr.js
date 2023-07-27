/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */
const React = require('react');

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setPreBodyComponents, setHtmlAttributes }) => {
  const script = `
  window.__DARK = 'dark';
  window.__LIGHT = 'light';
  
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const savedTheme = localStorage.getItem('theme');

  window.__theme = savedTheme || (darkQuery.matches ? window.__DARK : window.__LIGHT);
  window.__onThemeChange = () => {};

  window.__setTheme = (newTheme) => {
    if (newTheme === window.__DARK) {
      document.body.classList.add(window.__DARK);
    } else {
      document.body.classList.remove(window.__DARK);
    }
    localStorage.setItem('theme', newTheme);
    window.__theme = newTheme;
    window.__onThemeChange(newTheme);
  };

  darkQuery.addListener((e) => {
    window.__setTheme(e.matches ? window.__DARK : window.__LIGHT);
  });

  window.__setTheme(window.__theme);
  `;
  setHtmlAttributes({ lang: `ko` });
  setPreBodyComponents(<script dangerouslySetInnerHTML={{ __html: script }} />);
}
