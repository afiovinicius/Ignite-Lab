// Theme
import { themes } from "@storybook/theming";
// Styles
import "../src/styles/global.tsx";
import "../src/styles/setitches.config.tsx";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  },
};
