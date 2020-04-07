import { LitElement, html, css } from 'lit-element';

class HomeView extends LitElement {
    static get styles() {
        return css``
    }

    static get properties() {
        return {};
    }

    // Implement `render` to define a template for your element.
    render() {
        return html`
            <h1> Home view </h1>
            <a href="/users"> Users </a>
        `
    }
}
customElements.define('home-view', HomeView);