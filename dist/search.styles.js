/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import { css } from 'lit-element';
export default css `.spectrum-Search{--spectrum-search-padding-left: 36px;--spectrum-search-padding-right: 28px;--spectrum-search-quiet-padding-left: 24px;--spectrum-search-quiet-padding-right: 20px;--spectrum-textfield-height: var(--spectrum-alias-single-line-height);--spectrum-icon-magnifier-width: var(--spectrum-global-dimension-size-200);--spectrum-textfield-icon-color: var(--spectrum-alias-icon-color);--spectrum-search-icon-color-hover: var(--spectrum-global-color-gray-900);--spectrum-search-icon-color-down: var(--spectrum-alias-icon-color-down);--spectrum-search-icon-color-key-focus: var(--spectrum-global-color-gray-900);--spectrum-textfield-text-color-disabled: var(--spectrum-alias-text-color-disabled)}.spectrum-Search{display:inline-block;position:relative}.spectrum-Search .spectrum-ClearButton{position:absolute;right:0;top:0}.spectrum-Search-input{display:block;-webkit-appearance:none;outline-offset:-2px;padding-left:var(--spectrum-search-padding-left, 36px);text-indent:0;padding-right:var(--spectrum-search-padding-right, 28px)}.spectrum-Search-input::-webkit-search-cancel-button,.spectrum-Search-input::-webkit-search-decoration{-webkit-appearance:none}.spectrum-Search-input.spectrum-Textfield--quiet{padding-left:var(--spectrum-search-quiet-padding-left, 24px);padding-right:var(--spectrum-search-quiet-padding-right, 20px)}.spectrum-Search-input.spectrum-Textfield--quiet~.spectrum-Search-icon{left:0}.spectrum-Search-input.spectrum-Textfield--quiet~.spectrum-Search-clear{right:-8px}.spectrum-Search-input.spectrum-Textfield--quiet~.spectrum-Search-rightIcon{right:0}.spectrum-Search-icon{display:block;position:absolute;left:12px;top:calc(var(--spectrum-textfield-height, var(--spectrum-alias-single-line-height)) / 2 - var(--spectrum-icon-magnifier-width, var(--spectrum-global-dimension-size-200)) / 2);transition:color var(--spectrum-global-animation-duration-100, 130ms) ease-in-out;pointer-events:none}.spectrum-Search-icon{color:var(--spectrum-textfield-icon-color, var(--spectrum-alias-icon-color))}.spectrum-Search-input:hover~.spectrum-Search-icon{color:var(--spectrum-search-icon-color-hover, var(--spectrum-global-color-gray-900))}.spectrum-Search-input:active~.spectrum-Search-icon{color:var(--spectrum-search-icon-color-down, var(--spectrum-alias-icon-color-down))}.spectrum-Search-input.focus-ring~.spectrum-Search-icon{color:var(--spectrum-search-icon-color-key-focus, var(--spectrum-global-color-gray-900))}.spectrum-Search-input:disabled~.spectrum-Search-icon{color:var(--spectrum-textfield-text-color-disabled, var(--spectrum-alias-text-color-disabled))}`;
//# sourceMappingURL=search.styles.js.map