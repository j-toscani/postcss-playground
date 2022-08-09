import createTypeScale from "../utils/createTypeScale.mjs";

const data = createTypeScale({
  base: 0.875,
  sizes: Array.from(new Array(8), (e, i) => (i + 1).toString()),
});

export default { name: "text", data };
