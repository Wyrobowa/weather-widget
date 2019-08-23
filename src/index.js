import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// web component
class WeatherWidget extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('div');
    ReactDOM.render(<App />, mountPoint);
    this.appendChild(mountPoint);
  }
}

customElements.define('weather-widget', WeatherWidget);
