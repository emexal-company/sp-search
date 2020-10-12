import { __decorate, __metadata } from "tslib";
import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import searchStyles from './search.styles';
import template from './search.template';
import { Button } from '@spectrum/sp-button';
import { Textfield } from '@spectrum/sp-textfield';
let Search = class Search extends Base {
    constructor() {
        super(...arguments);
        this.value = "";
        this.placeholder = "Search";
        this.disabled = false;
        this.quiet = false;
        this.open = false;
    }
    render() {
        return template.call(this);
    }
};
Search.componentStyles = [Button.componentStyles, Textfield.componentStyles, searchStyles];
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], Search.prototype, "value", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], Search.prototype, "placeholder", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Search.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Search.prototype, "quiet", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Search.prototype, "open", void 0);
Search = __decorate([
    customElement('sp-search')
], Search);
export { Search };
//# sourceMappingURL=search.component.js.map