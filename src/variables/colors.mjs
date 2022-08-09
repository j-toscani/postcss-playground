const suffixes = [50].concat(
  Array.from(new Array(9), (_e, i) => (i + 1) * 100)
);

const data = {
  black: "#000",
  white: "#fff",

  "white-a": createColorObject(
    "#fff 4%",
    "#fff 6%",
    "#fff 8%",
    "#fff 16%",
    "#fff 24%",
    "#fff 36%",
    "#fff 48%",
    "#fff 64%",
    "#fff 80%",
    "#fff 92%"
  ),

  "black-a": createColorObject(
    "#000 4%",
    "#000 6%",
    "#000 8%",
    "#000 16%",
    "#000 24%",
    "#000 36%",
    "#000 48%",
    "#000 64%",
    "#000 80%",
    "#000 92%"
  ),

  gray: createColorObject(
    "#F7FAFC",
    "#EDF2F7",
    "#E2E8F0",
    "#CBD5E0",
    "#A0AEC0",
    "#718096",
    "#4A5568",
    "#2D3748",
    "#1A202C",
    "#171923"
  ),

  red: createColorObject(
    "#FFF5F5",
    "#FED7D7",
    "#FEB2B2",
    "#FC8181",
    "#F56565",
    "#E53E3E",
    "#C53030",
    "#9B2C2C",
    "#822727",
    "#63171B"
  ),

  yellow: createColorObject(
    "#FFFFF0",
    "#FEFCBF",
    "#FAF089",
    "#F6E05E",
    "#ECC94B",
    "#D69E2E",
    "#B7791F",
    "#975A16",
    "#744210",
    "#5F370E"
  ),

  green: createColorObject(
    "#F0FFF4",
    "#C6F6D5",
    "#9AE6B4",
    "#68D391",
    "#48BB78",
    "#38A169",
    "#25855A",
    "#276749",
    "#22543D",
    "#1C4532"
  ),

  teal: createColorObject(
    "#E6FFFA",
    "#B2F5EA",
    "#81E6D9",
    "#4FD1C5",
    "#38B2AC",
    "#319795",
    "#2C7A7B",
    "#285E61",
    "#234E52",
    "#1D4044"
  ),

  cyan: createColorObject(
    "#EDFDFD",
    "#C4F1F9",
    "#9DECF9",
    "#76E4F7",
    "#0BC5EA",
    "#00B5D8",
    "#00A3C4",
    "#0987A0",
    "#086F83",
    "#065666"
  ),

  purple: createColorObject(
    "#FAF5FF",
    "#E9D8FD",
    "#D6BCFA",
    "#B794F4",
    "#9F7AEA",
    "#805AD5",
    "#6B46C1",
    "#553C9A",
    "#44337A",
    "#322659"
  ),

  pink: createColorObject(
    "#FFF5F7",
    "#FED7E2",
    "#FBB6CE",
    "#F687B3",
    "#ED64A6",
    "#D53F8C",
    "#B83280",
    "#97266D",
    "#702459",
    "#521B41"
  ),
};

export default { name: "colors", data };

function createColorObject(...colors) {
  const colorTuples = colors.map((color, index) => [suffixes[index], color]);
  return Object.fromEntries(colorTuples);
}
