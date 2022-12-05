import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './core/bin/serviceWorker';
import App from './component/App';
/**
 * Renders the widget.
 *
 * It renders a react application as the widget.
 *
 * @param {string} instanceId
 *   The already present HTML element ID where the react app will be rendered.
 * @param {string} langCode
 *   The language code for internationalization purposes.
 * @param {string} origin
 *   Protocol and hostname where a JSONAPI endpoint is available.
 * @param {Function} cb
 *   A callback that executes after the widget has been rendered.
 */
function render(instanceId) {
  ReactDOM.render(<App />, document.getElementById('example-calculator'));
  serviceWorker.unregister();
}

window.renderExampleCalculator = render;
