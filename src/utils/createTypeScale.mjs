const keys = [
    "4",
    "3",
    "2",
    "1"
]

export default function createTypeScale(base = 1, factor = 1.25) {
    const scale = {
        text: base + "rem"
    };

    for (const iterator of keys) {
        scale[iterator] = `${base * factor}rem`;
        base = base * factor;
    }

    return scale;
}
