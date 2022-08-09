const keys = [
    "1",
    "2",
    "3",
    "4",
];

/**
 * Creates an Object, representing a Typescale in a certain unit
 * @param { Object } config - The Configuration Object for your Typescale 
 * @param { number } config.factor - Determines how fast the typesize increases, default 1.25
 * @param { number } config.base - The smallest type size, default 1
 * @param { string[] } config.sizes - Length = Number of sizes, Entry = name of respective variant, default = [ "1", "2", "3", "4" ]
 * @param { number } config.unit - Determines how fast the typesize increases, default "rem"
 */
export default function createTypeScale(config = {}) {
    let {sizes = keys, base = 1, factor = 1.2, unit = "rem"} = config;
    const scale = {
        text: base + unit
    };

    for (const iterator of sizes) {
        const value = base * factor;
        const cleaned = value - value % 0.125

        scale[iterator] = `${cleaned}${unit}`;
        base = base * factor;
    }

    return scale;
}
