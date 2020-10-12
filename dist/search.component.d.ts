import { Base } from '@spectrum/sp-base';
export declare class Search extends Base {
    static componentStyles: (import("lit-element").CSSResult | import("lit-element").CSSResult[])[];
    value: string;
    placeholder: string;
    disabled: boolean;
    quiet: boolean;
    open: boolean;
    protected render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-search': Search;
    }
}
