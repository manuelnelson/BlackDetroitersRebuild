import Vue from 'vue'

const className = 'is-entered';
function checkNodeVisibility(el: HTMLElement) {
    const { scrollY, innerHeight } = window;
    const isVisible = scrollY + innerHeight > el.offsetTop;
    const alreadyHasClass = el.classList.contains(className)
    if (!alreadyHasClass && isVisible) {
        el.classList.add(className);
    }
}


Vue.directive('scrollinto', {
    // When the bound element is inserted into the DOM...
    bind(el) {
      // Focus the element
      el.classList.add('scroll-into-view')
      window.addEventListener("scroll", () => checkNodeVisibility(el));
      window.addEventListener("resize", () => checkNodeVisibility(el));        
      setTimeout(() => {checkNodeVisibility(el)}, 100);
    },
    unbind(el, binding, vnode) {
        window.removeEventListener("scroll", () => checkNodeVisibility(el));
        window.removeEventListener("resize", () => checkNodeVisibility(el));        
    }
});