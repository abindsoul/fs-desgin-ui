import { defineComponent as e, openBlock as s, createElementBlock as o, toDisplayString as l } from "vue";
const i = /* @__PURE__ */ e({
  __name: "index",
  props: {
    type: {
      type: String,
      default: "default"
    },
    text: {
      type: String,
      default: "按钮"
    }
  },
  setup(t) {
    const n = t;
    return (c, p) => (s(), o("button", null, l(n.text), 1));
  }
}), r = {
  install(t) {
    t.component("fs-button", i);
  }
}, a = [
  r
], f = {
  // 写个开关 如果注册过就不管了
  version: "1.0.0",
  isInstall: !1,
  install(t) {
    this.isInstall || (a.forEach((n) => {
      t.use(n);
    }), this.isInstall = !0, console.log("fs-design已注册"));
  }
};
export {
  f as default
};
