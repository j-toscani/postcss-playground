import fs from "fs/promises";
import colors from "./variables/colors.mjs";
import shadows from "./variables/shadows.mjs";
import radius from "./variables/radius.mjs";
import spacing from "./variables/spacing.mjs";
import fonts from "./variables/fonts.mjs";
import zindex from "./variables/zindex.mjs";

buildVariablesCss();

function buildVariablesCss() {
  const styleMap = createStyleMap([colors, fonts, spacing, radius, shadows, zindex], 'ck');
  const content = styleMapToString(styleMap);
  fs.writeFile("./src/variables/output.css", content);
}

function createStyleMap(objects, prefix) {
    const styleMap = new Map();
    objects.forEach((object) => {
        Object.entries(object.data).forEach(([key, value]) => {
          propertyToCssVariable([key, value], `--${prefix}-${object.name}` ?? `--${object.name}`, styleMap);
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
    case "number":
      value = value.toString();
    case "string":
      map.set(`${prefix}-${key}`, value);
      break;
    default:
      throw new Error(`Unsupported property type '${typeof value}'`);
  }
}
