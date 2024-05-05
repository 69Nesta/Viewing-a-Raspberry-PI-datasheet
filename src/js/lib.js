export const getParents = el => {
    for (var parents = []; el; el = el.parentNode) {
        parents.push(el.id);
    }

    return parents;
};