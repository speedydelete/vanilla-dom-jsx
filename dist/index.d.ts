export type JSX = HTMLElement | string | Text | DocumentFragment;
export interface Props {
    children?: JSX[];
}
export declare function create(type: string | HTMLElement | Function, props?: Props, ...children: JSX[]): any;
export declare function Fragment({ children }: {
    children: JSX[];
}): JSX;
export declare function hide(elt: HTMLElement): void;
export declare function show(elt: HTMLElement): void;
