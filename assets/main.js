(function() {

function aos_init() {
    AOS.init({
      disable: false,
      startEvent:'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      debounceDelay: 50,
      throttleDelay :99,

      offset: 120,
      delay:0,
      duration: 800,
      easing: 'ease',
      once: false,
      mirror: false,
      anchorPlacement:'top-bottom',
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

})();