import fs from "fs/promises";
import colors from "./variables/colors.mjs";
import shadows from "./variables/shadows.mjs";
import radius from "./variables/radius.mjs";
import spacing from "./variables/spacing.mjs";
import typography from "./variables/typography.mjs";

buildVariablesCss();

function buildVariablesCss() {
  const styleMap = createStyleMap(colors, typography, spacing, radius, shadows);
  const content = styleMapToString(styleMap);
  fs.writeFile("./src/variables/output.css", content);
}

function createStyleMap(...objects) {
    const styleMap = new Map();
    objects.forEach((object) => {
        Object.entries(object.data).forEach(([key, value]) => {
          propertyToCssVariable([key, value], `--${object.name}`, styleMap);
        });
    });

    return styleMap;
}

function styleMapToString(styleMap) {
    let variablesContent = ":root {\n";
    
    for (const [key, value] of styleMap) {
      variablesContent += `   ${key}: ${value};\n`;
    }
    
    variablesContent += "}";
    return variablesContent;
}

function propertyToCssVariable([key, value], prefix = "-", map) {
  switch (typeof value) {
    case "object":
      return Object.entries(value).map((entry) =>
        propertyToCssVariable(entry, prefix + `-${key}`, map)
      );
    case "string":
      map.set(`${prefix}-${key}`, value);
      break;
    default:
      throw new Error(`Unsupported property type '${typeof value}'`);
  }
}
