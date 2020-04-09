import { LitElement, html, css } from 'lit-element';

class FavouriteView extends LitElement {
    static get styles() {
        return css`
            h1{
                color: pink
            }
        `
    }

    static get properties() {
        return {};
    }

    // Implement `render` to define a template for your element.
    render() {
        return html`
            <h1> My favourites items </h1>
            <a href="/"> Home </a>
            <a href="/users"> Users </a>
        `
    }
}
customElements.define('favourite-view', FavouriteView);