import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import '@spectrum/sp-icon';
export default function template() {
    const classes = {
        'spectrum-Textfield--quiet': this.quiet
    };
    return html `
    <form class="spectrum-Search">
        <input type="search" placeholder="${this.placeholder}" name="search" value="${this.value}" class="spectrum-Textfield spectrum-Search-input ${classMap(classes)}" ?disabled="${this.disabled}">
        <sp-icon name="Magnifier" class="spectrum-Search-icon"></sp-icon>
        <button type="reset" class="spectrum-ClearButton">
            <sp-icon name="CrossSmall"></sp-icon>
        </button>
    </form>
    `;
}
//# sourceMappingURL=search.template.js.map