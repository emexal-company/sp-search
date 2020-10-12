import { PageViewElement } from '@components/page-view-element';
import { customElement, query } from 'lit-element';

import styles from './demo-search.styles';
import template from './demo-search.template';

// These are the shared styles needed by this element.
import sharedStyles from '@components/shared.styles';
import { Search } from '@spectrum/sp-search';
import { Spectrum } from '@spectrum/config/spectrum-config';

import Prism from "prismjs";

@customElement('demo-search')
export class DemoSearch extends PageViewElement {

  public static styles = [sharedStyles, styles];

  protected render() {
    return template.call(this);
  }

  protected firstUpdated() {
    Prism.highlightAllUnder(this.shadowRoot);
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'demo-search': DemoSearch;
  }
}
