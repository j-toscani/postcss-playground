import chroma from "chroma-js";


/**
 *
 * @param {string[]} colors - Array of string represented colors
 * @param {Object} config - Config Object for further customisation
 * @param {number} config.names - Number of colors to return
 * @param {string} config.mode - Interpolation mode, see https://gka.github.io/chroma.js/#scale-mode
 *
 */

export default function createColorScale(colors, config) {
  const { names, mode } = config;

  if (!colors) throw Error("Please provide colors.");

  const cssScale = chroma
    .scale(colors)
    .mode(mode)
    .colors(names.length)
    

  const scaleObj = {};

  for (let index = 0; index < names.length; index++) {
    scaleObj[names[index]] = cssScale[index];
  }

  return scaleObj;
}
