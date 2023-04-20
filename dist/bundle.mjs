import { openBlock as r, createElementBlock as l } from "vue";
const s = (o, e) => {
  const t = o.__vccOpts || o;
  for (const [n, c] of e)
    t[n] = c;
  return t;
}, _ = {};
function a(o, e) {
  return r(), l("h1", null, "turbo");
}
const d = /* @__PURE__ */ s(_, [["render", a]]), m = () => {
  console.log("hello, world");
};
export {
  d as SegmentedControl,
  m as hello
};
