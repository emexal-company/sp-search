import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import searchStyles from './search.styles';
import template from './search.template';

import { Button } from '@spectrum/sp-button';
import { Textfield } from '@spectrum/sp-textfield';

@customElement('sp-search')
export class Search extends Base {
  public static componentStyles = [ Button.componentStyles, Textfield.componentStyles, searchStyles ];

  @property({ type: String }) value = "";
  @property({ type: String }) placeholder = "Search";
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) quiet = false;
  @property({ type: Boolean }) open = false;

  protected render() {
    return template.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-search': Search;
  }
}
