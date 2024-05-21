/** 
 * @param {string} id 
 * @returns {HTMLElement} */
const getById = (id) => document.getElementById(id);

/**
 * @param {HTMLElement} element 
 * @param {String} classes 
 * @param {Boolean} condition */
const toggleClasses = (element, classes, condition) => {
    [classes].forEach(([trueClass, falseClass]) => {
        element.classList.toggle(trueClass, condition);
        element.classList.toggle(falseClass, !condition);
    });
};
///////////////////////////////////////////////////////////////

const nav = {
    nav: getById("nav"),
    navLargeBody: getById("nav-large-body"),
    navSmallBurger: getById("nav-small-burger")
};

window.addEventListener("scroll", (e) => {
    const scrollY = window.scrollY;
    const isOffsetY = scrollY >= 550;

    toggleClasses(nav.nav, ["text-black", "text-white"], isOffsetY);
    toggleClasses(nav.navLargeBody, ["bg-white", "bg-white/10"], isOffsetY);
    toggleClasses(nav.navSmallBurger, ["[&>span]:bg-black", "[&>span]:bg-white"], isOffsetY);
});
