/**
 * 
 * @param {Object} config - Config object
 * @param {number} config.start - First value
 * @param {number} config.step - Base for rounding
 * @param {string} config.unit - CSS unit to use for scale  
 * @param {number} config.entries - Number of spacing values to return
 * 
 */

export default function createSpacingScale(config) {
    const { start = 0, step = 0.25, unit = "rem", entries = 4} = config;
    const entryArray = Array.from(new Array(entries), (_e, i) => {
        return start + step * i
    })

    const spacingMap = {};
    for (const entry of entryArray) {
        spacingMap[Math.round(entry / 0.25)] = `${entry}${unit}`;
    }

    return spacingMap
}