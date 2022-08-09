import createSpacingScale from "../utils/createSpacingScale.mjs";

const data = {
    "0" : "0px",
    "px": "1px",
    ...createSpacingScale({start: 0.25, entries: 10}),
    ...createSpacingScale({start: 3, entries: 3, step: 0.5}),
    ...createSpacingScale({start: 5, entries: 12, step: 1}),
    "72": "18rem",
    "80": "20rem",
    "96": "24rem",
}

export default {name: "spacing", data};