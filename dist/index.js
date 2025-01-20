"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = create;
exports.Fragment = Fragment;
exports.hide = hide;
exports.show = show;
function create(type, props) {
    if (props === void 0) { props = {}; }
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    if (typeof type === 'function') {
        if (props.children === undefined) {
            if (children.length > 0) {
                props.children = children;
            }
            else {
                props.children = [];
            }
        }
        return type(props);
    }
    else {
        var elt = void 0;
        if (typeof type === 'string') {
            elt = document.createElement(type);
        }
        else {
            elt = type;
        }
        for (var _a = 0, _b = Object.entries(props); _a < _b.length; _a++) {
            var _c = _b[_a], key = _c[0], value = _c[1];
            elt.setAttribute(key, value);
        }
        for (var _d = 0, children_1 = children; _d < children_1.length; _d++) {
            var child = children_1[_d];
            elt.append(child);
        }
        return elt;
    }
}
function Fragment(_a) {
    var children = _a.children;
    var out = document.createDocumentFragment();
    for (var _i = 0, children_2 = children; _i < children_2.length; _i++) {
        var child = children_2[_i];
        out.append(child);
    }
    return out;
}
function hide(elt) {
    elt.dataset.oldDisplay = elt.style.display;
    elt.style.display = 'none';
}
function show(elt) {
    if ('oldDisplay' in elt.dataset && typeof elt.dataset.oldDisplay === 'string') {
        elt.style.display = elt.dataset.oldDisplay;
    }
}
