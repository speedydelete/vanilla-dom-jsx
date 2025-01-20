
export type JSX = HTMLElement | string | Text | DocumentFragment;

export interface Props {
    children?: JSX[],
}

export function create(type: string | HTMLElement | Function, props: Props = {}, ...children: JSX[]) {
    if (typeof type === 'function') {  
        if (props.children === undefined) {
                if (children.length > 0) {
                    props.children = children;
                } else {
                    props.children = [];
                }
            }
            return type(props);
    } else {
        let elt: HTMLElement;
        if (typeof type === 'string') {
            elt = document.createElement(type);
        } else {
            elt = type;
        }
        for (const [key, value] of Object.entries(props)) {
            elt.setAttribute(key, value);
        }
        for (const child of children) {
            elt.append(child);
        }
        return elt;
    }
}

export function Fragment({children}: {children: JSX[]}): JSX {
    let out = document.createDocumentFragment();
    for (const child of children) {
        out.append(child);
    }
    return out;
}

export function hide(elt: HTMLElement): void {
    elt.dataset.oldDisplay = elt.style.display;
    elt.style.display = 'none';
}

export function show(elt: HTMLElement): void {
    if ('oldDisplay' in elt.dataset && typeof elt.dataset.oldDisplay === 'string') {
        elt.style.display = elt.dataset.oldDisplay;
    }
}
