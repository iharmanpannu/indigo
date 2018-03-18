const app = new Vue({
  el: '#app',
  data: {
    visible: false,
    home: true,
    show: false,
    active: false,
    subNavActive: false,
    safNavShow: false,
    repNavUl: false,
    admNavShow: false,
    rotateDropDown: false
  },
  methods: {
    hide: function() {
      if (
        (this.safNavShow = true) ||
        (this.admNavShow = true) ||
        (this.repNavUl = true)
      ) {
        return (
          (this.safNavShow = false),
          (this.admNavShow = false),
          (this.repNavUl = false),
          (this.rotateDropDown = false)
        );
      }
    }
  }
});
const directive = Vue.directive('click-outside', {
  bind: function(el, binding, vnode) {
    this.event = function(event) {
      if (!(el == event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', this.event);
  },
  unbind: function(el) {
    document.body.removeEventListener('click', this.event);
  }
});
