import { html } from 'lit-element';
import { DemoSearch } from './demo-search.component';

import '@spectrum/sp-search';
import '@spectrum/sp-container';


export default function template(this: DemoSearch) {
  return html`
  <sp-container>
      <sp-rule medium label="Search - Standard"></sp-rule>

      <sp-demo width="220">
        <pre><sp-search></sp-search></pre>
      </sp-demo>
      <sp-demo width="220">
        <pre><sp-search disabled></sp-search></pre>
      </sp-demo>

      <sp-rule medium label="Search - Quiet"></sp-rule>

      <sp-demo width="220">
        <pre><sp-search quiet></sp-search></pre>
      </sp-demo>
      <sp-demo width="220">
        <pre><sp-search quiet disabled></sp-search></pre>
      </sp-demo>

    </sp-container>
  `;
}
