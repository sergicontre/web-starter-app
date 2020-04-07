import { LitElement, html, css } from 'lit-element';
import '@material/mwc-list/mwc-list.js';
import '@material/mwc-list/mwc-list-item.js';
import '@material/mwc-icon';


class UsersView extends LitElement {
    static get styles() {
        return css``
    }

    static get properties() {
        return {};
    }

    // Implement `render` to define a template for your element.
    render() {
        return html`
            <h1>Users view</h1>
            <a href="/"> Home </a>

            <mwc-list>
                <mwc-list-item graphic="avatar">
                    <span>avatar item</span>
                    <mwc-icon slot="graphic">person</mwc-icon>
                </mwc-list-item>
                <mwc-list-item graphic="avatar">
                    <span>avatar item</span>
                    <mwc-icon slot="graphic">person</mwc-icon>
                </mwc-list-item>
                <mwc-list-item graphic="avatar">
                    <span>avatar item</span>
                    <mwc-icon slot="graphic">person</mwc-icon>
                </mwc-list-item>
                <mwc-list-item graphic="avatar">
                    <span>avatar item</span>
                    <mwc-icon slot="graphic">person</mwc-icon>
                </mwc-list-item>
                <mwc-list-item graphic="avatar">
                    <span>avatar item</span>
                    <mwc-icon slot="graphic">person</mwc-icon>
                </mwc-list-item>
            </mwc-list>


        `
    }
}
customElements.define('users-view', UsersView);