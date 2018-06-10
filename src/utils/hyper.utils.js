export const hyperGetAttribute = (str, scope) => JSON.parse(scope.getAttribute(str));

export const hyperSetAttribute = (name, value, scope) => JSON.stringify(scope.setAttribute(name, value));
