import Vue from "../../utils/vue";
export var NlyCollapseWrapper = Vue.extend({
  name: "NlyCollapseWrapper",
  methods: {
    setBodyClassName() {
      const bodyWidth = document.body.clientWidth;
      const bodyClassName = document.body.className;

      if (bodyWidth < 992) {
        if (bodyClassName.indexOf("sidebar-collapse") == -1) {
          document.body.classList.add("sidebar-collapse");
        }
      } else {
        if (bodyClassName.indexOf("sidebar-collapse") != -1) {
          document.body.classList.remove("sidebar-collapse");
        }
      }
    }
  },
  mounted() {
    window.addEventListener("resize", () => this.setBodyClassName(), false);
  },
  created() {
    document.body.className =
      "sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed";
  },
  render(h) {
    return h(
      "div",
      {
        staticClass: "wrapper"
      },
      this.$slots.default
    );
  }
});
